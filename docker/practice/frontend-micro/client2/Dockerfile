FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY ./index.html /usr/share/nginx/html/index.html

EXPOSE 3000 8082
ENTRYPOINT ["nginx", "-g", "daemon off;"]
