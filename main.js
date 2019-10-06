var inputs = document.getElementById('inputs')
var operation = document.getElementById('operation')
var result = document.getElementById('result')

var percentFlag = false

var buttonArr = [
    'x<sup>2</sup>', '&radic;x', '%', 'C',
    '7', '8', '9', '÷',
    '4', '5', '6', 'X',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
]

initiateCalculatorButtons()

function initiateCalculatorButtons(){

    for (let i = 0; i < buttonArr.length; i++) {
        var node = document.createElement('button')

        if(buttonArr[i] === '÷') node.value = '/'
        else if(buttonArr[i] === 'X') node.value = '*'
        else node.value = buttonArr[i]
        node.innerHTML = buttonArr[i]

        if(buttonArr[i] === '='){
            node.addEventListener('click', displayResult)
        }else if(buttonArr[i] === 'C'){
            node.addEventListener('click', resetOutputFields)
        }else if(buttonArr[i] === 'x<sup>2</sup>'){
            node.addEventListener('click', xPower2)
        }else if(buttonArr[i] === '&radic;x'){
            node.addEventListener('click', sqrtX)
        }else if(buttonArr[i] === '%'){
            node.addEventListener('click', percentage)
        }else node.addEventListener('click', displayOperation)

        inputs.appendChild(node)
    }
}

function displayOperation(e){
    if(isNaN(e.target.value) && !(e.target.value === '.')) operation.value += ' ' + e.target.value + ' '
    else operation.value += e.target.value
    console.log(operation)
    
    if(operation.value.length > 4 && !percentFlag) displayResult(e)
}

function displayResult(e){
    if(percentFlag) percentage()
    else{
        if(e.target.value === '='){
            operation.value = result.value
            result.value = ''
        }else
        result.value = eval(operation.value)
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