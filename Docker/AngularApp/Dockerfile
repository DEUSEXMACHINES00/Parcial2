FROM nginx:latest
 
RUN rm -rf /usr/share/nginx/html/*

COPY nginx.conf /etc/nginx/conf.d/

COPY frontend /usr/share/nginx/html

#expose app and 80 for nginx app

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

