function cmnt(btn) {
    let comment = window.prompt("Add a Comment:");
    if (comment == null || comment == "") {
        return;
    } else {
        document.getElementById("cmnt-content").innerHTML = comment;
        document.getElementById("new-cmnt").style.display = "block";
        btn.style.display = "none";
    }
}