//// 1.at
"cat".at(2) //// t
"cat".at(-2) /// a

/// 2. charAt
"cat".charAt(1) /// a

/// 3. charCodeAt
/// returns UTF 16 of code
"cat".charCodeAt(2) // a => 97

/// 4. Concat
"Hello".concat(' ',"World") /// Hello World

/// 5. endsWith 
//// ends with character
"Cats are the best!".endsWith("best!") /// true

//// 6. includes
/**
 * performs a case-sensitive search to determine whether a given string may be
 *  found within this string, returning true or false as appropriate.
 */
"Blue Whale".includes("Blue") /// true

//// 7. indexOf
/// It returns the index of word or character, 
// second parameter is position of check, for instance, if we set 10, it checks after index of 10
"hello world".indexOf("hello") // 0
"hello world".indexOf("hello",12) /// -1


//// 8.match
// it gets regex then check the string
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex); /// [I,T]

/// 9. matchAll
// return array 
const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';

const array = [...str.matchAll(regexp)]; /// []


/// 10. repeat
const mood = 'Happy! ';

console.log(`I feel ${mood.repeat(3)}`);
// Expected output: "I feel Happy! Happy! Happy! "

/// 11.replace
const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replace("Ruth's", 'my'));
// Expected output: "I think my dog is cuter than your dog!"

const regex = /Dog/i;
console.log(paragraph.replace(regex, 'ferret'));
// Expected output: "I think Ruth's ferret is cuter than your dog!"

/// 12. replaceAll
// it replace all character that match to word or regex

/// 13. search
// it's lile indexOf but it gets regext and doesn't have second argument like indexOf
const paragraph = "I think Ruth's dog is cuter than your dog!";

// Anything not a word character, whitespace or apostrophe
const regex = /[^\w\s']/g;

console.log(paragraph.search(regex));
// Expected output: 41

//// 14. slice
/// its like slice of array, it doen't change the main string
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));/// the lazy dog


/// 15. split
/// the second argument is limit, it's limitation to split string
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"

// 16. toLowerCase
// 17.toUpperCase

//// 18. trim
/// remove space in sentence
const greeting = '   Hello world!   ';

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trim());
// Expected output: "Hello world!";

/// 19. valueof
const stringObj = new String('foo');

console.log(stringObj);
// Expected output: String { "foo" }

console.log(stringObj.valueOf());
// Expected output: "foo"


