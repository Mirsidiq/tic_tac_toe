const gameTitle=document.querySelector('.game__title');
const gameItems=Array.from(document.querySelectorAll('.game__item'));
const restartBtn=document.querySelector('.game__restart');
const xPlayer='X'
const oPlayer='O'
let ceils=Array(9).fill(null)
let currentPlayer=xPlayer
const renderCharacters=()=>{
    for(let i=0;i<gameItems.length;i++){
        gameItems[i].addEventListener('click',()=>{
            if(ceils[i]==null){
                gameItems[i].textContent=currentPlayer
            ceils[i]=currentPlayer 
            if(winner()){
                let winBlocks=winner()
                for(let item of winBlocks){
                    gameItems[item].style.backgroundColor="#7CFC00"
                }
                gameTitle.textContent=`${currentPlayer} has won`
                currentPlayer=''
                return
            }
            else if(!ceils.includes(null)){
                gameTitle.textContent='GAME OVER'
            }
            currentPlayer=currentPlayer===xPlayer ? oPlayer:xPlayer
            }
        })
    }
}
const winningCombinations=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
function winner(){
    for(let result of winningCombinations){
        let [a,b,c]=result
        if(ceils[a] && (ceils[a]===ceils[b])&&(ceils[a]===ceils[c])){
            return [a,b,c]
        }
    }
    return false
}
const restart=()=>{
    currentPlayer=xPlayer
    ceils.fill(null)
    gameItems.forEach(e=>{
        e.innerHTML=''
        e.style.backgroundColor=''
    })
    gameTitle.textContent='X and O game'
}
restartBtn.addEventListener('click',restart)
renderCharacters()