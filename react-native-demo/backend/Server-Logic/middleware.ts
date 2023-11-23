import { Request, Response } from "express"
import mortal_kombat_characters from "./Stactic-assests/Mortal-Kombat.json"

export default function get_Characters(Req: Request, Res: Response, next: any){
    try{
        Res.status(200).json(mortal_kombat_characters)
        next()
    }
    catch(e: any){
        console.log(e)
    }
}
