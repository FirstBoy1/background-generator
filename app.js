(function () {
    let colorBox1 = document.querySelector("#colorBox1");
    let colorBox2 = document.querySelector("#colorBox2");
    let currentColors = document.querySelector("#currentColors");
    let body = document.querySelector("body");

    let color1 = "#f5e342";
    let color2 = "#50f268";

    body.style.background = currentColors.textContent = `linear-gradient(to right, ${color1}, ${color2})`;
    colorBox1.value = color1;
    colorBox2.value = color2;

    colorBox1.addEventListener("change", function() {
        color1 = colorBox1.value;
        changeColors();
    })

    colorBox2.addEventListener("change", function() {
        color2 = colorBox2.value;
        changeColors();
    })

    function changeColors() {
        let colors = `linear-gradient(to right, ${color1}, ${color2})`;
        body.style.background = colors;
        currentColors.textContent = colors;
    }
})()