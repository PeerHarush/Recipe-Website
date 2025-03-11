// Function to hide all sections
function hideSections() {
    $("section").hide();
}

// Function to show all sections
function chooseAll() {
    $("section").show();
}

// Function to show only the Beef section
function chooseBeef() {
    hideSections();
    $("#beef-sect").show();
}

// Function to show only the Chicken section
function chooseChicken() {
    hideSections();
    $("#chicken-sect").show();
}

// Function to show only the Asian section
function chooseAsian() {
    hideSections();
    $("#asian-sect").show();
}

// Function to show only the Holiday section
function chooseHoliday() {
    hideSections();
    $("#holiday-sect").show();
}
