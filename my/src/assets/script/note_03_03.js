//es6新特性之class小练习
class Snacks{
    constructor(name, type){
        this.name = name
        this.type = type
    }

    tostring(){
        console.log('名称：' + this.name + '\r\n类型：' + this.type)
    }
}

let aoliao = new Snacks('奥利奥','饼干')
aoliao.tostring()
console.log(aoliao)
console.log(JSON.stringify(aoliao))

//es6新特性之解构之数组降维小练习
let [a,[b,c,[d]]] = [1,[9,[8,7],[7]]]
console.log(a)
console.log(b)
console.log(c)

//神奇的作用域
var tmp = 'bread and dream'
console.log(tmp)

if (true) {
  let tmp = 'dream or dread'
  console.log(tmp)
}
// let tmp = 'hello'
// console.log(tmp)

//输出十个10
for(var i = 0; i <10; i++){
    setTimeout(() => {
        console.log(i)
    }, 500);
}
