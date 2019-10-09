  var CNT =0;
  var INPUTARR = [];



function onSubmit(){
  //Initialize and Declare Variables
  var valueStored,valExist =false;
  var inputVal = document.getElementById('name').value;

  //Declare Variables Using Functions
  valAlreadyExist = arrValExist(inputVal);
  isValue = isAValue(inputVal);

  //Conditions (If value does not exist and there is actually a value)
  if(valAlreadyExist==false && isValue==true ){
    valueStored = storeVal(inputVal);
    //Condition (If Value has been stored)
    if(valueStored==true){
      displayArr();
      displayBgColor();
      CNT=CNT+1;
    }else{
      alert("Value Was Not Stored");
    }
  }else{
    alert("Make sure value has not already been created & make sure to enter a value")
  }
}
function displayBgColor(){
  var randBgColor='#'+Math.floor(Math.random()*16777215).toString(16);
  var randTextColor='#'+Math.floor(Math.random()*16777215).toString(16);
  document.getElementsByTagName("body")[0].style.backgroundColor=randBgColor;
  document.getElementsByTagName("body")[0].style.color=randTextColor;

}
function isAValue(val){
  var containsValue =true;
  if(!val.trim() || val.length===0){
    containsValue=false;
    alert("Must Enter A Value, Thank You!!!")
  }
  return containsValue;
}

function storeVal(val){
    INPUTARR.push(val.trim());
    console.log('Your value has been added to the array');
    return true;
}

function arrValExist(val){
  var valueExist =false;
  for(var i=0;i<INPUTARR.length;i++){

    if(INPUTARR[i]==val){
      valueExist = true;
      alert('Value Exist Already')
      break;
    }
  }
  return valueExist;
}

function displayArr(show){

  var outString="Your Updated Array Is: [";
  for(var i=0;i<INPUTARR.length;i++){
    if(i !=INPUTARR.length-1){
      outString= outString+ INPUTARR[i] + ", ";
    }else{
      outString= outString+ INPUTARR[i];
    }
  }
  outString=outString+"]";
  // if(show){
  //   alert(outString);
  // }else{
    console.log(outString);
  // }

}
