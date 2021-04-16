const input = document.querySelector('#input');
const check = document.querySelector('#check');
const logs = document.querySelector('#logs');

let numbers = [0,1,2,3,4,5,6,7,8,9]
let answer = []
let n = 0

for (let n = 0;  n <= 3; n+=1 ) {
   const index = Math.floor(Math.random()*(10 - n))
    answer.push(numbers[index])
    numbers.splice(index, 1)  
}
console.log(answer)




answer[0] + answer[1] + answer[2] + answer[3]

let count = 0
check.addEventListener('click', () => {
    const value = input.value;
    if (value && value.length === 4) {
       if (answer.join('')===value){
            logs.appendChild(document.createTextNode('HR'))
       } else{
            console.log('다르다');
       }
    }
})