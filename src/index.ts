import express from 'express';
import {Application, Request, Response, NextFunction} from 'express';

// router untuk login & register -> segala urusan user
import authRouter from './router/auth.router'
// router untuk movie
import movieRouter from './router/movie.router'

const port = 8080;


const app : Application = express();


app.get("/api", (req : Request, res : Response) => {
    res.status(200).send("Welcome to my Express API")
})


// -------------------------------------------------------------------------------------------------
// | Disini ibarat memanggil semua router yang ada dibuat di folder ./router                       |
// -------------------------------------------------------------------------------------------------

// menggunakan ".use" agar dia mengikuti http method di auth.router.ts

// ROUTER USER LOGIN REGISTER
app.use("/api/auth", authRouter);
// jadi disini nanti akan mengarahkan ke router login
//     |                            |
//     V                            V
// router.post("/login", (req: Request, res: Response)=> {
//     res.status(200).send("ini kamu masuk ke router login")
// })

// jadi nanti dia kesambung ke router tersendiri 
// misal mau ke "/login" kah 
// atau mau ke "/register"


// ROUTER MOVIES
app.use("/api/movie", movieRouter)

// -------------------------------------------------------------------------------------------------




app.listen(port, () => {
    console.log(`Server started on port http://localhost:${port}`);
})