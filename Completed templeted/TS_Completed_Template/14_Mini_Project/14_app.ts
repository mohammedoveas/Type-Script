class CalculatorApp{
    private static firstNumber : HTMLInputElement;
    private static secondNumber : HTMLInputElement;
    private static operatorButton : HTMLButtonElement;
    private static equalsButton : HTMLButtonElement;
    private static resultButton : HTMLButtonElement;
    private static plusButton : HTMLButtonElement;
    private static minusButton : HTMLButtonElement;
    private static divButton : HTMLButtonElement;
    private static mulButton : HTMLButtonElement;
    private static clearButton : HTMLButtonElement;

    constructor(){
        CalculatorApp.initialize();
        CalculatorApp.hookupEventListeners();
    }

    public static initialize(){
        CalculatorApp.firstNumber = document.querySelector('#firstNumber') as HTMLInputElement;
        CalculatorApp.secondNumber = document.querySelector('#secondNumber') as HTMLInputElement;
        CalculatorApp.operatorButton = document.querySelector('#operator') as HTMLButtonElement;
        CalculatorApp.equalsButton = document.querySelector('#equals-button') as HTMLButtonElement;
        CalculatorApp.plusButton = document.querySelector('#plus-button') as HTMLButtonElement;
        CalculatorApp.minusButton = document.querySelector('#minus-button') as HTMLButtonElement;
        CalculatorApp.divButton = document.querySelector('#divide-button') as HTMLButtonElement;
        CalculatorApp.mulButton = document.querySelector('#multiply-button') as HTMLButtonElement;
        CalculatorApp.clearButton = document.querySelector('#clear-button') as HTMLButtonElement;
        CalculatorApp.resultButton = document.querySelector('#result-button') as HTMLButtonElement;
    }

    public static hookupEventListeners(){
        CalculatorApp.equalsButton.addEventListener('click',CalculatorApp.calculate);
        CalculatorApp.plusButton.addEventListener('click',CalculatorApp.changeOperatorPlus);
        CalculatorApp.minusButton.addEventListener('click',CalculatorApp.changeOperatorMinus);
        CalculatorApp.divButton.addEventListener('click',CalculatorApp.changeOperatorDiv);
        CalculatorApp.mulButton.addEventListener('click',CalculatorApp.changeOperatorMul);
        CalculatorApp.clearButton.addEventListener('click',CalculatorApp.clearAll);
    }

    public static calculate(){

        var firstNumber = CalculatorApp.firstNumber.value;
        var secondsNumber = CalculatorApp.secondNumber.value;
        var operator = CalculatorApp.operatorButton.textContent.trim();
        var result = 0;

        if(firstNumber !== '' && secondsNumber !== ''){
            var num1 = parseFloat(firstNumber);
            var num2 = parseFloat(secondsNumber);
            switch(operator){
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
        else{
            CalculatorApp.resultButton.textContent = 'RESULT';
        }
    }

    public  static changeOperatorPlus(){
        CalculatorApp.operatorButton.textContent = '+';
    }
    public  static changeOperatorMinus(){
        CalculatorApp.operatorButton.textContent = '-';
    }
    public  static changeOperatorDiv(){
        CalculatorApp.operatorButton.textContent = '/';
    }
    public  static changeOperatorMul(){
        CalculatorApp.operatorButton.textContent = '*';
    }
    public  static clearAll(){
        CalculatorApp.firstNumber.value = '';
        CalculatorApp.secondNumber.value = '';
        CalculatorApp.operatorButton.textContent = '+';
        CalculatorApp.resultButton.textContent = 'RESULT';
    }
}

var calcApp = new CalculatorApp();