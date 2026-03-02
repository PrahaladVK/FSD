<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "fullstackdev";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['username'];
$phone = $_POST['phone'];
$pass = $_POST['password'];
$email = $_POST['email'];

$sql = "INSERT INTO users_table (Name, Phone, Email, Password)
VALUES ('$name', '$phone', '$email', '$pass')";

if ($conn->query($sql) === TRUE) {

    echo "<h2>Registration Successful</h2>";
    echo "<a href='login.html'>Go to Login</a>";

} else {

    echo "Error: " . $conn->error;

}

$conn->close();

?>
