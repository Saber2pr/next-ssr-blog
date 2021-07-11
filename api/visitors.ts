type Visitor = any

let visitors: Visitor[] = []

const MAX = 10000

export const pushVisitor = (item: Visitor) => {
  visitors = [item, ...visitors]
  visitors = visitors.slice(0, MAX)
  return visitors
}

export const getVisitors = () => visitors.slice()