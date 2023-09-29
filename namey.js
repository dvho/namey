let allNames = require('./allNames')

const legalCharacters = /^[-.0123456789:ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz·ÀÁÂÃÄÅÆÇÈÉÊËÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿĀāĂăĄąĆćĈĉĊċČčďĐđĒēĕėęěĞğĠġĢģĤĥĦħĩĪīĭİıĵĶķĸĺĻļĽľŀŁłŃńŅņňŋŌōŏŐőŒœŕŘřŚśŞşŠšţťũŪūŭůűŵŷŹźŻżŽžƊƏƙƚơƯưǂǎǐǔǝǢǣǥǧǨǩǪǫǽȘșȚțȟȧȮȯȳɗəɛɨʉʲʷʹˊ̣̦̀́̃̄̇̉̌̍̑́εθκАхёіӑӗәӧḌḍḒḓḤḥḪḫṅṇṋṍṛṟṡṢṣṬṭṱṳẓạảấầẨẩẫậắằẹếềểễệịỌọốồộớờợụứửữựỳỵỹ​]+$/ //Matches only the characters that appear in the names in allNames
const uppercaseCharacters = /^[ABCDEFGHIJKLMNOPQRSTUVWXYZÀÁÂÃÄÅÆÇÈÉÊËÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßĀĂĄĆĈĊČĐĒĞĠĢĤĦĪİĶĻĽŁŃŅŌŐŒŘŚŞŠŪŹŻŽƊƏƯǢǨǪȘȚȮθАḌḒḤḪṢṬẨỌ]+$/ //Matches only the uppercase characters that appear in the names in allNames
const lowercaseCharacters = /^[abcdefghijklmnopqrstuvwxyzàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿżžƙƚơưǂǎǐǔǝǣǥǧǩǫǽșțȟȧȯȳɗəɛɨʉεκхёіӑӗәӧḍḓḥḫṅṇṋṍṛṟṡṣṭṱṳẓạảấầẩẫậắằẹếềểễệịọốồộớờợụứửữựỳỵỹāăąćĉċčďđēĕėęěğġģĥħĩīĭıĵķĸĺļľŀłńņňŋōŏőœŕřśşšţťũūŭůűŵŷź]+$/ //Matches only the lowercase characters that appear in the names in allNames
const diacritics = /^[-.:·ʹˊ̀́̃̄̇̉̌̍̑]+$/ //Matches only the diacritics that appear in the names in allNames
const digits = /[0-9]/ //Matches any single numerical character anywhere in the string


module.exports = (...args) => { //Namey is a variadic function. Arguments are n strings at n-1 respective positions as long as n >= 2. If any of strings 1 - (n-1) have an uppercase letter or letters, or diacritic or diacritics, that letter is or at least one of those letters are, or that diacritic is or at least one of those diacritics are, at that position. If any have a lowercase letter or letters that letter is or those letters are in the name but excluded from that particular position, unless the lowercase letter is followed by a question mark in which case that letter is excluded from that position but it is unknown whether that letter is excluded from the name, and all letters or diacritics in position n not also in positions 1 - (n-1) are excluded from the name, hence, position n can safely consist of the previous attempts' entire names and is used as such to subtract the letters and diacritics as well as full names from the output. A position with no entry must be signified with an empty string. Namey can also help narrow down names according to pattern recognition, when several positions are unknown but known to share the same letter, by tagging those positions with an arbitrary, common numeric value. Numeric tags can be used to indicate shared letters or to assert that letters are not shared.

    if (args.length < 2) {
        return ('Your entry is invalid. Make sure you have at least 2 entries in your input.')
    }

    let badInputsArray = []

    args.forEach((i, index) => { //For each position passed to namey...
        if (i !== '') { //...if that position contains a character or characters...
            const iArray = i.split('') //...place them in an array...
            if (i.includes('?')) { //...if one of those is a '?'...
                if (iArray.length < 2) { //...and it's actually the only character at that position...
                    badInputsArray.push(index) //...that's a syntax error, so push the index of that position to badInputsArray...
                } else if (iArray[0] === '?') { //...else if it's not the only character at that position but it's the first character among more than one at that position...
                    badInputsArray.push(index) //...that's also a syntax error, so push the index of that position to badInputsArray...
                } else if (digits.test(iArray[iArray.indexOf('?') - 1]) || iArray[iArray.indexOf('?') - 1] === iArray[iArray.indexOf('?') - 1].toUpperCase()) { //...else if there's a '?' but it comes after a number or if it comes after an uppercase letter...
                    badInputsArray.push(index) //...that's also a syntax error, so push the index of that position to badInputsArray...
                } else if (index === args.length - 1) { //...else if there's a '?' in the last position...
                    badInputsArray.push(index) //...that's also a syntax error, so push the index of that position to badInputsArray...
                }
            } else if (!legalCharacters.test(i)) { //...else if that position doesn't contain a '?' and but doesn't pass the legalCharacters test...
                badInputsArray.push(index) //...that's also a syntax error, so push the index of that position to badInputsArray
            }
        }
    })
    badInputsArray = badInputsArray.map((i, index) => { //Change badInputsArray into a spoken language template string...
        if (badInputsArray.length === 1) {
            return `${i + 1}`
        }
        if (index < badInputsArray.length - 1) {
            return `${i + 1}, `
        } else {
            return `and ${i + 1}`
        }
    })
    if (badInputsArray.length > 0) { //...and incorporate that template string into an error to return instead of continuing to run namey
        const string = badInputsArray.length > 1 ? `Your inputs are not valid at positions ${badInputsArray.join('')}.` : `Your input is not valid at position ${badInputsArray[0]}.`
        return string
    }


    const sameLetterTags = []
    if (digits.test(args.join(''))) { //If positions have been tagged with numbers build an array of objects containing two key-value pairs, the first being index indicating the position in the name and the second being a tag indicating the as yet unknown letter
        args.forEach((i, index) => {
            if (i.match(digits)) {
                sameLetterTags.push({index, tag: i.split('').filter(j => digits.test(j)).join('')})
            }
        })
    }

    const nameLength = args.length - 1
    let options = allNames.filter(i => i.length === nameLength).map(j => j.toLowerCase()) //Marshal options according to nameLength and make lowercase...
    const usedNames = args[nameLength].match(new RegExp('.{1,' + nameLength + '}', 'g')) //...make an array of used names based on a regex that splits the final string in args sequentually into an array of strings which are (n-1) in length
    const removeFromOptions = usedNames ? usedNames.map(i => i.toLowerCase()) : [] //...initialize removeFromOptions with usedNames, which must be done because even though all names containing letters in the last position not also in previous positions are removed from options there's still the possibility that all letters in a used name could also be in the result and in such a case a user would be shown this name without explicitly removing usedNames. Moreover, force all usedNames to lowercase in the event a user entered the used name in uppercase in order to specify that only that name and not its comprising letters be removed from options

    options.forEach(i => {
        let letterArray = i.split('')
        if (args[nameLength] !== '') { //If there are letters in the last position that are not also in the preceding positions subract all names containing those letters from the options.
            args[nameLength].split('').forEach(j => {
                if (i.includes(j) && !args.slice(0, nameLength).join('').toLowerCase().includes(j)) {
                    removeFromOptions.push(i)
                }
            })
        }

        args.forEach((j, index) => {
            if (j !== '' && index < nameLength) { //For each of the positions that are not the last position...

                const upperCaseEntires = j.split('').filter(k => uppercaseCharacters.test(k) || diacritics.test(k)).map(m => m.toLowerCase())
                const lowerCaseEntries = j.split('').filter(k => lowercaseCharacters.test(k) || k === '?')

                if (upperCaseEntires.length > 0 && !upperCaseEntires.includes(letterArray[index])) { //...if there's at least one uppercase letter and a name doesn't have the uppercase letter at the indicated position, or in the case that more than one uppercase letter is entered, contain at least one of the uppercase letters at the indicated position, remove that name from options...
                    removeFromOptions.push(i)
                }

                lowerCaseEntries.forEach(k => { //...if there's at least one lowercase letter not followed by a question mark and the name either doesn't have that letter or has that letter but at the indicated position, remove that name from options, unless the letter is followed by a question mark in which case the name doesn't have that letter at that position but it's unknown whether or not the letter is elsewhere in the name so only remove that name from options when it has the letter at the indicated position
                    if (lowerCaseEntries.length > 0 && k !== '?') {
                        if (lowerCaseEntries[lowerCaseEntries.indexOf(k) + 1] !== '?') {
                            if (!i.includes(k) || letterArray[index] === k) {
                                removeFromOptions.push(i)
                            }
                        } else {
                            if (letterArray[index] === k) {
                                removeFromOptions.push(i)
                            }
                        }
                    }
                })
            }
        })

        sameLetterTags.forEach(j => { //For each tag...
            sameLetterTags.forEach(k => { //...look at the other tags and...
                if (j.tag === k.tag) { //...if the tags match indicating a pattern if that pattern isn't present in the name remove the name from options
                    if (letterArray[j.index] !== letterArray[k.index]) {
                        removeFromOptions.push(i)
                    }
                } else { //...else if the tags don't match but there's a pattern in the name at the positions of the indicated tags remove the name from options.
                    if (letterArray[j.index] === letterArray[k.index]) {
                        removeFromOptions.push(i)
                    }
                }
            })
        })
    })

    options = options.filter(i => !removeFromOptions.includes(i)) //Remove all names the solution can't be based on the indicating inputs...

    return options //...and return an array of remaining available options
}
