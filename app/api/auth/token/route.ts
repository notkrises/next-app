import {getToken} from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server"

export async function Get(request: NextRequest){
    const token = await getToken({req: request}) 
    return NextResponse.json(token);
}