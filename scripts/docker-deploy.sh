tag=$1
docker pull saber2pr/next-ssr-blog:$tag
docker run --restart=always -d -it saber2pr/next-ssr-blog:$tag