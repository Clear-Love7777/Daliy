let arr = [5,1,8,4,9,12,78,100]

function quickSort(arr){
    //递归时的停止条件
    if(!arr instanceof Array || arr.length <=1 ){
        return arr
    }
    let leftArr = [],rightArr = []
    let chooseIndex = Math.floor(arr.length / 2)
    let chooseItem = arr.splice(chooseIndex,1)[0]

    for(let i of arr){
        if(i < chooseItem){
            leftArr.push(i)
        }else{
            rightArr.push(i)
        }
    }

    return quickSort(leftArr).concat([chooseItem],quickSort(rightArr))
}

console.log(quickSort(arr))