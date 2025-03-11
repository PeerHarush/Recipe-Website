function approveFollow(button) {
    const msgElement = button.parentElement.querySelector('.follow-msg');
    const followersCountElement = document.getElementById('followers');

    // עדכון מספר העוקבים
    let followersCount = parseInt(followersCountElement.innerText);
    followersCountElement.innerText = followersCount + 1;

    // הצגת הודעה מתאימה
    msgElement.innerText = "Follow request approved";
    msgElement.classList.add("text-success");

    // הסתרת הכפתורים
    hideButtons(button);
    document.getElementById('Yael').style.display = 'none';
}

function cancelFollow(button) {
    const msgElement = button.parentElement.querySelector('.follow-msg');

    // הצגת הודעה מתאימה
    msgElement.innerText = "Follow request declined";
    msgElement.classList.add("text-danger");
    // הסתרת הכפתורים
    hideButtons(button);
    document.getElementById('Yael').style.display = 'none';
}

function hideButtons(button) {
    // הסתרת שני הכפתורים (אישור וביטול)
    const parentDiv = button.parentElement;
    const buttons = parentDiv.querySelectorAll('button');
    buttons.forEach(btn => btn.style.display = 'none');
}


// Show last recipe
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("latest-recipe").style.display = "none";
    let recipe = localStorage.getItem("lastRecipe");
    if (recipe) {
        document.getElementById("latest-recipe").style.display = "block";
        document.getElementById("latest-recipe-name").innerHTML = recipe;
    }
});