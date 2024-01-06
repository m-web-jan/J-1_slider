export function count() {
    let input = document.getElementsByTagName('input')[0];
    if (input.value == '') return;
    if (['+', '-', '*', '÷'].includes(input.value[input.value.length-1])) {
        input.value = eval(input.value.slice(0, input.value.length-1));
        return;
    }
    input.value = eval(input.value);
}