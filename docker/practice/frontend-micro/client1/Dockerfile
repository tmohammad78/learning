FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY ./index.html /usr/share/nginx/html/index.html

EXPOSE 3000 8081
ENTRYPOINT ["nginx", "-g", "daemon off;"]
