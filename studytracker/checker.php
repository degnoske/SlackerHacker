
<?php
$mysqli = new mysqli("mysql.eecs.ku.edu", "psundara", "sripassword", "psundara");
if ($mysqli->connect_errno) 
{
    die("Connection failed: " . $mysqli->connect_error);

}
$siteName = $_POST['dataToSendToServer1'];
$isFound = 0;

$result = $mysqli->query("SELECT url FROM usertest WHERE url = $sitename");
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

