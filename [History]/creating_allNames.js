const flay = require('flay') //This library was temporarily incorporated in the effort of creating allNames.js
const lose = require('lose') //This library was temporarily incorporated in the effort of creating allNames.js

let names1 = require('./_oxfordreference.com')
let names2 = require('./_behindthename.com_main')
let names3 = require('./_behindthename.com_user-submitted')

let names1DoublesRemoved = require('./_oxfordreference.com-DoublesRemoved')
let names2DoublesRemoved = require('./_behindthename.com_main-DoublesRemoved')
let names3DoublesRemoved = require('./_behindthename.com_user-submitted-DoublesRemoved')

let names1DoublesRemovedAndFlattenedAndDeapostrophied = require('./_oxfordreference.com-DoublesRemovedAndFlattenedAndDeapostrophied')
let names2DoublesRemovedAndFlattenedAndDeapostrophied = require('./_behindthename.com_main-DoublesRemovedAndFlattenedAndDeapostrophied')
let names3DoublesRemovedAndFlattenedAndDeapostrophied = require('./_behindthename.com_user-submitted-DoublesRemovedAndFlattenedAndDeapostrophied')


const fs = require('fs')

//names = //remove doubles, flay names and add flayed to the array, remove apostrophed and add to array, remove hyphenated then add to array, then write array to new file and copy to so

// const content = `${names}`
//
//
// fs.writeFile('/Users/dhomyk/Desktop/names/test2.js', content, err => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   //file written successfully
// })

//console.log(flay('Ḥusām'))

// names = names.map(i => {
//     console.log(flay(i))
// })
// let newArray2 = []
// let newArray = names3.map(i => flay(i))
// newArray.forEach(i => {
//     if (!names2.includes(i)) {
//         newArray2.push(i)
//     }
// })
//
// fs.writeFile('/Users/dhomyk/Desktop/names/test2.js', `${newArray2}`, err => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   //file written successfully
// })

//console.log(`You needed to flay ${newArray2.length} names in _behindthename.com_user-submitted because they had accents.`)


// const doublesRemovedNames3 = [...new Set(names3)]
//
// console.log(doublesRemovedNames3.length, names3.length)

// const newArray = []
//
// const flayed1 = names3.map(i => flay(i))
//
// flayed1.forEach(i => {
//     let lost = lose(i)
//     if (lost.length > 0) {
//         newArray.push(lost)
//     }
// })
//
// console.log(newArray)











//Remove doubles from each of    _oxfordreference.com.js   ,    _behindthename.com_main    and    _behindthename.com_user-submitted    which are names1, names2, and names3, respectively.

// const NAMES1DOUBLESREMOVED, NAMES2DOUBLESREMOVED, OR NAMES3DOUBLESREMOVED Here = [...new Set(NAMES1, NAMES2, NAMES3 HERE)]
// fs.writeFile('PATH AND NEW FILE NAME HERE', `module.exports = [${NAMES1DOUBLESREMOVED, NAMES2DOUBLESREMOVED, OR NAMES3DOUBLESREMOVED HERE.map(i => `"${i}"`)}]`, err => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log('File creation was successful')
// })


//...once you have your 3 new files with doubles removed,remove diacritics and apostrophe marks and add those to each of the doubles removed files with new name that indicates that diacritics and apostrophes have been removed

const alphabeticCharactersOnly = /\b[a-zA-Z]+\b/

const names3DoublesRemovedAndFlattened = names3DoublesRemoved.map(i => {
    let name = flay(i)
    let tempNameArray = []
    name.split('').forEach(j => {
        if (alphabeticCharactersOnly.test(j) || j === ' ' || j === '-') {
            tempNameArray.push(j)
        }
    })
    return tempNameArray.join('')
})

const combindedArray = names1DoublesRemovedAndFlattenedAndDeapostrophied.concat(names2DoublesRemovedAndFlattenedAndDeapostrophied.concat(names3DoublesRemovedAndFlattenedAndDeapostrophied))



const combindedArrayDoublesRemoved = [...new Set(combindedArray)] //Finally I create the allNames.js file
fs.writeFile('/Users/dhomyk/Desktop/namey/allNames.js', `module.exports = [${combindedArrayDoublesRemoved.map(i => `"${i}"`)}]`, err => {
  if (err) {
    console.error(err)
    return
  }
  console.log('File creation was successful')
})

console.log(combindedArrayDoublesRemoved.length)
