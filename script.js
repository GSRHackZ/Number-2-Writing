let inp = document.getElementById("inp")
let result = document.getElementById("result")

inp.addEventListener('keyup', function (evt) {
    if (evt.keyCode == 13) {
        if (this.value.trim().length > 0) {
            let answer = num2word(this.value);
            if (answer !== undefined) {
                result.innerText = answer;
            }
        }
    }
})

