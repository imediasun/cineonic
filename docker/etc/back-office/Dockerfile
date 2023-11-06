FROM node:12.9.1-alpine AS build

WORKDIR /app

COPY . /app/

RUN yarn install && yarn run build

FROM nginx:alpine

COPY ./devops/docker/config/nginx.conf /etc/nginx/conf.d/default.conf

COPY ./devops/docker/entrypoint.sh /opt/bin/entrypoint.sh

RUN chmod +x /opt/bin/entrypoint.sh

CMD ["/opt/bin/entrypoint.sh"]

COPY --from=build /app/dist /usr/share/nginx/html/
