import path from 'path';
import fs from 'fs';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const ROOT_DIR = path.join(__dirname, '..');
export const CACHE_DIR = path.join(ROOT_DIR, 'cache');
export const HTML_DIR = path.join(ROOT_DIR, 'html');
export const IMG_DIR = path.join(HTML_DIR, 'img');

function mkdir(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
}

function init() {
    mkdir(CACHE_DIR);
    mkdir(HTML_DIR);
    mkdir(IMG_DIR);
}

init();