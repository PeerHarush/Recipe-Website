document.getElementById('addIngredient').addEventListener('click', function () {
    let ingredientsList = document.getElementById('ingredientsList');
    let newIngredient = document.createElement('div');
    newIngredient.classList.add('input-group', 'mb-2');
    newIngredient.innerHTML = `
      <input type="text" class="form-control ingredient" name="ingredients[]" placeholder="Ingredient">
      <button type="button" class="btn btn-danger remove-ingredient">X</button>
  `;
    ingredientsList.appendChild(newIngredient);
});

document.getElementById('ingredientsList').addEventListener('click', function (e) {
    if (e.target.classList.contains('remove-ingredient')) {
        e.target.parentElement.remove();
    }
});

document.getElementById('publishRecipe').addEventListener('click', function (event) {
    const descriptionInput = document.getElementById('description');
    const errorParagraph = document.getElementById('error1');
    const descriptionValue = descriptionInput.value.trim();
    const ingredientsList = document.getElementById('ingredientsList');
    const ingredientInputs = ingredientsList.querySelectorAll('.ingredient');
    const errorIngredientParagraph = document.getElementById('error2');

    const minLength = 10;
    const maxLength = 200;
    const validPattern = /^[A-Za-z0-9\s]+$/;

    let errorMessage = '';
    let ingredientErrorMessage = '';

    if (descriptionValue.length < minLength || descriptionValue.length > maxLength) {
        errorMessage = `Description must be between ${minLength} and ${maxLength} characters.`;
    } else if (!validPattern.test(descriptionValue)) {
        errorMessage = 'Description can only contain letters, numbers, and spaces.';
    }

    if (errorMessage) {
        event.preventDefault();
        errorParagraph.innerHTML = errorMessage;
        errorParagraph.style.color = 'red';
        descriptionInput.classList.add('is-invalid');
    } else {
        errorParagraph.innerHTML = '';
        descriptionInput.classList.remove('is-invalid');
        descriptionInput.classList.add('is-valid');
    }

    // בדיקת וולידציה עבור מרכיבים
    let validIngredients = true;
    if (ingredientInputs.length < 3) {
        validIngredients = false;
        ingredientErrorMessage = 'You must have at least 3 ingredients.';
    } else {
        ingredientInputs.forEach(input => {
            if (!input.value.trim()) {
                validIngredients = false;
                ingredientErrorMessage = 'Ingredients cannot be empty.';
            }
        });
    }

    if (!validIngredients) {
        event.preventDefault();
        errorIngredientParagraph.innerHTML = ingredientErrorMessage;
        errorIngredientParagraph.style.color = 'red';
    } else {
        errorIngredientParagraph.innerHTML = '';
    }

    // אם יש שגיאות, מונעים את שליחת הטופס
    if (errorMessage || !validIngredients) {
        event.preventDefault();
    }
});


document.getElementById('publishRecipe').addEventListener('click', function (event) {
    const descriptionInput = document.getElementById('description');
    const errorParagraph = document.getElementById('error1');
    const descriptionValue = descriptionInput.value.trim();

    // הגדרת תנאים לוולידציה
    const minLength = 10;
    const maxLength = 200;
    const validPattern = /^[A-Za-z0-9\s]+$/; // רק אותיות, מספרים ורווחים מותרים

    let errorMessage = '';

    // בדיקת אורך
    if (descriptionValue.length < minLength || descriptionValue.length > maxLength) {
        errorMessage = `Description must be between ${minLength} and ${maxLength} characters.`;
    }
    // בדיקת תווים תקינים
    else if (!validPattern.test(descriptionValue)) {
        errorMessage = 'Description can only contain letters, numbers, and spaces.';
    }

    // הצגת הודעת שגיאה ב-p#error1 אם יש בעיה
    if (errorMessage) {
        event.preventDefault(); // מונע שליחת הטופס במידה והשדה לא תקין
        errorParagraph.innerHTML = errorMessage; // הצגת הודעת השגיאה ב-p
        errorParagraph.style.color = 'red'; // הגדרת צבע טקסט לאדום (אופציונלי)
        descriptionInput.classList.add('is-invalid');
    } else {
        errorParagraph.innerHTML = ''; // מנקה את ההודעה במקרה של ערך תקין
        descriptionInput.classList.remove('is-invalid');
        descriptionInput.classList.add('is-valid');
    }
});

// save the recipe name in localStorage
document.getElementById('publishRecipe').addEventListener('click', function () {
    let recipe = document.getElementById("RecipeName").value;
    localStorage.setItem("lastRecipe", recipe);
});