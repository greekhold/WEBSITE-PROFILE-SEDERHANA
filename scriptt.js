window.onload = function() {
    let canvas = document.getElementById("profileCanvas");
    let ctx = canvas.getContext("2d");

    canvas.width = 100;
    canvas.height = 100;

    let img = new Image();
    img.src = "profile.jpg"; // Pastikan gambar ada di folder yang sama
    img.onload = function() {
        ctx.beginPath();
        ctx.arc(50, 50, 50, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();
        ctx.drawImage(img, 0, 0, 100, 100);
    };
};
