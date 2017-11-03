// GET方法
function ajaxGet(url, fnSucc, fnFailed)
{
	// 1.创建Ajax对象
	var oAjax;
	if (window.XMLHttpRequest)
	{
		oAjax = new XMLHttpRequest();
	} else {
		oAjax = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	// 2. 链接服务器
	oAjax.open("GET", url, true);

	// 3.发送请求
	oAjax.send();

	// 4.接收返回
	oAjax.onreadystatechange = function()
	{
		if (oAjax.readyState == 4)  //读取完成
		{
			if (oAjax.status == 200) //读取成功
			{
				fnSucc(oAjax.responseText);
			} else {
				if (fnFailed)
				{
					fnFailed(oAjax.status);
				}
			}
		}
	};
}

// POST方法
function ajaxPost(url, fnSucc)
{
	// 1.创建Ajax对象
	var oAjax;
	if (window.XMLHttpRequest)
	{
		oAjax = new XMLHttpRequest();
	} else {
		oAjax = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	// 2. 链接服务器
	oAjax.open("POST", url, true);

	oAjax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

	// 3.发送请求
	oAjax.send(data);

	// 4.接收返回
	oAjax.onreadystatechange = function()
	{
		if (oAjax.readyState == 4)  //读取完成
		{
			if (oAjax.status == 200)
			{
				fnSucc(oAjax.responseText);				
			} else {
				if (fnFailed)
				{
					alert("Failed: " + oAjax.status);
				}
			}
		}
	};
}