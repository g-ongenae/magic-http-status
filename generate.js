'use strict';

const { writeFileSync } = require('fs');
const { STATUS_CODES } = require('http');

function invertGeneric (object, fn) {
    const newObject = {};
    
    for (const key in object) {
        let label = object[key]
            .toUpperCase();
        label = label.replace(/[\s'-]/g, '_');
        
        newObject[label] = fn(key);  
    }
    
    return newObject;
}

function createEnum(name, fn) {
    const object = invertGeneric(STATUS_CODES, fn);
    let enumContent = '';

    for (const key in object) {
        enumContent += `\t${key} = ${object[key]},\n`;
    }

    return `\nexport enum ${name} {\n${enumContent}};\n`;
}

function writeModule() {
    let content = '';

    content += 'import { STATUS_CODES } from \'http\';\n'
    content += 'export const HttpStatus = STATUS_CODES as { [key: number]: string; };\n';
    content += createEnum('HttpCodes', (k) => Number(k));
    content += createEnum('HttpMessage', (k) => `"${STATUS_CODES[k]}"`);

    return writeFileSync(`${__dirname}/index.ts`, content);
}

writeModule();
