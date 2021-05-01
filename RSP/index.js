const computerTag = document.querySelector('#computer');
computerTag.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) 0 0`;  // 0 0 은 left top의 px값

let computerChoice = 'rock';
const rspCoord = {
    rock: '0',
    scissors: '-142px',
    paper: '-284px',
};

setInterval(() => {
    if (computerChoice === 'rock') {
        computerChoice = 'scissors';
    } else if (computerChoice === 'scissors') {
        computerChoice = 'paper';
    } else if (computerChoice === 'paper') {
        computerChoice = 'rock'
    }
    computerTag.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${rspCoord[computerChoice]} 0`;
}, 50)


const rockTag = document.querySelector('#rock');
const scissorsTag = document.querySelector('#scissors');
const paperTag = document.querySelector('#paper');

const score = {
    rock: 0,
    scissors: 1,
    papaer: -1,
}

rockTag.addEventListener('click', () => {
    const myScore = score.rock;
    const computerChoice = score[computerChoice];
    const diff = myScore - computerScore;
    const scoreTag = document.querySelector('#score')
    let accScore = Number(scoreTag.textContent);
    if(diff === 0 ){
    }else if (diff ===2 || diff === -1){
        accScore += 1;
    }else if (diff === -2 || diff === 1){
        accScore -= 1;
    }
    scoreTag.textContent == accScore;
});
scissorsTag.addEventListener('click', () => { 
    const myScore = score.scissors;
    const computerChoice = score[computerChoice];
    const diff = myScore - computerScore;
    const scoreTag = document.querySelector('#score')
    let accScore = Number(scoreTag.textContent);
    if(diff === 0 ){
    }else if (diff ===2 || diff === -1){
        accScore += 1;
    }else if (diff === -2 || diff === 1){
        accScore -= 1;
    }
    scoreTag.textContent == accScore;
});
paperTag.addEventListener('clcick', () => {
    const myScore = score.papaer;
    const computerChoice = score[computerChoice];
    const diff = myScore - computerScore;
    const scoreTag = document.querySelector('#score')
    let accScore = Number(scoreTag.textContent);
    if(diff === 0 ){
    }else if (diff ===2 || diff === -1){
        accScore += 1;
    }else if (diff === -2 || diff === 1){
        accScore -= 1;
    }
    scoreTag.textContent == accScore;
});