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
    <form action="login.php" method="POST">
        <label for="login">login</label>
        <input type="text" id="login" name="login" value="">
        <label for="password">password</label>
        <input type="password" id="password">
        <label for="password-confirm">confirm password</label>
        <input type="password" id="password-confirm">
        <button type="submit">submit</button>
    </form>
</body>
</html>