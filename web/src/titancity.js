const copyLinkBtn = document.getElementById("copy-play-link-btn");

copyLinkBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(
        "https://www.roblox.com/games/14912261925/Stellar-Dwellers"
    );
});
