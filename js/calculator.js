String.prototype.toPersianDigit= function(){ var id= ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹']; return this.replace(/[0-9]/g, function(w){ return id[+w] });};

var result = "";
var currentNumber = 0;
var clearAll = false;
var numberOfDigits = 6;

function updateResult(){
    document.getElementById("numberbox").innerHTML = result.toString().toPersianDigit();
}
function clearNumber(){
    if(!clearAll){
        if(result.slice(-1)==" ") result = result.substring(0,result.length-3);
        else result = result.substring(0,result.length-1);
    }else{
        document.getElementById("clear").innerHTML = "C";
        result="";
    }
    updateResult();
}

function addNumber(number){
    document.getElementById("clear").innerHTML = "C";
    clearAll = false;
    result += number;
    updateResult();
}
function addOperator(operator){
    if(result.slice(-1)!=" "){
        document.getElementById("clear").innerHTML = "C";
        clearAll = false;
        result+=" "+operator+" ";
        updateResult();
    }
}
function showResult(){
    document.getElementById("numberbox").animate([
        { border: '1px solid #ddd' },
        { border: '1px solid rgb(27, 142, 236)' },
        { border: '1px solid #ddd' }
      ], {
        duration: 500,
        iterations: 1
      });
    result = eval(result.replaceAll("÷","/"));
    result = (Math.round(result * 10**numberOfDigits) / 10**numberOfDigits).toString();
    document.getElementById("numberbox").innerHTML = result.toPersianDigit();
    document.getElementById("clear").innerHTML = "AC";
    clearAll = true;
}