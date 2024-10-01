import { NextResponse, type NextRequest } from 'next/server'
import { Token } from "../../../types/token"



export async function GET(request: NextRequest) {

    const response = await fetch(
        `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${process.env.API_KEY}`
    );
    const data = await response.json();

    return NextResponse.json({ data });
}