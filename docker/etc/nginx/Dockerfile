FROM debian:jessie

RUN printf "deb http://archive.debian.org/debian/ jessie main\ndeb-src http://archive.debian.org/debian/ jessie main\ndeb http://security.debian.org jessie/updates main\ndeb-src http://security.debian.org jessie/updates main" > /etc/apt/sources.list

RUN apt-get update && apt-get install -y --force-yes nginx openssl

RUN rm /etc/nginx/sites-available/default
RUN rm /etc/nginx/sites-enabled/default

#RUN mkdir -p /etc/ssl/private

#RUN openssl req -new -newkey rsa:4096 -nodes \
#        -keyout /etc/ssl/private/api.backoffice.test.key -out /etc/ssl/private/api.backoffice.test.csr \
#        -subj "/C=US/ST=Denial/L=Springfield/O=Dis/CN=api.backoffice.test" \
#    && openssl req -new -newkey rsa:4096 -days 365 -nodes -x509 \
#           -subj "/C=US/ST=Denial/L=Springfield/O=Dis/CN=api.backoffice.test" \
#           -keyout /etc/ssl/private/api.backoffice.test.key  -out /etc/ssl/private/api.backoffice.test.crt
#
#RUN openssl req -new -newkey rsa:4096 -nodes \
#        -keyout /etc/ssl/private/backoffice.test.key -out /etc/ssl/private/backoffice.test.csr \
#        -subj "/C=US/ST=Denial/L=Springfield/O=Dis/CN=backoffice.test" \
#    && openssl req -new -newkey rsa:4096 -days 365 -nodes -x509 \
#           -subj "/C=US/ST=Denial/L=Springfield/O=Dis/CN=backoffice.test" \
#           -keyout /etc/ssl/private/backoffice.test.key  -out /etc/ssl/private/backoffice.test.crt

EXPOSE 3000
COPY ./docker/etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf

CMD ["nginx"]
