# Namey
[_Namey_](https://www.npmjs.com/package/namey) will help you narrow down and remember an individual's name with just a few inputs.

_________________________

## API
### namey(`string`, `string`, `string`, `string`, `string`, `string`)
```js
var namey = require('namey');
```
_________________________
&nbsp;
## Notes
[_Namey_](https://www.npmjs.com/package/namey) will help you narrow down and remember an individual's name with just a few inputs. It's a variadic function that takes _n_ strings at _n_-1 respective positions as long as _n_>= 2. If any of strings 1 through (_n_-1) have an uppercase letter or letters, or a diacritic or diacritics, that letter is or at least one of those letters are, or that diacritic is or at least one of those diacritics are, at that position. If any have a lowercase letter or letters that letter is or those letters are in the name but excluded from that particular position, unless the lowercase letter is followed by a question mark in which case that letter is excluded from that position but it is unknown whether that letter is excluded from the name, and all letters or diacritics in position _n_ not also in positions 1 through (_n_-1) are excluded from the name, hence, position _n_ can safely consist of the previous attempts' entire set of names and is used as such to subtract the letters and diacritics as well as full names from the output. A position with no entry must be signified with an empty string. [_Namey_](https://www.npmjs.com/package/namey) can also help narrow down names according to pattern recognition, when several positions are unknown but known to share the same letter, by tagging those positions with an arbitrary, common numeric value. Numeric tags can be used to indicate shared letters or to assert that letters are not shared.


## Installation
With [npm](http://npmjs.org) do
```bash
$ npm install namey
```

## License
(MIT)

Copyright (c) 2023 David H. &lt;email6@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
