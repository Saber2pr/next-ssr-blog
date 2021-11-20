### next-ssr-blog

in work progress..

> 此项目为 PWA 版博客提供 SSR 服务，[PWA 博客主仓库](https://github.com/Saber2pr/saber2pr.github.io)

#### Feature

1. 使用 Next.js 服务端渲染
2. 使用 Github Action 自动构建发布 Docker 镜像
3. 使用 Github Action 拷贝容器静态资源并上传 CDN 到 jsDelivr
4. 服务器端使用 Docker 容器运行应用
5. 服务器端使用 Nginx 反向代理容器端口
6. 服务器端使用 Nginx 添加 HTTPS 支持
7. 使用 Webhook 通知自动拉取镜像部署

#### Deploy

```bash
docker pull saber2pr/next-ssr-blog:<tag>
```

```bash
docker run --restart=always -d -p 88:3000 -it saber2pr/next-ssr-blog:<tag>
```

### Other

1. [nest-api-blog](https://github.com/Saber2pr/nest-api-blog): Nest.js + Docker + Vercel + MySQL + Github Action
