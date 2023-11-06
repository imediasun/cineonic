#!/usr/bin/make

.PHONY: help shell
.PHONY: install install-echo install-php install-frontend
.PHONY: init db-fresh api-doc api-routes api-keys env-copy env-copy-stage 
.PHONY: lint lint-api lint-admin lint-widget
.PHONY: test-api test-api-dev test-api-stage
.PHONY: up-admin up-redis up-postgres up-php build-php up-nginx up-echo
.PHONY: up down setup restart upgrade clean

.DEFAULT_GOAL : help
.SHELLFLAGS = -exc
SHELL := /bin/bash

PANEL_DIR := ./frontend/
API_DIR := ./api-backend/

RAND := $(shell bash -c 'echo $$((RANDOM % 1000))' )

GO_PIPELINE_COUNTER ?= 1
GO_STAGE_COUNTER ?= ${RAND}

# This will output the help for each task. thanks to https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
help: ## Show this help
	@printf "\033[33m%s:\033[0m\n" 'Available commands'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z0-9_-]+:.*?## / {printf "  \033[32m%-18s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

install: install-echo install-php install-back-office

install-echo:
	docker-compose run --rm --no-deps -T echo make install

install-php:
	docker-compose run --rm --no-deps -T cineonic-api-backend composer install

install-back-office:
	docker-compose run --rm --no-deps -T back-office npm install

shell: ## Start shell into chat-php container
	docker-compose exec cineonic-api-backend bash

init: ## Make full application initialization
	docker-compose run --rm -T cineonic-api-backend php ./artisan key:generate
	docker-compose run --rm -T cineonic-api-backend php artisan cache:clear
	docker-compose run --rm -T cineonic-api-backend php artisan route:clear
	docker-compose run --rm -T cineonic-api-backend php ./artisan migrate:fresh
	docker-compose run --rm -T cineonic-api-backend php ./artisan db:seed
	docker-compose run --rm -T cineonic-api-backend php ./artisan vendor:publish --provider "L5Swagger\L5SwaggerServiceProvider"
	make api-keys
	docker-compose run --rm -T cineonic-api-backend php ./artisan config:clear
	docker-compose run --rm -T cineonic-api-backend php ./artisan config:cache
	docker-compose up -d back-office --build


api-routes:
	docker-compose run --rm -T cineonic-api-backend php ./artisan route:list

api-doc:
	docker-compose run --rm -T cineonic-api-backend php ./artisan l5-swagger:generate

api-keys:
	docker-compose run --rm -T cineonic-api-backend php ./artisan passport:install \
	| grep --color=never -E "Client ID|Client secret"  > ./.env.frontend
	sed -i 's/: /=/' ./.env.frontend
	sed -i 1,2d ./.env.frontend
	cat ./.env.frontend | grep -i --color=never -E "Client ID|Client secret"  >> ./api-backend/.env
	sed -i 's/Client ID/CLIENT_ID/g' ./api-backend/.env ; sed -i 's/\(Client secret\)/CLIENT_SECRET/g' ./api-backend/.env
	sed -i 's/Client ID/VUE_APP_CLIENT_ID/g' ./.env.frontend ; sed -i 's/\(Client secret\)/VUE_APP_CLIENT_SECRET/g' ./.env.frontend
	echo 'VUE_APP_API_URL=http://localhost:8000/api/' >> ./.env.frontend
	echo 'VUE_APP_API_CLEAR=http://localhost:8000/' >> ./.env.frontend
	echo 'VUE_APP_API_WEBSOCKET=ws://localhost:6001/' >> ./.env.frontend
	cp -rf ./.env.frontend ./back-office/.env
	cat ./back-office/.env
	cat ./api-backend/.env


api-keys2:
	docker-compose run --rm -T cineonic-api-backend php ./artisan passport:install \
		| grep --color=never -E "Client ID|Client secret" > ./.env.apikeys
	sed -i 's/: /=/' ./.env.apikeys
	cp -f .env.apikeys ./api-backend/public/apikeys.md
	cat ./.env.apikeys

env-copy:
	cp -fa ./.env.example             ./.env
	cp -fa ./api-backend/.env.example ./api-backend/.env
	cp -fa ./frontend/.env.example    ./frontend/.env
	cp -fa ./echo/.env.example        ./echo/.env

lint: lint-api lint-frontend

lint-api: ## Execute chat-php tests
	docker run --rm \
		-v ${PWD}/api-backend/:/app/ -w /app \
		jakzal/phpqa:php8.1-alpine \
		/tools/parallel-lint -e php \
		--exclude vendor \
		--exclude _ide_helper.php \
		--exclude .phpstorm.meta.php  \
		./

lint-frontend: ## Execute chat-php tests
	docker-compose run --rm frontend npm run lint

test-api-dev: ## Execute chat-php tests
	curl -s http://api.backend.test:8080/apikeys.md -o ./.env.ci.apikeys;
	BASE_URL=http://api.backend.test:8080 \
		GO_PIPELINE_COUNTER=${GO_PIPELINE_COUNTER} \
		GO_STAGE_COUNTER=${GO_STAGE_COUNTER} \
		DELAY=200 \
		docker-compose --env-file ./.env.ci.apikeys \
		-f docker-compose.ci.yml \
		run --rm -T newman

test-api-stage: ## Execute chat-php tests
	curl -s http://chat-stage.blazing.market:8080/apikeys.md -o ./.env.ci.apikeys;
	BASE_URL=http://chat-stage.blazing.market:8080 \
		GO_PIPELINE_COUNTER=${GO_PIPELINE_COUNTER} \
		GO_STAGE_COUNTER=${GO_STAGE_COUNTER} \
		DELAY=200 \
		docker-compose --env-file ./.env.ci.apikeys \
		-f docker-compose.ci.yml \
		run --rm -T newman

up-admin: ## Start frontend
	docker-compose up --detach frontend

up-redis: ## Create and start containers
	docker-compose up -d redis

up-mysql: ## Create and start containers
	docker-compose up -d mysql

up-php: ## Create and start containers
	docker-compose up -d cineonic-api-backend

build-php: ## Create and start containers
	docker-compose build cineonic-api-backend

up-nginx: ## Create and start containers
	docker-compose up -d nginx

up: ## Create and start containers
	docker-compose --env-file .env up -d

up-echo: ## Create and start containers
	docker-compose up -d echo
	#@printf "\n   \e[30;42m %s \033[0m\n\n" 'Navigate your browser to ⇒ http://127.0.0.1:8080 or https://127.0.0.1:8443';

down: ## Stop containers
	docker-compose down

setup: env-copy up install init ## Create and start containers

restart: down up ## Restart all containers

upgrade: ## Create and start containers
	make build-php
	make install
	make up-php
	make init

clean: ## Make clean
	docker-compose run --rm --no-deps php-fpm sh -c "\
		php ./artisan config:clear; php ./artisan route:clear; php ./artisan view:clear; php ./artisan cache:clear file"
	docker-compose down -v # Stops containers and remove named volumes declared in the `volumes` section


