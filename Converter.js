function inchesConverter(Valnum){
  Valnum=parseFloat(Valnum);
  
  document.getElementById("outputFeet").innerHTML=(Valnum+0)/12;
}

function ftConverter(valNum){
  valNum=parseFloat(valNum);
  
  document.getElementById("outputInches").innerHTML=(valNum+0)*12;
}