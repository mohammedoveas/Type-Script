var CalculatorApp = (function () {
    function CalculatorApp() {
        CalculatorApp.initialize();
        CalculatorApp.hookupEventListeners();
    }
    CalculatorApp.initialize = function () {
        CalculatorApp.firstNumber = document.querySelector('#firstNumber');
        CalculatorApp.secondNumber = document.querySelector('#secondNumber');
        CalculatorApp.operatorButton = document.querySelector('#operator');
        CalculatorApp.equalsButton = document.querySelector('#equals-button');
        CalculatorApp.plusButton = document.querySelector('#plus-button');
        CalculatorApp.minusButton = document.querySelector('#minus-button');
        CalculatorApp.divButton = document.querySelector('#divide-button');
        CalculatorApp.mulButton = document.querySelector('#multiply-button');
        CalculatorApp.clearButton = document.querySelector('#clear-button');
        CalculatorApp.resultButton = document.querySelector('#result-button');
    };
    CalculatorApp.hookupEventListeners = function () {
        CalculatorApp.equalsButton.addEventListener('click', CalculatorApp.calculate);
        CalculatorApp.plusButton.addEventListener('click', CalculatorApp.changeOperatorPlus);
        CalculatorApp.minusButton.addEventListener('click', CalculatorApp.changeOperatorMinus);
        CalculatorApp.divButton.addEventListener('click', CalculatorApp.changeOperatorDiv);
        CalculatorApp.mulButton.addEventListener('click', CalculatorApp.changeOperatorMul);
        CalculatorApp.clearButton.addEventListener('click', CalculatorApp.clearAll);
    };
    CalculatorApp.calculate = function () {
        var firstNumber = CalculatorApp.firstNumber.value;
        var secondsNumber = CalculatorApp.secondNumber.value;
        var operator = CalculatorApp.operatorButton.textContent.trim();
        var result = 0;
        if (firstNumber !== '' && secondsNumber !== '') {
            var num1 = parseFloat(firstNumber);
            var num2 = parseFloat(secondsNumber);
            switch (operator) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    result = num1 / num2;
                    break;
                default:
                    result = 0;
                    break;
            }
            CalculatorApp.resultButton.textContent = result.toString();
        }
        else {
            CalculatorApp.resultButton.textContent = 'RESULT';
        }
    };
    CalculatorApp.changeOperatorPlus = function () {
        CalculatorApp.operatorButton.textContent = '+';
    };
    CalculatorApp.changeOperatorMinus = function () {
        CalculatorApp.operatorButton.textContent = '-';
    };
    CalculatorApp.changeOperatorDiv = function () {
        CalculatorApp.operatorButton.textContent = '/';
    };
    CalculatorApp.changeOperatorMul = function () {
        CalculatorApp.operatorButton.textContent = '*';
    };
    CalculatorApp.clearAll = function () {
        CalculatorApp.firstNumber.value = '';
        CalculatorApp.secondNumber.value = '';
        CalculatorApp.operatorButton.textContent = '+';
        CalculatorApp.resultButton.textContent = 'RESULT';
    };
    return CalculatorApp;
}());
var calcApp = new CalculatorApp();
