function main() {
      startGame();
      decision1();
      decision2();

}


//PART ONE: START STORY
function startGame() {
  let name = prompt("wElCoMe fRieNd, tO tHe hAuNtEd ALL SAINTS HIGHSCHOOL, wHere iT mAy seEm lIkE a nOrMal hIgHsChOoL, bUt wHeN iT tUrNs dArk, tHiNgs gGt rEal SPOOKY. WhAt iS yOur nAme, FRIEND?");
      alert("WeLCoMe " + name + ", let's eXpLore tHiS HAunTed sCHooooooL.");
}


//PART TWO: DECISION 1
function decision1(){
let choice1 = prompt("YOu eNter the maIn eNtraNce of The sChool. Do yOu exPlore the first floOr, or the seCond flOor?");
      alert("Your chose to explore " + choice1 + "... gOod cHoIce.");

}

//PART THREE: DECISION 2
function decision2(){
      let choice2 = prompt("Now, yOu aRe oN tHe " + choice1 + ", yOu hEaR a vOice cAlling yoUr name. inVestigAte? oR nOt?");
      alert("Your chose to " + choice2);
      
}

main();







