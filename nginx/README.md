# NGINX

## Structure
### /etc/nginx/
default configuration root for the NGINX server.ou will find configuration files that instruct NGINX on how to behave.

### /etc/nginx/nginx.conf
The /etc/nginx/nginx.conf file is the default configuration entry point used by the NGINX service.In a default configuration, the /etc/nginx/nginx.conf file includes the top-level http block, or context, which includes all configuration files in the directory described next.

### /var/log/nginx/
The /var/log/nginx/ directory is the default log location for NGINX. Within this directory you will find an access.log file and an error.log file. The access log contains an entry for each request NGINX serves. The error logfile contains error events and debug information if the debug module is enabled