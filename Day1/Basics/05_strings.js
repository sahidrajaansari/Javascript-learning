let name=new String("Sahid Raja Ansari")
let staticName=name;
let stringName="   Rifat   "
console.log(`${name} and type is ${typeof name}  \n${staticName} and type is ${typeof staticName}  \n${staticName} and type is ${typeof stringName}`)
console.log(`${name.length}`)
console.log(`${name.slice(-17,7)}`)
console.log(`\'${stringName}\' => ${stringName.trim()}`)
console.log(`${name.split(' ')}`)
console.log(`${name.indexOf('R')}`)
console.log(`${name.charAt(4)}`)
console.log(`${name.replace('a','k')}`)
console.log(`${name.replaceAll('a','k')}`)
console.log(`${stringName.substring(0,5).trim()}`)