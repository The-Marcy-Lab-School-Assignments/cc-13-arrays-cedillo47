//write your code here
const averageInArray = (num) => {
 const length = num.length; 
let total = 0;
for (let i = 0; i <= num.length - 1; i++){
total += num[i];
}
total  = total / length;
return total ;
};


console.log(averageInArray([2,2,2,2,2]))
