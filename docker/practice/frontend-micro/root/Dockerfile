FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY ./index.html /usr/share/nginx/html/index.html
COPY ./nginx.conf /etc/nginx/default.conf
COPY ./not-found.html /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
