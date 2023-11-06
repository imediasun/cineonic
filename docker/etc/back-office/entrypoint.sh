#!/bin/sh

set -e

port=${PORT:-8080}

sed -i "s/\$PORT/$port/g" /etc/nginx/conf.d/default.conf

nginx -g "daemon off;"
