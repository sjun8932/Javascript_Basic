const btn = document.querySelector('#button')
// document.querySelector(아이디)는 그 아이디의 태그를 가져온다.
btn.addEventListener('click', () => {
    const wordTag = document.querySelector('#word')
    const inputTag = document.querySelector('#input')
    const errorTag = document.querySelector('#error')
    const word = document.querySelector('#word').textContent
    const input = document.querySelector('#input').value
    const lastIndex = word.length-1
    const w =  word[lastIndex]
    const i = input[0]
    if (w === i){
        wordTag.textContent = input
        errorTag.textContent = ''
        inputTag.value = '' 
        inputTag.focus()
    } else {
        errorTag.textContent =  '땡'
        inputTag.value = ''
        inputTag.focus()
    }
})
