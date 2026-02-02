function generateWish() {
    const name = document.getElementById("name").value.trim();
    const gender = document.getElementById("gender").value;

    if (name === "") {
        alert("Please enter a name");
        return;
    }

    const url = `wish.html?name=${encodeURIComponent(name)}&gender=${gender}`;
    window.open(url, "_blank");
}

// Run on wish.html
if (window.location.pathname.includes("wish.html")) {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name");
    const gender = params.get("gender");

    const title = document.getElementById("title");
    const message = document.getElementById("message");

    title.innerText = "🎂 Happy Birthday 🎂";

    if (gender === "boy") {
        message.innerText = `Dear ${name}, Happy Birthday to an amazing Birthday Boy! 🎉`;
    } else {
        message.innerText = `Dear ${name}, Happy Birthday to a wonderful Birthday Girl! 🎉`;
    }
}

function downloadWish() {
    html2canvas(document.getElementById("wishCard")).then(canvas => {
        const link = document.createElement("a");
        link.download = "Happy_Birthday.png";
        link.href = canvas.toDataURL();
        link.click();
    });
}
