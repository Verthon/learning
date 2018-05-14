<?php
    include_once 'includes/connect.php';
?>
<?php 

if(isset($_POST['submit'])){
  include_once 'database.sql';

  $login = mysqli_real_escape_string($conn, $_POST['name']);
  $password = mysqli_real_escape_string($conn, $_POST['password']);
  $email = mysqli_real_escape_string($conn, $_POST['email']);

  //error handlers
  //check for empty fields 
  if(empty($email) || empty($login) ||empty($password)){
    header("Location: ../signup.php")
  }
}else{
  header("Location: ../index.php");
  exit();
}