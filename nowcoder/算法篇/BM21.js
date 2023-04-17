function minNumberInRotateArray(rotateArray)
{
    // write code here
    let arr = rotateArray.sort((a,b) => a - b);
    return arr[0]
}
console.log(minNumberInRotateArray([3,4,5,1,2]));