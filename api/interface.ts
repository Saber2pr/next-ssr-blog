export interface User {}

export interface Home {
  title: string
  infor: string
  pic: string
  items: {
    type: string
    content: string
  }[]
}