  const numberInput = document.querySelector('#input');
  const clearButton = document.querySelector('#clear');
  const plusButton = document.querySelector('#plus');
  const minusButton = document.querySelector('#minus');
  const divideButton = document.querySelector('#divide');
  const multiplyButton = document.querySelector('#multiply');
  const calculateButton = document.querySelector('#calculate');
  const resultInput = document.querySelector('#result');

  let temp;
  let operator;


  plusButton.addEventListener('click', () => {
    if (temp) {
        operator = '+'
        numberInput.value = null
    } else {
        if (numberInput.value) {
            temp = Number(numberInput.value) // 자바스크립트의 형 변환 
            operator = '+'
            numberInput.value = null
            resultInput.value = null
        }   
    }
  })

  minusButton.addEventListener('click', () => {
    if (temp) {
        operator = '-'
        numberInput.value = null
    } else {
        if (numberInput.value) {
            temp = Number(numberInput.value) // 자바스크립트의 형 변환 
            operator = '-'
            numberInput.value = null
            resultInput.value = null
        }   
    } 
  })

  multiply.addEventListener('click', () => {
    if (temp) {
        operator = '*'
        numberInput.value = null
    } else {
        if (numberInput.value) {
            temp = Number(numberInput.value) // 자바스크립트의 형 변환 
            operator = '*'
            numberInput.value = null
            resultInput.value = null
        }   
    } 
  })

  divideButton.addEventListener('click', () => {
    if (temp) {
        operator = '/'
        numberInput.value = null
    } else {
        if (numberInput.value) {
            temp = Number(numberInput.value) // 자바스크립트의 형 변환 
            operator = '/'
            numberInput.value = null
            resultInput.value = null
        }   
    } 
  })
  
  

  clearButton.addEventListener('click', () => {
    numberInput.value = null
    resultInput.value = null
    temp = null
    operator = null
  })

  calculateButton.addEventListener('click', () => {
      console.log(temp, operator, numberInput.value)
    if (operator) {
        if (numberInput.value){
            if (operator === '+') {
                resultInput.value = temp + Number(numberInput.value)
            } else if (operator === '-') {
                resultInput.value = temp - Number(numberInput.value)
            } else if (operator === '*') {
                resultInput.value = temp * Number(numberInput.value)
            } else if (operator === '/') {
                resultInput.value = temp / Number(numberInput.value)
            }
            temp = Number(resultInput.value)
        }                
     } else {
        if (numberInput.value) {
            resultInput.value = temp
        }
    }
  })