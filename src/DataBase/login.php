<!-- REAL -->
<?php 
require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if( isset($data->username) && isset($data->password)){
		
	$username     = mysqli_real_escape_string($db_conn, trim($data -> username));
	$password     = mysqli_real_escape_string($db_conn, trim($data -> password));

	$select_users = mysqli_query($db_conn,"select * from user where username = '$username' and password = '$password'") or die('query failed');
	
    // if($select_users){
	// 	$last_id = mysqli_insert_id($db_conn);
	// 	echo json_encode(["success"=>true,"insertid"=>$last_id]);
	// 	return;
    // }else{
    //     echo json_encode(["success"=>false,"msg"=>"Server Problem. Please Try Again"]);
	// 	return;
    // }
    
    
    if(mysqli_num_rows($select_users) > 0){

        $row = mysqli_fetch_assoc($select_users);
  
        // $_SESSION['admin_name'] = $row['name'];
        // $_SESSION['admin_email'] = $row['email'];
        // $_SESSION['admin_id'] = $row['id'];
        // header('location:admin_page.php');
        $message[] = 'Hello my friend, you are logged to system';
        echo 'Hello my friend, you are logged into system';
  
  
     }else{
        $message[] = 'incorrect email or password!';
     }




} else{
    echo json_encode(["success" => false, "msg" => "Please fill all the required fields!"]);
	return;
}
?>

<?php
if(isset($message)){
   foreach($message as $message){
      echo '
      <div class="message">
         <span>'.$message.'</span>
         <i class="fas fa-times" onclick="this.parentElement.remove();"></i>
      </div>
      ';
   }
}
?>
