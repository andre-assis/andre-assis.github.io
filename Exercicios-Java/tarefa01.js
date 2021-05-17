(function(win,doc){
    'use strict';

    doc.querySelector('#submit').addEventListener('click', function(event){
        event.preventDefault();
        let allInputs = doc.querySelectorAll('input[type=text]');
        let sum = 0;

        for(let i=0; i < allInputs.length; i++){
            let value=allInputs[i].value;
            sum += parseInt(value);
        }

        doc.querySelector('.result').classList.remove('d-none');
        doc.querySelector('.sum').innerHTML=`Soma: ${sum}`;

}, false);

})(window,document)