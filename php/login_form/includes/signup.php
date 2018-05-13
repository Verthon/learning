<?php
    include_once 'includes/connect.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form action="includes/login.php" method="POST">
        <label for="login">login</label>
        <input type="text" id="login" name="login" value="" required>
        <label for="password">password</label>
        <input type="email" id="email" name="email" required>
        <input type="password" id="password" name="password" required>
        <button type="submit">submit</button>
    </form>
</body>
</html>