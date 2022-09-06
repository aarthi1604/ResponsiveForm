
<?php
 require("firstphp.php");
 $userid=$_POST['userid'];
 $password=$_POST['password'];
 $record = mysqli_query($mysqli,"select * from stud_registration where email='".$userid."' and password='".$password."'");
 if(mysqli_num_rows($record)==1){
  $data = mysqli_fetch_array($record);
   $_SESSION['user_name']=$data['first_name'].' '.$data['last_name'];
   $_SESSION['password']=$password;
  header("location: welcome.php");
 }
 else{
echo "Your Login Name or Password is invalid";
 }
?>