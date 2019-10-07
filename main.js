var inputs = document.getElementById('inputs')
var operation = document.getElementById('operation')
var result = document.getElementById('result')

var percentFlag = false

var buttonArr = [
    'x<sup>2</sup>', '&radic;x', '%', 'C',
    '7', '8', '9', '÷',
    '4', '5', '6', 'X',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'ON', 'OFF'
]


initiateCalculatorButtons()

var buttons = document.getElementsByTagName('button')
addONListener()




function addListeners(){
    for (let i = 0; i < buttons.length; i++) {
        if(buttons[i].value === '='){
            buttons[i].addEventListener('click', displayResult)
        }else if(buttons[i].value === 'C'){
            buttons[i].addEventListener('click', resetOutputFields)
        }else if(buttons[i].value === 'x<sup>2</sup>'){
            buttons[i].addEventListener('click', xPower2)
        }else if(buttons[i].value === '&radic;x'){
            buttons[i].addEventListener('click', sqrtX)
        }else if(buttons[i].value === '%'){
            buttons[i].addEventListener('click', percentage)
        }else if(buttons[i].value === 'OFF'){
            buttons[i].addEventListener('click', deactivateCalculator)
        }
        else buttons[i].addEventListener('click', displayOperation)
    }
}

function removeListeners(){
    for (let i = 0; i < buttons.length; i++) {
        if(buttons[i].value === '='){
            buttons[i].removeEventListener('click', displayResult)
        }else if(buttons[i].value === 'C'){
            buttons[i].removeEventListener('click', resetOutputFields)
        }else if(buttons[i].value === 'x<sup>2</sup>'){
            buttons[i].removeEventListener('click', xPower2)
        }else if(buttons[i].value === '&radic;x'){
            buttons[i].removeEventListener('click', sqrtX)
        }else if(buttons[i].value === '%'){
            buttons[i].removeEventListener('click', percentage)
        }else if(buttons[i].value === 'OFF'){
            buttons[i].removeEventListener('click', deactivateCalculator)
        }
        else buttons[i].removeEventListener('click', displayOperation)
    }
}

function initiateCalculatorButtons(){

    for (let i = 0; i < buttonArr.length; i++) {
        var node = document.createElement('button')

        if(buttonArr[i] === '÷') node.value = '/'
        else if(buttonArr[i] === 'X') node.value = '*'
        else node.value = buttonArr[i]
        node.innerHTML = buttonArr[i]
        inputs.appendChild(node)
    }
}

function displayOperation(e){
    if(isNaN(e.target.value) && !(e.target.value === '.')) operation.value += ' ' + e.target.value + ' '
    else operation.value += e.target.value
    
    if(operation.value.length > 4 && !percentFlag) displayResult(e)
}

function displayResult(e){
    if(percentFlag) percentage()
    else{
        if(e.target.value === '='){
            operation.value = result.value
            result.value = ''
        }else
        result.value = eval(operation.value) /// ye ye superbad practice I know. 
    }
}

function resetOutputFields(){
    operation.value = ''
    result.value = ''
}

function xPower2(){
    operation.value = operation.value * operation.value
}

function sqrtX(){
    operation.value = Math.sqrt(operation.value)
}

function percentage(){
    if(percentFlag){
        numberFlag = true
        firstNumberArr = []
        firstNumber = 0
        secondNumberArr = []
        secondNumber = 0
        for (let i = 0; i < operation.value.length; i++) {
            if(operation.value[i] !== ' ' && numberFlag){
                firstNumberArr.push(operation.value[i])
           }else if(numberFlag){
               firstNumber = firstNumberArr.join('')
               numberFlag = false
           }

           if(numberFlag === false){
               if(operation.value[i] === '%' || operation.value[i] === ' '){
                }else{
                    secondNumberArr.push(operation.value[i])
                }
            }
        }
        secondNumber = secondNumberArr.join('')
        operation.value = firstNumber/100 * secondNumber
    }else{
        operation.value += ' % '
    }
    percentFlag = !percentFlag

}

function addONListener(){
    for(i = 0; i < buttons.length; i++){
        if(buttons[i].value === 'ON'){
            buttons[i].addEventListener('click', activateCalculator)
        }
    }
}

function activateCalculator(){
    addListeners()
}

function deactivateCalculator(){
    removeListeners()
    operation.value = ''
    result.value = ''
}