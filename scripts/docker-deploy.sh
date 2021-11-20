tag=$1
docker pull saber2pr/next-ssr-blog:$tag > ./deploy-blog.log
docker run --restart=always -d -p 88:3000 -it saber2pr/next-ssr-blog:$tag > ./deploy-blog.log