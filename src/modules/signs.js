let signs = document.getElementsByClassName('signs');
let input = document.getElementsByTagName('input')[0];
export function sign_btns() {
    for (let i = 2; i<6; i++) {
        signs[i].onclick = () => {
            if (['+', '-', '*', '÷'].includes(input.value[input.value.length-1])) {
                input.value = input.value.slice(0, input.value.length-1) + (signs[i].innerText=='÷'?'/':signs[i].innerText);
            } else if (input.value === '') {
                if (signs[i] == '-') input.value += '-';
            } else {
                input.value += signs[i].innerText=='÷'?'/':signs[i].innerText;
            }
        }
    }
}