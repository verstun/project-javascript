
// BUDGET CONTROLLER
var budgetController = (function() {

    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var data = {
        allItems: {
            exp: [], // all expenses
            inc: [] //all incomes
        },
        totals: {
            exp: 0, // total expenses
            inc: 0  // total incomes
        }
    }

})();



// UI CONTROLLER
var UIController = (function(){

    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getInput: function(){
            return {
                type: document.querySelector(DOMStrings.inputType).value, // will be either inc or exp
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value,
            }

        },
        getDOMstrings: function() {
            return DOMStrings;
        }
    };

})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){


    var setupEventListeners = function() {

        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event){

            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }

        });
    };



    var ctrlAddItem = function(){

        // 1. Get the field input data

        var input = UIController.getInput();
        console.log(input);

        // 2. Add item to budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on UI

    }

    return {
        init: function() {
            console.log('Application has started.');
            setupEventListeners();
        }
    }


})(budgetController, UIController);

controller.init();











