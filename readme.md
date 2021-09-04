### blog-ssr

in work progress..

#### Feature

1. 使用Nest.js服务端渲染
2. 使用Github Action自动构建发布Docker镜像
3. 使用Github Action拷贝容器静态资源并上传CDN到jsDelivr
4. 服务器端使用Docker容器运行应用
5. 服务器端使用Nginx反向代理容器端口
6. 服务器端使用Nginx添加HTTPS支持

#### Deploy

```bash
docker pull saber2pr/blog-ssr:<tag>
```

```bash
docker run --restart=always -e NODE_ENV=production -d -p 80:80 -it saber2pr/blog-ssr:<tag>
```
