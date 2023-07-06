
let count = 0;

const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
        btn.addEventListener("click", function (event){
        const style = event.currentTarget.classList
        if (style.contains('Decrease')){
            count--;
        } else if (style.contains('Increase')){
            count++;
        } else{
            count = 0;
        }
        if (count > 0 ) {
            value.style.color = "green"
        } else if(count < 0 ){
            value.style.color ="red"
        } else{
            value.style.color ="blue"
        }

        value.textContent = count;
    })

});