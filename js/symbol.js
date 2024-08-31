log = console.log
const data = Symbol()
const mySymbol = Symbol("mySymbol")

log(typeof data === 'symbol') // true
log(mySymbol.toString()) /// Symbol(mySymbol)
log(mySymbol.description) /// mySymbol

