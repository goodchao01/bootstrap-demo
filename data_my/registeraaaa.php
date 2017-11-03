<?php
  
  header("Content-Type: text/xml; charset=utf-8");
  header("Cache-Control: no-cache");
  
  $nameId = $_POST['nameId'];
  
  $info = "";
  if ($nameId == "chaochao") {
	  $info .= "<res><mes>对不起，用户名不可用!</mes></res>";
  } elseif($nameId == "") {
	  $info .= "<res><mes>用户名不能为空!</mes></res>";
  } else {
	  $info .= "<res><mes>恭喜，用户名可用!</mes></res>";
  }
  
  echo $info;

?>

























