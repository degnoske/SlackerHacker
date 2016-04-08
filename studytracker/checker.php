<?php
//Author: Sri Gayatri
header("Access-Control-Allow-Origin: chrome-extension://bkbihbecgjnokgfooaegbjapefiekepp");
$data1 = $_POST['dataToSendToServer1'];
$data2 = $_POST['dataToSendToServer2'];

$mysqli = new mysqli("mysql.eecs.ku.edu", "psundara", "sripassword", "psundara");
if ($mysqli->connect_errno) 
{
    die("Connection failed: " . $mysqli->connect_error);

}
$isFound = 0;

$result = $mysqli->query("SELECT url FROM usertest WHERE url = '$data1'");

if($result && mysqli_num_rows($result)>0)
{
	$isFound = 1;
}
else
{
	$isFound = 0;
}	

echo $isFound;
$mysqli->close();
?>

