import { NextApiRequest, NextApiResponse } from 'next'

import { getVisitors, pushVisitor } from '../../api/visitors'

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const method = req.method.toLowerCase()
    if(method === 'post'){
      res.end(JSON.stringify({status: 200, data: pushVisitor(req.body), message: 'push ok.'}))
    }
    if(method === 'get'){
      return res.end(JSON.stringify({status: 200, data: getVisitors(), message: 'get ok.'}))
    }
  } catch (error) {
    console.log(error)
    res.end(JSON.stringify({ status: 500, data: {}, message: 'error' }))
  }
}
