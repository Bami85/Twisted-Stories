import './style.css'
import { gameLivell } from './gameData'

let text = document.querySelector<HTMLDivElement>('#text')! //hämta question div
let leftBtn = document.getElementById("leftBtn") as HTMLElement //hämtar vänster knapp
let rightBtn = document.getElementById("rightBtn") as HTMLElement //hämtar vänster knapp
//test



function onLoad(): void {  
  renderStep()
}

let currentGamestep = gameLivell[0]



function gameprogress(this: HTMLElement, _event: MouseEvent): void {
  let nextStep: number = 0  
  if (this.id == "leftBtn") {
    nextStep = currentGamestep.choises.leftBtn!.path
    
  } else if(this.id == "rightBtn") {
    nextStep = currentGamestep.choises.rightBtn!.path
  } else(
    console.log("crash")
    )
    
    const found = gameLivell.find(function(gameStep) {
      return gameStep.id == nextStep
    });
    if ( found ) {
      currentGamestep = found
      console.log(found)
      renderStep()
    }
    
  }  
  
  function renderStep() {
    text!.innerText = currentGamestep.question
    leftBtn!.innerText = currentGamestep.choises.leftBtn!.answer
    rightBtn!.innerText = currentGamestep.choises.rightBtn!.answer
  }
   
   
  leftBtn!.addEventListener("click", gameprogress)  

  rightBtn!.addEventListener("click", gameprogress) 


onLoad()


