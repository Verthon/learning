<?php
    include_once 'includes/connect.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Simple login form</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <div class="login-form-wrapper">
    <form action="includes/signup.php" method="POST" class="login-form">
        <label for="login" class="input-label">login</label>
        <input type="text" id="login" name="login" value="" class="input" required>
        <label for="email" class="input-label">email</label>
        <input type="email" name="email" id="email" class="input">
        <label for="password" class="input-label">password</label>
        <input type="password" id="password" name="password" class="input" required>
        <button type="submit" class="btn">submit</button>
    </form>
  </div>  
</body>
</html>