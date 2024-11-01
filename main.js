let choice1;
let choice2;
let choice3;

function main() {
      startGame();
      decision1and2();

}


//PART ONE: START STORY
function startGame() {
  let name = prompt("wElCoMe fRieNd, tO tHe hAuNtEd ALL SAINTS HIGHSCHOOL, wHere iT mAy seEm lIkE a nOrMal hIgHsChOoL, bUt wHeN iT tUrNs dArk, tHiNgs gGt rEal SPOOKY. WhAt iS yOur nAme, FRIEND?");
      alert("WeLCoMe " + name + ", let's eXpLore tHiS HAunTed sCHooooooL.");
}


//PART TWO: DECISION 1
function decision1and2(){
choice1 = prompt("YOu eNter the maIn eNtraNce of The sChool. Do yOu exPlore the library, or the gym?");
      alert("Your chose to explore the " + choice1 + "... gOod cHoIce.");

//PART THREE: DECISION 2
 choice2 = prompt("Now, yOu aRe iN thE " + choice1 + ", yOu hEaR a vOice cAlling yoUr name tO the sTorage roOm. inVestigAte? YES or NO?");  
      if (choice2 == "YES"){
            alert("YOu cHose tO inVestiGate The SToRage rOom. yOu mIght rEgret tHat...");
//PART FOUR DECISION 3
choice3 = prompt("Now, yOu aRe iN thE sTorage roOm. YOu seE a litTle gIrl cRying iN the coRner, Do you: COMFORT oR RUN?");
      if (choice3 == "COMFORT"){
      alert("iT was A ghost tHaT feEls loneLy, Comforting tHe gHost made Her feeL happy! She Disappears aNd yOu are Rewarded wiTh CANDY! THE END!");

      }
}
      if (choice2 == "NO") {
            alert("YOu cHose tO noT inVestiGate The SToRage rOom. A GHOST JUMPSCARES YOU! YOU DIE! THE END!")

//choice3 = prompt("Now, yOu aRe iN thE sTorage roOm. YOu seE a litTle gIrl cRying iN the coRner, Do you: COMFORT oR RUN?");
      if (choice3 == "RUN"){
      alert("iT was A ghost tHaT feEls loneLy, RunNing aWay made Her feeL ANGRY! She cHaseS yOu yOu are Rewarded wiTh... DEATH! THE END!");
      
      }


}
}
          

main();
