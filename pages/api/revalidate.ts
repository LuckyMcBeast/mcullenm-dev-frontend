// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.query.secret !== process.env.REVALID){
        return res.status(401).json({ message: 'Unauthorized' })
    }
    try {
        if(req.body.urls !== null && req.body.urls !== undefined && req.body.urls !== []){
            for(const url of req.body.urls) {
                await res.revalidate(url)
            }
            return res.json({ revalidated: true })
        }
        else{
            return res.status(400).json({message: 'Bad Request'})
        }
    } catch(error) {
        console.error(error)
        return res.status(500).send('Error Revalidating')
    }
}