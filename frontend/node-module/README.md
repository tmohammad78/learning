# Node Module 
This is about node module and package managments like npm , yarn and pnpm.

## Introduction 
We have three kinds of pakage managment , NPM , PNPM and yarn (Yarn classic or Yarn Berry )

NPM stores dependencies more efficiently in flat node_module folder
PNPM stores dependencies in a nested node_module folder 
Yarn Berry stores with Plug’n’Play (PnP) mode 

### Yarn (v1 / Classic), responsible for many innovations
(Yet Another Resource Negotiator)
Yarn parallelized operations in order to speed up the installation process, which had been a major pain point for early versions of npm.
#### Features 
* Native monorepo support
* Cache-aware installs
* Offline caching
* Lock files

### PNPM
The main problem that pnpm solves is redundant storage of dependencies that yarn and npm have .
NPM and Yarn use **hoisting** to flatten their **node_modules** but in PNPM new algorithm as name 
content addressable storage used.

### Yarn (v2,Berry)
it was releasd in 2020 , it uses a new strategy as name Plug’n’Play (PnP) ,  Instead of generating node_modules, a .pnp.cjs file with dependency lookup tables is generated, which can be processed more efficiently because it’s a single file instead of a nested folder structure. In addition, every package is stored as a zip file inside of the .yarn/cache/ folder, which takes up less disk space than the node_modules folder.

### Lock file 
We we install a new package , we see that library in package.json is like ```"dayjs": "^1.10.5",``` , the problem is , when I install packages with specific version that I have expected , there isn't problem , 
the problem is when dayjs release new version of that and my colleages will install a new version of that 
and we have conflict here , so for solve this problem we use lock file to say what's version of our libraries exactly . 
we should have our lock file in the git , I mean we should push them , otherwise maybe we'll face with ```works on my machine``` problem.

### <b>config</b>
<b>NPM abd PNPM</b>: .npmrc file . we can add our private registery and other workspace configuration to find folders
<b>Yarn Classic and Berry: </b> For classic we have .yarnrc file and for Berry we have .yarnrc.yml


### The problems of yarn and npm 
Yarn (until version 3 ) and npm have same issue , They create flatten node_modules . The problem of flatten node_module is : 
* modules can access packages they don’t depend on
* the algorithm of flattening a dependency tree is pretty complex
* some of the packages have to be copied inside one project’s node_modules folder

### Yarn Berry plug'n' play 
Node had to find your packages within the node_modules folders. Yarn Berry in PnP mode already has all of the information it needs at hand and, instead, tells Node where to find them. This reduces package installation time drastically.
Yarn Berry achieves this by generating a .pnp.cjs file instead of a nested node_modules folder. It contains lookup tables to inform Node about dependency locations
The primary benefits, though, are faster installation speeds; we’re only processing one file, our .pnp.cjs file,
**Every package is stored as a zip file inside of a .yarn/cache/ folder**
A good thing about PnP is that you can put the .pnp.cjs file and the .yarn/cache/ folder under version control because of their justifiable file sizes. What you get from this is a zero-install strategy.
also pnpm added this feature in new version.


Refrencecs:
https://blog.logrocket.com/advanced-package-manager-features-npm-yarn-pnpm/#problem-with-traditional-node-modules-approach
https://blog.logrocket.com/javascript-package-managers-compared/
https://pnpm.io/faq#why-does-my-node_modules-folder-use-disk-space-if-packages-are-stored-in-a-global-store
https://pnpm.io/motivation#creating-a-non-flat-node_modules-directory
https://youtu.be/ZNWFFQqyKHI
https://yarnpkg.com/advanced/lexicon#hoisting
https://rushjs.io/pages/advanced/npm_doppelgangers/
https://yarnpkg.com/features/pnp#the-node_modules-problem