export {default} from "next-auth/middleware"

export const config = {
    // *: zero or more paramters
    // +: one or more parameters
    // ?: zero or one parameters
    matcher: ["/dashboard/:path*"]
}