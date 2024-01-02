# Calculator
A copy of Iphone's calculator

CHANGES TO BE MADE:

HTML => change div.screen to form > input

JS => 
3 variables = input for id #input
              temp to store current action
              operations empty string;
              
add functions to all buttons => add(num){
    check if num == 0, if num == '.'
}
equal(){
    if operation is diff ' '
          input value = eval(temp + operation +  input value)
      else temp = 0 ; operation = ' '
}
clear(){
    if input value is diff ' ' => input value = ' '
}
operationFunction(operator){
      operation = operator
      temp = input value
      input value = ' '
} percent() negative()
