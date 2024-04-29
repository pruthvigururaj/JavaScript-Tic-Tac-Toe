let btn=document.querySelectorAll('.btn');
let winmsg=document.querySelector('.win-mg');
let wrap=document.querySelector('.wrap');
let rstgame=document.querySelector('.Reset');
let playagn=document.querySelector('.playagn');

rstgame.classList.remove('hide');
wrap.classList.remove('hide');

let drawcount=false;

let toggle=false;

let count=0;

const winner=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],  
]

rstgame.addEventListener('click',btnclick);
playagn.addEventListener('click',btnclick);

function btndisable(){
    btn.forEach((btn)=>
    {
        btn.disabled=true;
    })
}

function btnclick(){
    
    btn.forEach(btn=>{
        btn.innerText="";
        btn.disabled=false;
    })
    rstgame.classList.remove('hide');
    playagn.classList.add('hide');
    count=0;
    winmsg.innerText="";
    drawcount=false;
}
btn.forEach((btn)=>
btn.addEventListener("click",()=>{
    
   if(toggle)
   {
    btn.classList.add('red');
    btn.innerText='X';
    toggle=false;
   }
   else
   {
    btn.classList.add('red');
    btn.innerText='O';
    toggle=true;
   }
   btn.disabled=true;
  
   checkwinner();
   count++;
   if(count==9 && drawcount==false)
   {
    winmsg.innerText="It's a Draw";
    
   }
   
})
)

const displaybtn=()=>{
    
            rstgame.classList.add('hide');
            playagn.classList.remove('hide');
            
}

const checkwinner=()=>{
    winner.forEach(win=>{
        let first=btn[win[0]].innerText;
        let second=btn[win[1]].innerText;
        let third=btn[win[2]].innerText;
        if(first==="X" && second==="X" && third==="X")
        {
            winmsg.innerText="Congratulations, X won the game";
            displaybtn();
            btndisable();
            drawcount=true;
        }
        else if(first==="O" && second==="O" && third==="O")
        {
           winmsg.innerText="Congratulations, O won the game";
           displaybtn();
           btndisable();
           drawcount=true;
        }
        if(count==8)
        console.log(first,second,third);
        
    })
}



