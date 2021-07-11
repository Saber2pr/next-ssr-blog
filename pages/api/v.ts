import { clearVisitors } from './../../api/visitors'
import { getOrigin } from './../../api/utils'
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
    res.writeHead(200, {
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Origin': getOrigin(),
    })
    if (method === 'post') {
      res.end(
        JSON.stringify({
          status: 200,
          data: pushVisitor(JSON.parse(req.body)),
          message: 'push ok.',
        })
      )
    }
    if (method === 'get') {
      const clear = req?.query?.clear
      return res.end(
        JSON.stringify({
          status: 200,
          data: clear ? clearVisitors() : getVisitors(),
          message: 'get ok.',
        })
      )
    }
  } catch (error) {
    console.log(error)
    res.end(JSON.stringify({ status: 500, data: {}, message: 'error' }))
  }
}
