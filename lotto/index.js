const candidate = Array(45).fill().map((v,i) => {return i+1}) //const candidate = Array(45).fill().map((v,i) => i+1) , 걍 return을 없애서 줄여도 된다.
const shuffle = [];
while (candidate.length>0) {
  const random = Math.floor(Math.random() * candidate.length)
  const spliceArray = candidate.splice(random, 1);
  const value = spliceArray[0];
  shuffle.push(value);
}
console.log(shuffle)
const winBalls = shuffle.slice(0,6);
const bonus = shuffle[6];
console.log(winBalls);
console.log(bonus);
