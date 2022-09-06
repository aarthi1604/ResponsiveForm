<?php
 require("firstphp.php");
 if(isset($_POST['submit']))
    {
        $fname = $_POST['first_name'];
        $lname = $_POST['last_name'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $cname = $_POST['college_name'];
        $gender = $_POST['gender'];
        $branch=$_POST['branch'];
        $result = mysqli_query($mysqli, "insert into stud_registration(first_name,last_name,college_name,password,gender,branch,email) values ('".$fname."', '".$lname."', '".$cname."', '".$password."', '".$gender."','".$branch."', '".$email."');");
    echo "success";
    }
?>