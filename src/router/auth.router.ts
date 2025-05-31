// CONTOH KASUS UNTUK ROUTER LOGIN DAN REGISTER
// ---------------------------------------------



// disini pembagian router dari suatu module API yang kompleks
// segala sesuatu router autentikasi akan masuk ke file ini

// disini itu seolah-olah membuat express ke2
// maka dia pembuatannya mirip

import {Router, Request, Response} from 'express';

// tidak ada import "const app : Application = express();"
const router = Router();

// router untuk LOGIN
router.post("/login", (req: Request, res: Response)=> {
    res.status(200).send("ini kamu masuk ke router login")
})

// router untuk REGISTER
router.post("/register", (req: Request, res: Response)=> {
    res.status(200).send("ini kamu masuk ke router register")
})

export default router;
