<HTML>
  <HEAD>
    <TITLE>View sites</TITLE>
  </HEAD>
  <BODY>
<?php
$mysqli = new mysqli("mysql.eecs.ku.edu", "psundara", "sripassword", "psundara");
if ($mysqli->connect_errno) 
{
    die("Connection failed: " . $mysqli->connect_error);

}
$bsite = $_POST['block'];
$number_to_block = count($bsite);

if($number_to_block > 0) 
{
	$query1 = "DELETE FROM usertest";
	if($mysqli->query($query1))
	{
		echo "Existing data cleared.";
	}
	else 
	{
		echo "Error: " . $query . "<br>" . $mysqli->error;
	}
	
	foreach($bsite as $url) 
	{
		$query = "INSERT INTO usertest(url) VALUES ('" . $url . "')";
		if($mysqli->query($query))
		{
			echo $url . " saved to database ";
		}
		else 
		{
			echo "Error: " . $query . "<br>" . $mysqli->error;
		}
	}
}
else 
{
	echo "No website selected";
}
echo "<br><a href='index.html'>Back to testing home page</a>";
?>
</body>
</html>
