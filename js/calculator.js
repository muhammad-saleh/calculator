'use strict';

//My mini jQuery
var $ = document.querySelector.bind(document);

var EyeoCalculator = (function () {
    var digits = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105];
    var operations = [187, 189, 191, 88, 54];
    var numbersStack = [];
    var operation;

    function onDocumentReady() {
        $('.calculator').addEventListener('keydown', _keyValidator);
    }

    function _keyValidator(ev) {
        if (digits.indexOf(ev.keyCode) > -1) {
            if (!operation) {
                _formatScreenText();
            } else {
                _screenText('');
            }
        } else if (operations.indexOf(ev.keyCode) > -1) {
            ev.preventDefault();
            _handleOperation(ev.keyCode);
        } else {
            ev.preventDefault();
        }
        _formatScreenText();

    }

    function _formatScreenText() {
        var screenValue = $('.calculator__screen-text').value;
        if (screenValue) {
            _screenText(screenValue.match(/[0-9.]/g).join(''));
        }
    }

    function _handleOperation(keyCode) {
        var result = 0;
        numbersStack.push($('.calculator__screen-text').value);
        if (numbersStack.length > 1) {

        }
        operation = keyCode;
    }

    function _screenText(val) {
        $('.calculator__screen-text').value = val;
    }

    function _printResult() {
        var result;

        if(numbersStack.length === 1) {
            $('.calculator__screen-text').value = numbersStack[0];
            return numbersStack[0];
        } else if(numbersStack.length === 0) {
            $('.calculator__screen-text').value = 0;
            return 0
        }

        switch (operation) {
            case 187:
                result = numbersStack[0] + numbersStack[1];
                break;
        }

        $('.calculator__screen-text').value = result;

    }

    return {
        onDocumentReady: onDocumentReady
    };

})();


document.addEventListener('DOMContentLoaded', function (event) {
    EyeoCalculator.onDocumentReady();
});