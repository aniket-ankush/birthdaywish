function generateWish() {
    const name = document.getElementById("name").value.trim();
    const gender = document.getElementById("gender").value;

    if (!name) {
        alert("Please enter a name 🎯");
        return;
    }

    window.open(`wish.html?name=${encodeURIComponent(name)}&gender=${gender}`, "_blank");
}

if (location.pathname.includes("wish.html")) {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name");
    const gender = params.get("gender");

    const msg = gender === "boy"
        ? `Dear ${name}, you’re an amazing Birthday Boy 🎉`
        : `Dear ${name}, you’re a wonderful Birthday Girl 🎀`;

    document.getElementById("message").innerText = msg;
}

function downloadWish() {
    html2canvas(document.getElementById("wishCard")).then(canvas => {
        const link = document.createElement("a");
        link.download = "Happy_Birthday.png";
        link.href = canvas.toDataURL();
        link.click();
    });
            }
