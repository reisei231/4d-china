import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const params = request.nextUrl.search.split("&")

  if(request.cookies.has('step2'))
  {
    if(request.nextUrl.pathname == '/' && params[0] == "?modal=true" && params[1] == "step=2") {
        return NextResponse.next()
      }
      return NextResponse.redirect(new URL('/?modal=true&step=2', request.url))
  }
  else{
    if( request.nextUrl.pathname == '/' && params[0] == "?modal=true" && params[1] == "step=2") return NextResponse.redirect(new URL('/?modal=true', request.url))
  }

  return NextResponse.next()
}
 
export const config = {
  matcher: ['/',],
}