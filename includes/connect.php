<?php 

$user = 'root';
$password = 'root';
$host = 'localhost:8888';
$db = 'db_ajax';

$conn = mysqli_connect($host, $user, $password, $db);

if(!$conn) {
    echo "connection didn't work...";
    exit;
}

 

if(isset($_GET["carModel"])) { //Check for paramters 
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