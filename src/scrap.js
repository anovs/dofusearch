import path from 'path';
import fs from 'fs';
import got from 'got';
import { CACHE_DIR, HTML_DIR, IMG_DIR } from './directories';
import { parseItems } from './item-parser';

const BASE_URL = 'https://barbok.eratz.fr';

const PAGES = [
    ['Amulette', '/index.php/equipements/amulettes', false],
    ['Anneau', '/index.php/equipements/anneaux', false],
    ['Botte', '/index.php/equipements/bottes', false],
    ['Cape', '/index.php/equipements/capes', false],
    ['Ceinture', '/index.php/equipements/ceintures', false],
    ['Chapeau', '/index.php/equipements/chapeaux', false],
    ['Arc', '/index.php/armes/arc', true],
    ['Baguette', '/index.php/armes/baguette', true],
    ['Baton', '/index.php/armes/baton', true],
    ['Dague', '/index.php/armes/dague', true],
    ['Epée', '/index.php/armes/epee', true],
    ['Hache', '/index.php/armes/hache', true],
    ['Marteau', '/index.php/armes/marteaux', true],
    ['Pelle', '/index.php/armes/pelle', true]
];

export async function scrap() {
    const items = [];
    const stats = {};

    for (const [type, url, isWeapon] of PAGES) {
        const fileName = url.substring(url.lastIndexOf('/') + 1) + '.html';
        const filePath = path.join(CACHE_DIR, fileName);
        let body = null;

        if (fs.existsSync(filePath)) {
            body = fs.readFileSync(filePath, 'utf8');
        } else {
            body = await httpGet(url);
            fs.writeFileSync(filePath, body, 'utf8');
        }

        for (const item of parseItems(body, type, isWeapon)) {
            saveImage(item.imageUrl);
            item.imageUrl = 'html/img/' + item.imageUrl.substring(item.imageUrl.lastIndexOf('/') + 1);
            items.push(item);

            for (const { stat, min, max } of item.effects) {
                if (!min && !max) {
                    continue;
                }

                const statInfo = stats[stat] || (stats[stat] = { name: stat, min: Infinity, max: -Infinity });
                statInfo.min = Math.min(statInfo.min, min);
                statInfo.max = Math.max(statInfo.max, max);
            }
        }

        // console.log(items[0]);
    }

    const databaseFilePath = path.join(HTML_DIR, 'database.js');
    const databaseContent = [
        `const STATS = ${JSON.stringify(Object.values(stats), null, '  ')}`,
        `const ITEMS = ${JSON.stringify(items, null, '  ')};`
    ].join('\n\n');
    fs.writeFileSync(databaseFilePath, databaseContent, 'utf8');
}

async function saveImage(url) {
    const fileName = url.substring(url.lastIndexOf('/') + 1);
    const filePath = path.join(IMG_DIR, fileName);

    if (!fs.existsSync(filePath)) {
        try {
            const body = await httpGet(url, { responseType: 'buffer' });
            fs.writeFileSync(filePath, body, null);
        } catch (e) {
            const dummy = fs.readFileSync(path.join(IMG_DIR, 'dummy.png'), null);
            fs.writeFileSync(filePath, dummy, null);
        }
    }
}

async function httpGet(url, options) {
    console.log(`GET: ${url}`);

    const fullUrl = BASE_URL + url;

    return (await got(fullUrl, options)).body;
}