import { NextRequest, NextResponse } from 'next/server'

// Cheap application-layer guard against common automated vulnerability probes.
// This does not replace network-level rate limiting, DDoS protection or a WAF.
const scanPaths = [
  /^\/\.env(?:[./]|$)/i,
  /^\/\.git(?:[./]|$)/i,
  /^\/wp-(?:admin|login|content|includes)(?:[./]|$)/i,
  /^\/xmlrpc\.php$/i,
  /^\/phpmyadmin(?:[./]|$)/i,
  /^\/vendor\/phpunit(?:[./]|$)/i,
  /^\/actuator(?:[./]|$)/i,
  /^\/cgi-bin(?:[./]|$)/i,
  /^\/server-status$/i,
  /^\/\.well-known\/security\.txt\.bak$/i,
]

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  if (scanPaths.some((pattern) => pattern.test(pathname))) {
    return new NextResponse(null, {
      status: 404,
      headers: { 'Cache-Control': 'no-store' },
    })
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
