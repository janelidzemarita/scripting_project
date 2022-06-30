<?php  
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,
	Access-Control-Allow-Headers, Authorization, X-Requested-With");


$data = json_decode(file_get_contents("php://input"));

$first_name = $data -> first_name;
$last_name  = $data -> last_name;
$username   = $data -> username;
$email      = $data -> email;
$password   = $data -> password;



$con = mysqli_connect('localhost', 'root', '','tourism_platform', 3306);


$sql = "INSERT INTO 'user' ('id', 'first_name', 'last_name', 'username', 'password', 'email') 
                    VALUES ('0', '$first_name','$last_name', '$username','$password','$email')";

$result = mysqli_query($con,$sql);

if($result)
{
	// header('location: /Registration/Register.html');
	$response['data'] = array('status'=>'valid');
	echo json_encode($response);
}
else {
	$response['data'] = array('status'=>'Error');
	echo json_encode($response);

}

?>
