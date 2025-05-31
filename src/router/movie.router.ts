// CONTOH KASUS UNTUK ROUTER MOVIE
// ---------------------------------------------

import {Router, Request, Response} from 'express';

// tidak ada import "const app : Application = express();"
const router = Router();

// ini anggap untuk menampilkan semua moview
router.post("/", (req: Request, res: Response)=> {
    res.status(200).send("anggap ini menampilkan semua movies")
})

router.get("/:id", (req: Request, res: Response) => {
    res.status(200).send("ini adalah movie yang kamu pilih")
})


export default router;
