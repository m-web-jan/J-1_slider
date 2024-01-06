let input = document.getElementsByTagName('input')[0];
export function dot_btn() {
    if (input.value === '') {
        input.value += '0.';
    } else {
        let values = input.value.split(/\+|\-|\÷|\*/);
        input.value += values[values.length-1].includes('.') ? '' : '.';
    }
}