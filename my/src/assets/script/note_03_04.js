init()


function init() {
  changeVariable()
  filter()
  objStructure()
}

//解构的应用场景之交换变量
function changeVariable() {
  let x = 1
  let y = 2
  console.log(([x, y] = [y, x]))
  console.log('x的值变为：' + x)
  console.log('y的值变为：' + y)
}

//过滤数组
function filter() {
  const arr = [1, 2, 3, 4, 5, 6, 7]
  const result = arr.filter(v => v > 5)
  console.log("过滤后的数组：" + result)
}

//对象结构的例子
function objStructure() {
  let metaData = {
    name: 'soft_1851',
    info: [
      {
        title: 'ES6',
        desc: 'ES6学习'
      }
    ]
  }

  let {
      name: myName,
      info: [{title: myTitle,desc: myDesc}]
  } = metaData
  console.log(myName,myTitle,myDesc)
}
