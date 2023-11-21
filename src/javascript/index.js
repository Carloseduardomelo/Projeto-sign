const error = document.getElementById('error')
const input = document.getElementById('input-imeil')
const button = document.getElementById('button')
const ok = document.getElementById('ok')
const main = document.getElementById("main")


function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  ok.style.display = 'none'

button.addEventListener('click' , () =>{
    if(!validateEmail(input.value)){
        error.style.display = 'block'
        input.style.borderColor = 'red'
    }else{
        error.style.display = 'none'
        input.style.borderColor = 'transparent'
        ok.style.display = 'flex'
        main.style.display = 'none'
    }
})