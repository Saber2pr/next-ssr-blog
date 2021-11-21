export const encodeUrl = (url: string) => {
  if (url.includes('%')) return url
  return encodeURI(url)
}
