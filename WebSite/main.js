let vals = [5, 4, 1, 2, 9];
function sum(acc, val) {
    console.log("acc=",acc);
    return acc + val;
}
function getMax(acc,val){
    if(val > acc){
        acc = val;
    }
    return acc;
}
let result = vals.reduce(sum,10);
let smartSum = vals.reduce((acc,val) => acc+val,10);
let max = vals.reduce(getMax);
let smartMax = vals.reduce((acc,val) => (val>acc)?val:acc);

console.log("reduce sum=", result);
console.log("reduce smartSum",smartSum);
console.log("reduce getMax=",max);
console.log("reduce smartMax=",smartMax);
