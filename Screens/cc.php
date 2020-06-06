<?php
include 'db.php';

$json = file_get_contents('php://input');
$obj =  json_decode($json,true);

$gt= mysqli_query($conn,"SELECT * FROM covid WHERE id ='1");
        $container  = [];
      $container[] = $row;
      $container =  json_encode($container);

      echo $container;

