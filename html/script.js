const CRITERIA_ELT = document.querySelector('#criteria-elt');
const EQUIPMENT_ELT = document.querySelector('#equipments-elt');
const RESULT_COUNT_ELT = document.querySelector('#result-count');

const NON_WEAPONS = ['Amulette', 'Anneau', 'Botte', 'Cape', 'Ceinture', 'Chapeau'];
const WEAPONS = ['Arc', 'Baguette', 'Baton', 'Dague', 'Epée', 'Hache', 'Marteau', 'Pelle'];
const STAT_LINES = [
    ['Vitalité'     , 'Dommages'            , 'PA'          , 'Résistance neutre'   , 'Résistance neutre (%)'],
    ['Sagesse'      , 'Dommages (%)'        , 'PM'          , 'Résistance terre'    , 'Résistance terre (%)'],
    ['Force'        , 'Soins'               , 'Portée'      , 'Résistance feu'      , 'Résistance feu (%)'],
    ['Intelligence' , 'Coup critiques'      , 'Initiative'  , 'Résistance eau'      , 'Résistance eau (%)'],
    ['Chance'       , 'Renvois de dommages' , 'Prospection' , 'Résistance air'      , 'Résistance air (%)'],
    ['Agilité'      , 'Créature invocables' , ''            , ''                    , '']
];
const CRITERIA = {
    minLevel: 0,
    maxLevel: 1000,
    typeList: [],
    effectList: []
};

const MASTER_CHECKBOX_WIDTH = 164;
const SLAVE_CHECKBOX_WIDTH = 100;
const TEXT_FIELD_WIDTHS = [95, 178, 98, 141, 170];
const SPACE_BETWEEN_STATS = 45;

function appendTextInput(label, width, onChange) {
    const spanElt = document.createElement('span');
    const inputElt = document.createElement('input');
    const labelElt = document.createElement('label');

    inputElt.type = 'text';
    inputElt.id = label;
    inputElt.name = label;
    inputElt.size = 2;
    inputElt.oninput = () => onChange(inputElt.value, label);
    inputElt.pattern = /\d+/;
    labelElt.for = label;
    labelElt.textContent = `${label} : `;
    labelElt.style.width = `${width}px`;
    labelElt.style.float = 'left';
    spanElt.style.float = 'left';
    spanElt.style.whiteSpace = 'nowrap';
    spanElt.style.marginRight = `${SPACE_BETWEEN_STATS}px`;

    spanElt.appendChild(labelElt);
    spanElt.appendChild(inputElt);

    if (!label) {
        spanElt.style.visibility = 'hidden';
        inputElt.id = null;
    }

    CRITERIA_ELT.appendChild(spanElt);
}

function appendCheckbox(label, width, onChange) {
    const inputElt = document.createElement('input');
    const labelElt = document.createElement('label');
    const spanElt = document.createElement('span');

    inputElt.type = 'checkbox';
    inputElt.id = label;
    inputElt.name = label;
    labelElt.for = label;
    labelElt.textContent = label;
    inputElt.onchange = () => onChange(inputElt.checked, label);
    spanElt.style.width = `${width}px`;
    spanElt.style.float = 'left';

    spanElt.appendChild(inputElt);
    spanElt.appendChild(labelElt);

    CRITERIA_ELT.appendChild(spanElt);
}

function appendNewLine() {
    const br = document.createElement('br');

    CRITERIA_ELT.appendChild(br);
}

function appendMultipleTextInputs(labels, widths, onChange) {
    for (let i = 0; i < labels.length; ++i) {
        appendTextInput(labels[i], widths[i], onChange);
    }

    appendNewLine();
}

function setupCriteria() {
    appendCheckbox('Équipement', MASTER_CHECKBOX_WIDTH, value => {
        for (const type of NON_WEAPONS) {
            const elt = document.querySelector(`#${type}`);
            elt.checked = value;
            elt.onchange();
        }
    });
    
    for (const type of NON_WEAPONS) {
        appendCheckbox(type, SLAVE_CHECKBOX_WIDTH, value => {
            if (value) {
                CRITERIA.typeList.push(type);
            } else {
                CRITERIA.typeList = CRITERIA.typeList.filter(t => t !== type);
            }
        });
    }

    appendNewLine();

    appendCheckbox('Arme', MASTER_CHECKBOX_WIDTH, value => {
        for (const type of WEAPONS) {
            const elt = document.querySelector(`#${type}`);
            elt.checked = value;
            elt.onchange();
        }
    });

    for (const type of WEAPONS) {
        appendCheckbox(type, SLAVE_CHECKBOX_WIDTH, value => {
            if (value) {
                CRITERIA.typeList.push(type);
            } else {
                CRITERIA.typeList = CRITERIA.typeList.filter(t => t !== type);
            }
        });
    }

    appendNewLine();
    appendNewLine();

    appendMultipleTextInputs(['Niveau min', 'Niveau max'], [TEXT_FIELD_WIDTHS[0], TEXT_FIELD_WIDTHS[0] + 4], (value, stat) => {
        if (stat.includes('min')) {
            CRITERIA.minLevel = parseField(value) || 0;
        } else {
            CRITERIA.maxLevel = parseField(value) || 200;
        }
    });

    appendNewLine();

    for (const line of STAT_LINES) {
        appendMultipleTextInputs(line, TEXT_FIELD_WIDTHS, (value, stat) => {
            const n = parseField(value);

            CRITERIA.effectList = CRITERIA.effectList.filter(e => e.stat !== stat);

            if (!isNaN(n)) {
                CRITERIA.effectList.push({ stat, value: n });
            }
        });

        // for (const stat of line) {
        //     if (stat && !STATS.find(s => s.name === stat)) {
        //         console.log(`stat "${stat}" not found`)
        //     }
        // }
    }
}

function parseField(value) {
    return parseInt(value) && +value;
}

function fetchItemsToDisplay() {
    const  { minLevel, maxLevel, typeList, effectList } = CRITERIA;

    return ITEMS.filter(item => {
        return item.level >= minLevel
            && item.level <= maxLevel
            && typeList.some(type => item.type === type)
            && effectList.every(effect => item.effects.some(e => e.stat === effect.stat && e.max >= effect.value));
    }).sort((item1, item2) => item1.level - item2.level);
}

function updateItemList() {
    const itemsToDisplay = fetchItemsToDisplay();

    emptyElement(EQUIPMENT_ELT);
    EQUIPMENT_ELT.style.listStyleType = 'none';

    for (const item of itemsToDisplay) {
        const liElt = document.createElement('li');
        const imgElt = document.createElement('img');
        const aElt = document.createElement('a');
        const ulElt = document.createElement('ul');
        aElt.textContent = `${item.name} (niv ${item.level})`;
        // spanElt.style.fontWeight = 'bold';
        aElt.href = `https://wiki-dofus.eu/w/${item.name.replace(/ /g, '_')}`;
        aElt.style.fontSize = 'large';
        imgElt.src = item.imageUrl;
        imgElt.style.width = '40px';
        imgElt.style.position = 'relative';
        imgElt.style.top = '15px';
        // imgElt.style.left = '-40px';
        liElt.style.position = 'relative';
        liElt.style.left = '-40px';
        liElt.appendChild(imgElt);
        liElt.appendChild(aElt);

        for (const str of item.damages) {
            const li = document.createElement('li');
            li.style.position = 'relative';
            li.style.left = '30px';
            li.textContent = str;
            li.style.fontWeight = 'bold';
            ulElt.appendChild(li);
        }

        for (const { stat, min, max } of item.effects) {
            const li = document.createElement('li');
            li.style.position = 'relative';
            li.style.left = '30px';
            // li.style.fontSize = 'small';
            li.textContent = stat;
            // li.style.color = 'rgb(100, 100, 100)';
            // li.style.color = 'DimGray';
            if (min !== 0 && max !== 0) {
                li.textContent += ` : ${min}`;
                if (max !== min) {
                    li.textContent += ` à ${max}`;
                }
            }
            ulElt.appendChild(li);
        }

        if (item.conditions.length) {
            const li = document.createElement('li');
            li.style.position = 'relative';
            li.style.left = '30px';
            li.textContent = `Conditions:`;
            li.style.fontStyle = 'italic';
            ulElt.appendChild(li);

            const ul = document.createElement('ul');
            for (const str of item.conditions) {
                const li = document.createElement('li');
                li.textContent = str.replace(' etre ', ' être ');
                ul.appendChild(li);
            }
            li.appendChild(ul);
        }

        liElt.appendChild(aElt);
        liElt.appendChild(ulElt);
        EQUIPMENT_ELT.appendChild(liElt);
    }

    RESULT_COUNT_ELT.textContent = ` (${itemsToDisplay.length})`;
}

function emptyElement(node) {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}

function main() {
    document.addEventListener('keypress', ({key}) => {
        if (key === 'Enter') {
            updateItemList();
        }
    });

    setupCriteria();
    // updateItemList();
}

main();