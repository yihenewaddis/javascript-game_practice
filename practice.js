let counts=0,countss=0,countsss=0,countssss=0;
let firstCard= getRandomCard();
let secondCard= getRandomCard();
let  arr=[firstCard,secondCard];;
let sum =arr[0]+arr[1];
let hasBlackJack=false;
let isAlive=false;
let message="";
let cardesEl;
function getRandomCard(){
 let randumNumber=Math.floor(Math.random()*13)+1;
 if(randumNumber>10){
  return 10;
 }
 else if(randumNumber==1){
  return 11;
 }
else{
  return randumNumber;
}
}
function startGame(){
  hasBlackJack=false;
  isAlive=true;
  document.getElementById("falid").innerText=" ";
  renderGame()
}
function renderGame(){
     let messageEl=document.getElementById("message_el");
     let sums=document.getElementById("sum_sl")
     let cardesEl="cards:"
     cardesEl=document.getElementById("cardes_el")
    cardesEl.innerHTML="cards: "
    for(let i=0;i<arr.length;i++){
    cardesEl.innerHTML +=arr[i]+" , ";
    }
if(sum<35){
  message="do you went to draw a new card!"
  isAlive=true;
}
else if(sum===35){
    message="wohoo! you have got black jak!"
    hasBlackJack=true;
}
else{
    message="you are out of the game!"
    isAlive=false;
    hasBlackJack=true;
}
messageEl.innerText=message;
sums.innerHTML="sum:"+sum;
}
function newCard(){
  if(hasBlackJack==false&&isAlive==true&&sum<35){
    let card= getRandomCard();
    sum+=card;
    arr.push(card);
    renderGame();
  }
 if(isAlive===false){
  document.getElementById("falid").innerText="First start the GAME";
 }
 if(hasBlackJack===true){
  document.getElementById("falid").innerText="GAME OVER";
 }

 if(sum>35){
  document.getElementById("message_el").innerText="you are out of the game!";
  document.getElementById("falid").innerText="GAME OVER"
 }
  
}
function mines1(){
 if(counts<2){
  if(sum<35){
    sum=sum-1;
    let sums=document.getElementById("sum_sl")
    sums.innerHTML="sum:"+(sum);
    cardesEl=document.getElementById("cardes_el")
     cardesEl.innerHTML +="-1"+" ";
     counts+=1;
  }
  else if(sum===35){
    document.getElementById("message_el").innerText="wohoo! you have got black jak!";
   }
   else{
    document.getElementById("message_el").innerText="you are out of the game!";
   }  
 }
}
function plus1(){
if(countss<2){
  if(sum<35){
    sum=sum+1;
    let sums=document.getElementById("sum_sl")
    sums.innerHTML="sum:"+(sum);
    cardesEl=document.getElementById("cardes_el")
    cardesEl.innerHTML +="+1"+" ";
    countss+=1;
  }
  else if(sum===35){
    document.getElementById("message_el").innerText="wohoo! you have got black jak!";
    document.getElementById("falid").innerText="you win"
   }
   else{
    document.getElementById("message_el").innerText="you are out of the game!";
   } 
}
}
function mines3(){
if(countsss<1){
  if(sum<35){
    sum=sum-3;
    let sums=document.getElementById("sum_sl")
    sums.innerHTML="sum:"+(sum);
    cardesEl=document.getElementById("cardes_el")
    cardesEl.innerHTML +="-3"+" ";
    countsss+=1;
  }
  else if(sum===35){
    document.getElementById("message_el").innerText="wohoo! you have got black jak!";
   }
   else{
    document.getElementById("message_el").innerText="you are out of the game!";
    document.getElementById("falid").innerText="GAME OVER"
   }
} 
}
function plus3(){
if(countssss<1){
  if(sum<35){
    sum=sum+3;
    let sums=document.getElementById("sum_sl")
    sums.innerHTML="sum:"+(sum);
    cardesEl=document.getElementById("cardes_el") 
    cardesEl.innerHTML +="+3"+" ";
    countssss +=1;
  }
  else if(sum===35){
    document.getElementById("message_el").innerText="wohoo! you have got black jak!";
    document.getElementById("falid").innerText="YOU WIN"
   }
   else{
    document.getElementById("message_el").innerText="you are out of the game!";
    document.getElementById("falid").innerText="GAME OVER"
   } 
}
}
function finish(){
  if(sum<35){
    document.getElementById("message_el").innerText="do you went to draw a new card!";
  }

  else if(sum===35){
    document.getElementById("message_el").innerText="wohoo! you have got black jak!";
    document.getElementById("falid").innerText="YOU WIN"
  }
  else{
    document.getElementById("message_el").innerText="you are out of the game!";
    document.getElementById("falid").innerText="GAME OVER"
  }
}