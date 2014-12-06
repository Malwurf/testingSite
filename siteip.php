<?php
$address = $_GET['address'];
$ip = gethostbyname($address);
echo $ip;
?>