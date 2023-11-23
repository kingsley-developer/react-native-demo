import cors from "cors"
import { config } from "dotenv"
import express, { Request, Response, Express } from "express"
import get_Characters from "./middleware"
import moment from "moment"

export default function Server(){
    config()
    const app: Express = express()
    let port_string = process.env.Port_Number
    const PORT = Number(port_string)
    const date: string = moment().calendar()
    
    app.use(cors())
    app.use("/characters", get_Characters)

    app.get("/characters", (Req: Request, Res: Response)=>{
    })
    app.all("*", (Req: Request, Res: Response)=>{
        Res.status(404).json({date, msg:"Page Not Found"})
    })
    app.listen(PORT, ()=>{
        console.log(`Server listening on port ${PORT}`)
    })
}
