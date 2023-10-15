import { NextResponse } from "next/server"

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    const { id } = params 

    if (!id || id.length > 10) {
        return NextResponse.json({
            message: 'bad request'
        }, {
            status: 400
        })
    }

    return NextResponse.json({
        id,
        name: `User #${id}`
    })
  }
