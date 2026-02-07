function generateWish() {
    const name = document.getElementById("name").value.trim();
    const gender = document.getElementById("gender").value;

    if (!name) {
        alert("Enter a name");
        return;
    }

    window.open(`wish.html?name=${encodeURIComponent(name)}&gender=${gender}`, "_blank");
}

if (location.pathname.includes("wish.html")) {
    const params = new URLSearchParams(location.search);
    const name = params.get("name");
    const gender = params.get("gender");

    document.getElementById("nameText").innerText = name;

    document.getElementById("lineText").innerText =
        gender === "boy"
            ? "Wishing you success, happiness & endless smiles 🎉"
            : "May your day be as beautiful as your smile ✨";
}

function downloadWish() {
    html2canvas(document.getElementById("wishCard")).then(canvas => {
        const link = document.createElement("a");
        link.download = "Birthday_Poster.png";
        link.href = canvas.toDataURL();
        link.click();
    });
}
