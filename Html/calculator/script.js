// console.log('connected!');

let str = '';
let buttons = document.querySelectorAll('.button');

let input = document.querySelector('input');

function result(str){
    console.log(str);
}

Array.from(buttons).forEach(function(button) {
     button.addEventListener('click',function(e){
        if(e.target.innerHTML=='='){
            str = eval(str);
            input.value = str;
        }
        else if(e.target.innerHTML=='AC'){
            str = "";
            input.value = str;
        }
        else{
            str = str+e.target.innerHTML;
            input.value = str;
        }
        console.log(e.target);
     });
});