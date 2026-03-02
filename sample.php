<?php
$servername = "localhost";
$username = "root";
$password = "";   // default in XAMPP
$dbname = "fullstackdev";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL query
$sql = "SELECT ID, Name, Phone, Email, Password FROM users_table";
$result = $conn->query($sql);

echo "<h2>Users Table</h2>";

if ($result->num_rows > 0) {
    echo "<table border='1' cellpadding='8'>";
    echo "<tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Password</th>
          </tr>";

    while($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>".$row["ID"]."</td>
                <td>".$row["Name"]."</td>
                <td>".$row["Phone"]."</td>
                <td>".$row["Email"]."</td>
                <td>".$row["Password"]."</td>
              </tr>";
    }

    echo "</table>";
} else {
    echo "No records found";
}

$conn->close();
?>
