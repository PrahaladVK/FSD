<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "fullstackdev";

// connect database
$conn = new mysqli($servername, $username, $password, $dbname);

// check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$email = $_POST['email'];
$password = $_POST['password'];

// check user
$sql = "SELECT * FROM users_table 
        WHERE Email='$email' AND Password='$password'";

$result = $conn->query($sql);

if ($result->num_rows > 0) {

    echo "<h2>Login Successful</h2>";

    echo "<a href='sample.php'>View Users Table</a>";

} else {

    echo "Invalid Email or Password";

}

$conn->close();

?>