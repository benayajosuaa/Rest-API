import {Router, Request, Response, NextFunction} from 'express';

const router = Router();

router.post("/login", (req: Request, res: Response)=> {
    res.status(200).send("ini kamu masuk ke router login")
})

router.post("/register", (req: Request, res: Response)=> {
    res.status(200).send("ini kamu masuk ke router register")
})


// sambungan error handling middleware untuk case Autentikasi
// CONTOH :
// router.post("/register", (req: Request, res:Response, next : NextFunction) => {
//     try {
//         throw new Error ("text error");
//     } catch (err){
//         next(err);
//     }
// })



export default router;
