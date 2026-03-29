import { Request, Response } from "express";


export async function getTest(req: Request, res: Response){
    res.status(200).send({
        message: "Test data",
        data: 'hello'
    })
}