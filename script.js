let playerscore=0
let odinscore=0
let playerchoice=0
let odinchoice=0


function getRandInt(x){
    return(Math.floor(1+Math.random()*x))
}

function battle(x,y){
    if (x==1 && y==2) odinscore++
    if (x==1 && y==3) playerscore++
    if (x==2 && y==1) playerscore++
    if (x==2 && y==3) odinscore++
    if (x==3 && y==1) odinscore++
    if (x==3 && y==2) playerscore++
}

function rock(){
    playerchoice=1
    odinchoice=getRandInt(3)
    battle(playerchoice,odinchoice)
    scoreupdate()
    gameend()
}

function paper(){
    playerchoice=2
    odinchoice=getRandInt(3)
    battle(playerchoice,odinchoice)
    scoreupdate()
    gameend()
}

function scissors(){
    playerchoice=3
    odinchoice=getRandInt(3)
    battle(playerchoice,odinchoice)
    scoreupdate()
    gameend()
}

function scoreupdate(){ 
    document.getElementById('player_score').innerText = playerscore;
    document.getElementById('odin_score').innerText = odinscore;
}

function gameend(){
    if(playerscore==5){
        playerscore=0
        odinscore=0
        document.getElementById('player_score').innerText = 0;
        document.getElementById('odin_score').innerText = 0;
        alert('Victory! You have defeated Odin')
    }
    if(odinscore==5){
        playerscore=0
        odinscore=0
        document.getElementById('player_score').innerText = 0;
        document.getElementById('odin_score').innerText = 0;
        alert('Defeat! You have beed defeated by Odin') 
    }
}