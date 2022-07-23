FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./index.html /usr/share/nginx/html/index.html
COPY ./error /usr/share/nginx/html/
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]
