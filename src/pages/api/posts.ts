import type { NextApiRequest, NextApiResponse } from 'next'
import { Prisma, PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Prisma.PostCreateInput>
) {
    const { method } = req;

    switch (method) {
        case "POST": {
            const {title, content} = JSON.parse(req.body);
            const post: Prisma.PostCreateInput = await prisma.post.create({
                data: {
                    title,
                    content
                }
            });
            res.status(201).json(post);
            break;
        }
        default : {
            res.setHeader('Allow', ['POST']);
            res.status(405).end(`Method ${method} is Not allowed`);
        }
    }


}