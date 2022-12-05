import { Request, Response } from "express";
import connection from "../connection";



export default async function deleteCharacters(
    req: Request,
    res: Response
): Promise<void> { try{

    const {id} = req.params

    await connection("character")
    .delete()
    .where({id})
    res.status(201).end()
  
}catch (error) {
  res.status(500).end("Unexpected serve error")
}}
   // const index: number = characters.findIndex(
   //     character => character.id === Number(id)
  //  )
//
   //  if(index > -1) characters.splice(index, 1)
       




     
