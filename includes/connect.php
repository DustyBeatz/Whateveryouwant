<?php 

$user = 'root';
$password = 'root';
$host = 'localhost';
$db = 'db_ajax';

$conn = mysqli_connect($host, $user, $password, $db);

if(!$conn) {
    echo "connection didn't work...";
    exit;
}

//echo "connected!";

//Get all the car data
// $myQuery = " SELECT * FROM mainmodel";
// // make the query, get the result
// $result = mysqil_query ($conn, $myQuery);

// $rows = array();

// while($row = mysqil_fetch_assoc($result)) {
//     $rows [] = $row;
// }

if(isset($_GET["carModel"])) {
    $car = $_GET["carModel"];

    $myQuery = " SELECT * FROM mainmodel WHERE model = '$car'";

    $result = mysqli_query($conn, $myQuery);
    $rows = array();

    while($row = mysqil_fetch_assoc($result)) {
        $rows[] = $row;
    }
}

//send the entire result set as a json encoded array
echo json_encode($row);

?>