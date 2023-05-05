// import { responseWithResult } from '../../../helper/utils'
import { PrismaClient } from '@prisma/client'
import Express from 'express'

const prisma = new PrismaClient()

async function index(req: Express.Request, res: Express.Response) {

    let allMembers: any[] = []

    try{
        await prisma.$connect()
        allMembers = await prisma.member.findMany()
        await prisma.$disconnect()
    }catch(e){
        console.log(e)
    }

    return res.status(200).json({ result: allMembers })
}

async function add(req: Express.Request, res: Express.Response) {
    let result 
    try{
       
        result  = await prisma.member.create({
            data: {
                name : 'abc',
                salary : 1000,
                address : 'aaa',
                general : {
                    weight : 11,
                    height : 111,
                    gender :'M'
                },
                social: [
                    'fb'
                ],
                department :'ab'
            }
        })
        await prisma.$disconnect()
    }catch(e){
        console.log(e)
    }

    return res.status(200).json({ result: result })
}

function show(req: Express.Request, res: Express.Response) {
    return res.status(200).json({ result: 2 })
}

export {
    index,
    add
}