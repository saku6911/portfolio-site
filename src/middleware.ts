// middleware.ts
import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],  
}

export function middleware(req: NextRequest) {
  if (process.env.NODE_ENV !== 'production') {
    return NextResponse.next()
  }

  const authHeader = req.headers.get('authorization')
  if (authHeader) {
    const base64 = authHeader.split(' ')[1] || ''
    let decoded = ''
    try {
  decoded = atob(base64)
} catch (err) {
  console.error('Failed to decode base64:', err)
  decoded = ''
}
    const [user, pwd] = decoded.split(':')

    if (
      user === process.env.BASIC_AUTH_USER &&
      pwd === process.env.BASIC_AUTH_PASSWORD
    ) {
      return NextResponse.next()
    }
  }

  const url = req.nextUrl.clone()
  url.pathname = '/api/auth'
  return NextResponse.rewrite(url)
}
