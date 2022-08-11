# Proxy & Reverse Proxy

### What's Proxy?
Forward proxy (aka proxy , web proxy , proxy) is a server that sites in front of group of clients . Without this , all clients request to server directly without any middleware , But in the forward-proxy client request to proxy server and proxy server request to the main server . 
![Proxy server](https://github.com/tmohammad78/learning/blob/main/nginx/reverse-proxy/proxy.png)

#### Why we use proxy ? 
- To avoid state or institutional browsing restrictions 
- To block access to certain content 
  roxy which enables content filtering rules, refusing to forward responses from Facebook and other social media sites.

### What's Reverse Proxy?
A reverse proxy is a server that sits in front of one or more web servers, intercepting requests from clients. This is different from a forward proxy, where the proxy sits in front of the clients. With a reverse proxy, when clients send requests to the origin server of a website, those requests are intercepted at the network edge by the reverse proxy server
![Proxy server](https://github.com/tmohammad78/learning/blob/main/nginx/reverse-proxy/reverse-proxy.png)

#### Why we use reverse proxy ? 
- Load Balancing
- Protection from attacks (a web site or service never needs to reveal the IP address of their origin server(s).)
- Cahching:
A reverse proxy can also cache content, resulting in faster performance. For example, if a user in Paris visits a reverse-proxied website with web servers in Los Angeles, the user might actually connect to a local reverse proxy server in Paris, which will then have to communicate with an origin server in L.A. The proxy server can then cache (or temporarily save) the response data. Subsequent Parisian users who browse the site will then get the locally cached version from the Parisian reverse proxy server, resulting in much faster performance. (cloudflare)
- SSL encryption


**Implementation** : There is a sample project in this [link](https://github.com/tmohammad78/frontend-configuration/tree/main/nginx/frontend-proxy)