import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  // 認証を促すヘッダーを返す
  res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"')
  res.status(401).end('Authentication required')
}