<!-- REAL -->
<?php 
require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if( isset($data->first_name) && isset($data->last_name) 
	&& isset($data->phoneNumber) && isset($data->email) 
		&& isset($data->username) && isset($data->password)){
		
	$username     = mysqli_real_escape_string($db_conn, trim($data -> username));
	$password     = mysqli_real_escape_string($db_conn, trim($data -> password));
	$first_name   = mysqli_real_escape_string($db_conn, trim($data -> first_name));
	$last_name    = mysqli_real_escape_string($db_conn, trim($data -> last_name));
	$phoneNumber  = mysqli_real_escape_string($db_conn, trim($data -> phoneNumber));
	$email        = mysqli_real_escape_string($db_conn, trim($data -> email));


	$add = mysqli_query($db_conn,"insert into user (first_name, last_name, phoneNumber, username, password, email) 
			    VALUES ('$first_name','$last_name', '$phoneNumber', '$username', '$password', '$email')");
	
    if($add){
		$last_id = mysqli_insert_id($db_conn);
		echo json_encode(["success"=>true,"insertid"=>$last_id]);
		return;
    }else{
        echo json_encode(["success"=>false,"msg"=>"Server Problem. Please Try Again"]);
		return;
    } 

} else{
    echo json_encode(["success"=>false,"msg"=>"Please fill all the required fields!"]);
	return;
}
?>

