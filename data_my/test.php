<?php
   
   //很重要的两句话，第一句话告诉浏览器返回的数据是XML格式
   header("Content-Type: text/xml; charset=utf-8");
   //告诉浏览器不要缓存数据
   header("Cache-Control: no-cache");

  //接收数据
  $nameId = $_GET['nameId'];
  if ($nameId == "chaochao") {
	  echo "用户名不可用";
  } else {
	  echo "用户名可用";
  }

?>
