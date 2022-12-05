import { Request, Response } from "express";
import { character } from "../types";
import connection from "../connection"



export default async function getAllCharacters (
    req: Request,
    res: Response

):Promise <void> {
    try{
    const name = req.query

    const characters: character[]= await connection("character") 

    res.send(characters)} catch(error){
        res.status(500).send("Unexpected serve error")
        
    }
    

}


