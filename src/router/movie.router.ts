// CONTOH KASUS UNTUK ROUTER MOVIE
// ---------------------------------------------

import {Router, Request, Response} from 'express';

// tidak ada import "const app : Application = express();"
const router = Router();

// ini anggap untuk menampilkan semua moview
router.get("/", (req: Request, res: Response)=> {
    res.status(200).send("anggap ini menampilkan semua movies")
})


export default router;
