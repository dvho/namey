/*

Note: In order to prevent the    [History]    folder from being published to NPM all publishable files are whitelisted in package.json as...

"files": [
  "allNames.js",
  "namey.js",
  "namey.test.js",
  "package.json",
  "readme.md"
]

...per    https://medium.com/@jdxcode/for-the-love-of-god-dont-use-npmignore-f93c08909d8d    . The    npm pack && tar -xvzf *.tgz && rm -rf package *.tgz    test suggested in this article revealed that .npmignore was indeed not ignoring the files specified within it but that the above package.json whitelisting technique worked

*/

const test = require('./namey.js')

const invalidInput1 = test('a')
if (invalidInput1 !== 'Your entry is invalid. Make sure you have at least 2 entries in your input.') {
    throw new Error('Namey is not recognizing inputs with less than two entries')
}

const invalidInput2 = test('a', 'C', 'd', 'a*', 'f', 'ghijkl')
if (invalidInput2 !== 'Your input is not valid at position 4.') {
    throw new Error('Namey is not recognizing invalid input')
}

const invalidInput3 = test('a', 'C@', 'Ą', 'a`´ʺʻʼʿ῾​‘’′\'', 'f', '-.0123456789:ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz·ÀÁÂÃÄÅÆÇÈÉÊËÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿĀāĂăĄąĆćĈĉĊċČčďĐđĒēĕėęěĞğĠġĢģĤĥĦħĩĪīĭİıĵĶķĸĺĻļĽľŀŁłŃńŅņňŋŌōŏŐőŒœŕŘřŚśŞşŠšţťũŪūŭůűŵŷŹźŻżŽžƊƏƙƚơƯưǂǎǐǔǝǢǣǥǧǨǩǪǫǽȘșȚțȟȧȮȯȳɗəɛɨʉʲʷʹˊ̣̦̀́̃̄̇̉̌̍̑́εθκАхёіӑӗәӧḌḍḒḓḤḥḪḫṅṇṋṍṛṟṡṢṣṬṭṱṳẓạảấầẨẩẫậắằẹếềểễệịỌọốồộớờợụứửữựỳỵỹ​')
if (invalidInput3 !== 'Your inputs are not valid at positions 2, and 4.') {
    throw new Error('Namey is not recognizing invalid input')
}

const invalidInput4 = test('?42', 'C', '42d%', 'dz1?', 'E?', '', 'p?')
if (invalidInput4 !== 'Your inputs are not valid at positions 1, 3, 4, 5, and 7.') {
    throw new Error('Namey is not recognizing invalid inputs')
}

const invalidInput5 = test('','2?','','?tm2','mt3','wt3*m','','o','dfsTREASURE')
if (invalidInput5 !== 'Your inputs are not valid at positions 2, 4, and 6.') {
    throw new Error('Namey is not recognizing invalid inputs')
}

const invalidInput6 = test('?','a','35','35','fopORANGE?')
if (invalidInput6 !== 'Your inputs are not valid at positions 1, and 5.') {
    throw new Error('Namey is not recognizing invalid inputs')
}
