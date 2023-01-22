// alert ('working')

import cards from './cards.js'

const fixString = (str) => {
    return str.replace(/(\r\n|\n|\r)/gm, "").replace(/\s+/g, ' ').trim()
}

console.log(cards)