<?php

$host="localhost";
$user="assafgo_assaf101";
$pass="lB}#fJ#N-Rp~";
$db="assafgo_recipes_DB";

//create connection
$conn=new mysqli($host,$user,$pass,$db);
if ($conn->connect_error){
        die("Connection failed: ".$conn->connect_error);
}
echo "Connection successful<br>";

// Get form data
$fname = $_POST["fname"];
$lname = $_POST["lname"];
$email = $_POST["email"];
$recipeName = $_POST["recipe-name"];
$description = $_POST["description"];
$instructions = $_POST["instructions"];
$prepTime = $_POST["prep-time"];
$cookTime = $_POST["cook-time"];
$totalTime = $_POST["total-time"];
$tips = $_POST["tips"];
$ingredients = $_POST["ingredients"]; // array

// Concatenate ingredients into a comma-separated string
$ingredientsStr = "";
foreach ($_POST["ingredients"] as $ingredient) {
    $ingredientsStr .= $ingredient . ", ";
}
$ingredientsStr = rtrim($ingredientsStr, ", ");

// Save the recipe to the recipes table
$sql = "INSERT INTO recipes (fname, lname, email, recipe_name, description, instructions, prep_time, cook_time, total_time, tips, ingredients) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssssssiiiss", $fname, $lname, $email, $recipeName, $description, $instructions, $prepTime, $cookTime, $totalTime, $tips, $ingredientsStr);

if ($stmt->execute()) {
    //if succeed - head back to homepage
    echo "<script>
            alert('Recipe added successfully!');
            window.location.href = 'profile.html';
          </script>";
} else {
    echo "Error: " . $stmt->error;
    exit();
}

?>