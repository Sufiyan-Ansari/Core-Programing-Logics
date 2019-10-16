const B = [100000000000000000000,100,100,101,100000000000000000000];

let max = -Infinity;
let len = B.length;
let counter = 1;
while(len--)
{
    if(B[len] > max )
    {
        max = B[len];
        
    }
    if(max === B[len-1])
    {
        counter++;
    }
}
console.log(max);
console.log(counter);
