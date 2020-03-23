window.onload = function() {
    getArr()
}

var ele = document.getElementById('card1')

function getArr(){
    let arr1 = [1]
    let arr2 = [9,8,7,99,100]
    arr1.push(...arr2)
    console.log(arr1)
    ele.innerHTML = arr1
}