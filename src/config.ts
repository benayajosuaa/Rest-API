// supaya tidak langsung di index.ts tentang dotenv, jadi tinggal panggil

import dotenv from 'dotenv';

dotenv.config();

export const {PORT} = process.env;


// TUJUAN :
// jadi kita tidak perlu membuat codingan seperti ini di dalam file index.ts

// import dotenv from 'dotenv';
// const port = process.env.PORT || 5000;