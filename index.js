const display = document.getElementById("Display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}

function clearLastCharacter(){
    let displayVal = document.getElementById("Display");
    displayVal.value = displayVal.value.slice(0,-1);
}

function hasNoOperator(value) {

    const op = /[\+\-\*\/]/;

    return !op.test(value);
}

function perc(){
    let displayVal= document.getElementById("Display").value;

    let result = (displayVal) / 100;
    document.getElementById("Display").value = result;

}

function opMatch(){
    let displayVal = document.getElementById("Display").value;

    let opMatch = displayVal.match(/[\+\-\*\/]/);

    if (opMatch){

        let opIndex = opMatch.index;
        let operator = displayVal[opIndex];

        let leftside = displayVal.slice(0 , opIndex);
        let rightside = displayVal.slice(opIndex + 1);

        

        let newExp = leftside + operator + rightside;
        let pRight;

        if (operator == '+') {

            pRight = (parseFloat(leftside) * parseFloat(rightside))/100;
            newExp = parseFloat(leftside) + pRight;
        }
        else if (operator == '-') {

            pRight = (parseFloat(leftside) * parseFloat(rightside))/100;
            newExp = leftside - pRight;
        }
        else if (operator == '*') {
            pRight = (parseFloat(leftside) * parseFloat(rightside))/100;
            newExp = pRight;
        }
        else if (operator == '/') {

            pRight = (parseFloat(leftside) * 100 )/parseFloat(rightside);
            newExp = pRight;
        }
        else {
            newExp = "Error";
        }

        document.getElementById("Display").value = newExp;
    }
}

function disperc(){
    let displayVal = document.getElementById("Display").value;

    if (hasNoOperator(displayVal)) {
        perc();
    }
    else {
        opMatch();
    }
}