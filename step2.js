"use strict";

const fsP = require("fs/promises");
const axios = require("axios");
const argv = process.argv;

async function cat(path) {
    try {
        let contents = await fsP.readFile(path, "utf8");
        console.log('File contents:', contents);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

async function webCat(URL) {
    try {
        let response = await axios.get(URL);
        console.log('URL contents:', response.data);
    } catch (err) {
        console.error(`Error fetching ${URL}:
            ${err.message}`);
        process.exit(1);
    }
}

if (argv[2].startsWith('http')) {
    webCat(argv[2]);
} else { cat(argv[2]); }

