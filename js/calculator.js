






/* Calculator Section No- 16 Start here */
let buttons_16 = document.querySelector('.buttons-16');
let btn_16 = document.querySelectorAll('.span-16');
let value_16 = document.getElementById('value-16');
let toggle_16 = document.querySelector('.toggle-16');
let calculator_body = document.querySelector('.calculator-body');

for(let i = 0; i < btn_16.length; i++) {
    btn_16[i].addEventListener('click', function(){

        if (this.innerHTML == "="){
            value_16.innerHTML = eval(value_16.innerHTML);
        }else {
            if (this.innerHTML == "Clear"){
                value_16.innerHTML = "";
            }else{
                value_16.innerHTML += this.innerHTML;
                //value_16.innerHTML = value_16.innerHTML + this.innerHTML;
            }
        }      
    })
}


toggle_16.onclick = function(){
    calculator_body.classList.toggle('dark');
   
}

/* Calculator Section No- 16 End here */
