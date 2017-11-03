<?php
  
  header("Content-Type: text/html; charset=utf-8");
  header("Cache-Control: no-cache");
  
  //用户名
  $username = $_POST['username'];
  
  $info = "";
  if ($username == "chaochao") {
	  $info .= "{'res':'该用户名不可用'}";
  } elseif($username == "") {
	  $info .= "{'res':'请输入用户名'}";
  } else {
	  $info .= "{'res':'<span class=\"glyphicon glyphicon-ok\" style=\"display\: block;\"></span>'}";
  } 
  echo $info;

?>