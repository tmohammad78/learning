class Triple { 
  static customName = "Tripler"
  static description ="This is description"
  static calculate(n = 1) {
    return n * 3
  }
}

class SquaredTriple extends Triple {
  static customName = "Squared"
  static description ="This is squared triple"
  static calculate(n) {
    return super.calculate(n) * super.calculate(n)
  }
}

const tripleSample = new Triple(4)
console.log(tripleSample.calculate) /// undefind
console.log(Triple.calculate(2)) /// 6

console.log(SquaredTriple.calculate(1)) /// 9