# Trie
Trie is a intresting part of trees another names are Radix Tree , Prefix Tree ,it stores string,
it used for searching, autocompletement, routing , [Longest Prefix Match](https://www.lewuathe.com/longest-prefix-match-with-trie-tree.html), [spell checker](https://en.wikipedia.org/wiki/Spell_checker) and [TypeHead](https://en.wikipedia.org/wiki/Typeahead) .
### Ending 
We have a problem in the Trie, it's when wa want add two words that are similar, like Maria and Marianian , The problem is when we want travers the tree we can not figure out that there are two words that merged , so because of that we should check end of the word, a flag or special character . 
<div style="text-align:center;height:200px;" >
<img src="https://www.interviewcake.com/images/svgs/trie_with_markers.svg?bust=209"/>
</div>


### complexity
O(k) , k is number of characters that are in the word.

### Set vs Trie 
 . For the trie, you'd have to walk from the root of the trie through kk nodes, one character at a time.
. For the hash set, you have to compute a hash value from all kk characters of the string in order to index into the underlying array.
**Use a hash set if you just need to check if a string is present or you're optimizing for space. trie nodes can be scattered throughout memory, which isn't cache friendly.**

### Radix Tree
A radix tree is like a trie, but it saves space by combining nodes together if they only have one child.

links: <br/>
https://www.interviewcake.com/concept/java/trie <br />
https://www.interviewcake.com/article/python/data-structures-coding-interview#ram <br/>
https://stackfull.dev/trie-in-javascript-the-data-structure-behind-autocomplete <br />
https://learnersbucket.com/tutorials/data-structures/trie-data-structure-in-javascript/#:~:text=Implementing%20Trie%20data%20structure%20in,to%20an%20empty%20root%20node. 