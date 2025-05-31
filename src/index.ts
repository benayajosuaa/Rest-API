import express from 'express';
import {Application, Request, Response, NextFunction} from 'express';
import authRouter from './router/auth.router'
import movieRouter from './router/movie.router'

const port = 8080;


const app : Application = express();

// MIDDLEWARE
// middleware itu pasti punya 3 komponen : req, res, dan next
// eror handiling middleware : semua eror bakal jadi middleware
// kegunaan middleware -> memanipulasi request dan response sebelum masuk ke handler
app.use(express.json());

// contoh middleware
app.use((req: Request, res: Response, next:NextFunction) => {
    console.log("Masuk ke middleware nih");
    next();
})
// penempatan middleware selalu ditengah-tengah sebelum router




// ROUTER
app.get("/api", (req : Request, res : Response) => {
    // contoh penggunaan dari middleware
    const {email, username, password} = req.body;
    // itu semua bisa diambil karena sudah dipasang middleware
    // kalau misalnya middleware ditaruh sebelum di router, maka dia tidak bisa dijalankan karna router duluan yang di eksekusi bukan si middlewarenya

    // contoh penggunaan manipulasi middleware
    res.status(200).json({
        message : "Welcome to Express API",
        data : {
            email,
            username,
            password,
        }
    })
})

app.use("/api/auth", authRouter);
app.use("/api/movie", movieRouter)


// ERROR HANDLING MIDDLEWARE
// contoh error handling middlware
app.use((err : Error, req: Request, res: Response, next : NextFunction) => {
    res.status(400).send(err.message);
})

app.listen(port, () => {
    console.log(`Server started on port http://localhost:${port}`);
})