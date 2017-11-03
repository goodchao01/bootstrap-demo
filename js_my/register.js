// 快捷加载函数
function addLoadEvent(func) {
	var oldonload=window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	}else{
		window.onload = function() {
			oldonload();
			func();
		};
	}
}

//验证用户名
var data;
function checkName()
{
	var username = document.getElementById("username");
	var nameFailed = document.getElementById("usernameFailed");
	var url = "../data_my/register.php";
	data = "username=" + username.value;
	ajaxPost(url, function(str){
		var message = str;
		var message_obj = eval("("+message+")");
		nameFailed.innerHTML = message_obj.res;
	}); 
}
  //清除用户名警告
function clearNameWarn()
{
	var username = document.getElementById("username");
	var nameFailed = document.getElementById("usernameFailed");
	nameFailed.innerHTML = "";
}



/*密码部分*/
var password = document.getElementById("password");
var passwordAgain = document.getElementById("passwordAgain");
var passwordOk = document.getElementById("passwordOk");
var passwordFailed = document.getElementById("passwordFailed");
var passagainOk = document.getElementById("passAgainOk");
var passAgainFailed = document.getElementById("passAgainFailed");
//验证密码
function checkPassword()
{
	if (password.value !== "")
	{
		passwordOk.style.display = "block";
	}
}
//验证再次密码
function checkPasswordAgain()
{	
	if (password.value != passwordAgain.value && passwordAgain.value !== "")
	{
		passAgainFailed.innerHTML="两次密码不一致";
	} else if (passwordAgain.value === "" && password.value !== "")
	{
		passAgainFailed.innerHTML="密码不能为空";
	} else if (passwordAgain.value !== "") {
		passAgainOk.style.display = "block";
	}
}
//清除密码警告
function clearPassWarn()
{
	passwordOk.style.display = "none";
	passAgainFailed.innerHTML="";
	passAgainOk.style.display = "none";
	passwordAgain.value = "";
}
function clearPassAgainWarn()
{
	passAgainOk.style.display = "none";
	passAgainFailed.innerHTML="";
}

