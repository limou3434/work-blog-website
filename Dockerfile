# 编译代码(请在本地直接使用 npm run build 来编译)
FROM caddy:2.10.0
WORKDIR /etc/caddy
COPY ./docs/.vuepress/dist ./dist
COPY ./Caddyfile ./Caddyfile
EXPOSE 3000
