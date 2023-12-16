const data = {
  name: "Mohammad",
  get getName() {
      return this.name
  },
  set updateName(newValue) {
      this.name  = newValue;
  }
}

console.log(data.getName)

data.updateName  = "Ali"

console.log(data.getName)