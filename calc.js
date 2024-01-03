let temp = 0;
let input = document.getElementById("input");
let operation = '';

function add(num){
    if(num == 0){
        if(input.value[input.value.length - 1] != 0 || input.value.length > 1){
            input.value = input.value + num;
        }
    }
    else if(num == '.'){
        if(input.value[input.value.length - 1] != '.' && input.value != ''){
            input.value = input.value + num;
        }
    }else{
        input.value = input.value + num;
    }
}

function operationFunction(operator){
    operation = operator;
    temp = input.value;
    input.value = '';
}

function equal(){
    if(operation != ''){
        input.value = eval(temp + operation + input.value);
    }
    else{
        temp = 0; 
        operation = '';
    }
}

function clearInput(){
    if(input.value != ''){
        input.value = '';
    }
}

function percent(){
    input.value = input.value / 100;
}

function negativeNum(){
    input.value = input.value * -1;
}