# CONFIG
NAME="next-ssr-blog";
PORT=80;

docker stop ${NAME} \
&& docker rm ${NAME};
docker run --restart=always --name=${NAME} -d -e NODE_ENV=production -p ${PORT}:${PORT} ${NAME}:$1;