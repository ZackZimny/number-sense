export function getSum(nums: number[]){
    let result = 0;
    for(let i of nums){
        result += i;
    }
    return result;
}