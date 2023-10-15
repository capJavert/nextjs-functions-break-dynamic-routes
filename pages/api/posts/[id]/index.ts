import { NextApiRequest, NextApiResponse } from "next"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query

    if (!id || id.length > 10) {
        return res.status(400).json({
            message: 'bad request'
        })
    }

    res.status(200).json({
        id: id,
        name: `Post #${id}`
    })
}
