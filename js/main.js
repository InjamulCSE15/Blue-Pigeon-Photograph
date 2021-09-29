// console.log('JavaScript working...')

window.addEventListener("DOMContentLoaded", (event) => {
    let topButton = document.getElementById('topButton');

    window.onscroll = () => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            topButton.style.display = 'block';
        }
        else {
            topButton.style.display = 'none';
        }
    }

});