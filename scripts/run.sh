# CONFIG
NAME="blog-ssr";
PORT=443;

docker stop ${NAME} \
&& docker rm ${NAME};
docker run --restart=always --name=${NAME} -d -e NODE_ENV=production -p ${PORT}:${PORT} ${NAME}:$1;