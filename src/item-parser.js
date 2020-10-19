class ItemParser {
    constructor(str, type, isWeapon) {
        this._str = str;
        this._isWeapon = isWeapon;
        this._type = type;
        this._index = 0;
    }

    _locate(startTag, endTag) {
        if (this._index === this._str.length) {
            return null;
        }

        const start = this._str.indexOf(startTag, this._index) + startTag.length;

        if (start === startTag.length - 1) {
            this._index = this._str.length;
            return null;
        }

        const end = this._str.indexOf(endTag, start);
        const str = this._str.substring(start, end);
        this._index = end + endTag.length;

        return str;
    }

    _parseNextItem() {
        const type = this._type;
        const levelStr = this._locate('<th class="niveau">', '</th>');
        const name = this._locate('<th colspan="4" class="nom">', '</th>');
        const imageUrl = this._locate('<td class="screen"><img src="', '" alt="Chargement de l\'image..."');
        const effects = [];
        const damages = [];
        let effectsStr = null;

        if (!levelStr) {
            return null;
        }

        if (this._isWeapon) {
            effectsStr = this._locate('<td class="b2">', '<br /></td>');
        } else {
            effectsStr = this._locate('<td class="effet">', '</td>');
        }

        const level = parseInt(levelStr.replace('Niveau ', ''));
        const lines = effectsStr.split('<br />')
            .map(str => str.replace(/<font color='\w+'>/g, ''))
            .map(str => str.replace(/<\/font>/g, ''))
            .map(str => str.replace(/<\/span>/g, ''))
            .map(str => str.replace(/<\/?b>/g, ''))
            .map(str => str.replace(/<span style='color:#?\w+;'>/g, ''))
            .filter(str => str);

        for (const str of lines) {
            if (str.startsWith('Dommages :') || str.startsWith('Vole ') || str.startsWith('PV rendus : ')) {
                damages.push(str);
            } else {
                let stat, min, max, description;

                if (str.includes('Augmente les dommages de ')) {
                    stat = 'Dommages';
                    [min, max] = str.replace('Augmente les dommages de ', '').split(' à ').map(s => parseInt(s));
                } else if (str.endsWith(' de dommages')) {
                    stat = 'Dommages';
                    [min, max] = str.replace(' de dommages', '').split(' à ').map(s => parseInt(s));
                } else if (str.includes(' : ')) {
                    [stat, description] = str.split(' : ');
                    [min, max] = description.split(' à ').map(str => parseInt(str));
                } else {
                    stat = str;
                    min = 0;
                    max = 0;
                }

                if (str.includes('(')) {
                    stat += ' ' + str.substring(str.indexOf('(') + 1, str.indexOf(')'));
                }

                if (str.includes('%')) {
                    stat += ' (%)';
                }

                max = max || min;

                effects.push({ stat, min, max });
            }
        }

        return { type, level, name, imageUrl, damages, effects };
    }

    parse() {
        const items = [];
        let item = this._parseNextItem();

        while (item) {
            items.push(item);
            item = this._parseNextItem();
        }

        return items;
    }
}

export function parseItems(html, type, isWeapon) {
    return new ItemParser(html, type, isWeapon).parse();
}