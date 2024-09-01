//  <<<<<<<<<<<<<<<< Finding substrings  >>>>>>>>>>>>>>>>>>>>>

"cat".at(2) // t
"cat".at(-2) // a

"cat".charAt(1) /// a

"cat".charCodeAt(2) // t => 116  , returns UTF 16 of code

"Cats are the best!".endsWith("best!") /// true

'abca'.startsWith('ab') // true

/**
 * performs a case-sensitive search to determine whether a given string may be
 *  found within this string, returning true or false as appropriate.
 */
"Blue Whale".includes("Blue") /// true

/// It returns the index of word or character, 
// second parameter is position of check, for instance, if we set 10, it checks after index of 10
"hello world".indexOf("hello") // 0
"hello world".indexOf("hello",12) /// -1
'abca'.lastIndexOf('a') /// 3


// it gets regex then check the string
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const found = paragraph.match(/[A-Z]/g); /// [I,T]

/// 9. matchAll
// return array 

const str = 'test1test2';
const array = [...str.matchAll(/t(e)(st(\d?))/g)]; /// []


/// 11.replace
console.log("I think Ruth's dog is cuter than your dog!".replace("Ruth's", 'my'));
// Expected output: "I think my dog is cuter than your dog!"

console.log(paragraph.replace(/Dog/i, 'ferret'));
// Expected output: "I think Ruth's ferret is cuter than your dog!"

/// 12. replaceAll
// it replace all character that match to word or regex

// it's lile indexOf but it gets regext and doesn't have second argument like indexOf
// Anything not a word character, whitespace or apostrophe
console.log("I think Ruth's dog is cuter than your dog!".search(/[^\w\s']/g));  // 41

/// its like slice of array, it doen't change the main string
console.log('The quick brown fox jumps over the lazy dog.'.slice(31)); /// the lazy dog


const stringObj = new String('foo');

console.log(stringObj); // String { "foo" }

console.log(stringObj.valueOf()); // "foo"


//  <<<<<<<<<<<<<<<< Splitting and joining  >>>>>>>>>>>>>>>>>>>>>

// the second argument is limit, it's limitation to split string
'The quick brown fox jumps over the lazy dog.'.split(' ')[3] /// fox;

['a', 'b', 'c'].join(', ') /// a, b, c

"Hello".concat(' ',"World") /// Hello World

// <<<<<<<<<<<<<<<< Padding and trimming >>>>>>>>>>>>>>>>>>>>>

'7'.padStart(3, '0') // '007'
'yes'.padEnd(6, '!') // 'yes!!!'

'\t abc\n '.trim() // 'abc'
'\t abc\n '.trimStart() // 'abc\n '
'\t abc\n '.trimEnd() // '\t abc'


// <<<<<<<<<<<<<<<<  Repeating and changing case >>>>>>>>>>>>>>>>>>>>>

'*'.repeat(5) // '*****'
'= b2b ='.toUpperCase() // '= B2B ='
'ΑΒΓ'.toLowerCase() // 'αβγ'