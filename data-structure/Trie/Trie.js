function Node(value) {
    this.value = value
    this.isEndOf =  false
    this.children = {}
    this.parent = null
}

class Trie {
  constructor(){
    this.root = new Node(null)
  }

  insert(word){
    let current = this.root;
    for(let character of word){
      if(current.children[character] === undefined){
        current.children[character] = new Node(character)
        current.children[character].parent = current
      }
      current = current.children[character]
    }
    current.isEndOf = true
  }

  delete(word){
    let node = this.root
    if(!word){
      return
    }
    
    function removeCharacter(character,word){

    }

    for(let key in node.children){
      removeCharacter(node.children[key],word)
    }
  }
  
  findAllWords(node, arr){
    if (node.isEndOf) {
      arr.unshift(this.getWord(node));
    }
    
    for (let child in node.children) {
      this.findAllWords(node.children[child], arr);
    }
  }

  find(prefix){
    let current = this.root;
    let output = []
    for(let char of prefix){
      if(current.children[char]){
        current = current.children[char]
      }else{
        return []
      }
    }
   this.findAllWords(current,output)
    return output
  }

  getWord(node){
    let current = node;
    let output = []
    while(current !== null){
      output.unshift(current.value)
      current = current.parent
    }
    return output.join('');
  }

  search(word){
    let current = this.root;
    for(let character of word){
      if(current.children[character] === undefined){
        return false
      }
      current = current.children[character]
    }
     return current.isEndOf
  }
}


const trie = new Trie()

trie.insert("car")
trie.insert("cat")
trie.insert("try")
trie.insert("tryhah")
trie.insert("tryhch")
console.log(trie.search("MAT")); /// false
console.log(trie.search("cat")); /// True
trie.find("ca")
console.log(trie.find("ca"));  /// [ 'cat', 'car' ]
console.log(trie.find("try")); /// [ 'tryhch', 'tryhah', 'try' ]
// trie.delete("car")
