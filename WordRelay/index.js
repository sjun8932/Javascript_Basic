const btn = document.querySelector('#button')
// document.querySelector(아이디)는 그 아이디의 태그를 가져온다.
const dictionary = [];

btn.addEventListener('click', () => {
   
    let wordTag = document.querySelector('#word')
    let inputTag = document.querySelector('#input')
    let errorTag = document.querySelector('#error')
    let word = wordTag.textContent
    let input = inputTag.value
    
   
        if (word[word.length-1] === input[0]){
            wordTag.textContent = input
            errorTag.textContent = ''
            inputTag.value = '' 
            inputTag.focus()
            dictionary.push(input)
        } else {
            errorTag.textContent =  '땡'
            inputTag.value = ''
            inputTag.focus()
        }

    
})
