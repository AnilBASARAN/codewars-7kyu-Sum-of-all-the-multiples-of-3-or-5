let findSum=(n)=> Array(n).fill(1).map((x,i)=>x=i+1).filter(x=> x % 3 == 0 || x % 5 == 0).reduce((x,y)=>x+y,0)


/*


7kyu Sum of all the multiples of 3 or 5

Your task is to write function findSum.

Upto and including n, this function will return the sum of all multiples of 3 and 5.

For example:

findSum(5) should return 8 (3 + 5)

findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

https://www.codewars.com/kata/57f36495c0bb25ecf50000e7/train/javascript