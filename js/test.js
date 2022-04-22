let baseObject = {}
function createObject(){
  for(let i =0 ; i<10000 ; i++){
    baseObject[i] = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  }
}
createObject()
const newMap = new Map()
const newMap2 = new WeakMap()
newMap.set(baseObject,"...")
newMap2.set(baseObject,"...")
var button1 = document.getElementById("button1")
button1.addEventListener("click",function(){
  console.log("Button 1 clicked")
  baseObject= null
  console.log(baseObject);
},false)
var button2 = document.getElementById("button2")
button2?.addEventListener("click",function(){
  console.log("Button 2 clicked")
  baseObject= null
},false)