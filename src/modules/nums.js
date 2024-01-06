let input = document.getElementsByTagName('input')[0];
let nums = document.getElementsByClassName('num');
export function nums_btns() {
    for (let i = 0; i < nums.length; i++) {
        nums[i].onclick = () => {
            input.value += nums[i].innerText;
        }
    }
}