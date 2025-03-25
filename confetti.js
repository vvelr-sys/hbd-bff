document.getElementsByClassName("click")[0].addEventListener("click", () => {
    let canvas = document.createElement("canvas");
    canvas.width = 600;
    canvas.height = 600;
    let container = document.getElementsByClassName("gift-box")[0];
    container.appendChild(canvas);

    let confetti_button = confetti.create(canvas);
    confetti_button({
        particleCount: 200,
        spread: 200,
        startVelocity: 15,
        scaler: 0.9,
        ticks: 90,
        origin: { y: 0.2 },
    }).then(() => container.removeChild(canvas));
})