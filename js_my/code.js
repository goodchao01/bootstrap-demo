//加载函数
function addLoadEvent(func){
    var onload=window.onload;
  if(typeof window.onload!="function"){
    window.onload=func;
  }else{
    window.onload=function(){
      oldonload();
      func();
    };
  }
}

var code ; //在全局 定义验证码      
function createCode(){       
  code = "";      
  var codeLength = 4;//验证码的长度      
  var checkCode = document.getElementById("checkCode");      
  checkCode.value = "";      
  var selectChar = new Array(1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','j','k','l','m','n','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z');      
        
  for(var i=0;i<codeLength;i++) {      
     var charIndex = Math.floor(Math.random()*60);      
    code +=selectChar[charIndex];      
  }      
  if(code.length != codeLength){      
    createCode();      
  }      
  checkCode.value = code;      
}   

function validate () {    
  var inputCode = document.getElementById("codeInput").value.toUpperCase();     
  var codeToUp=code.toUpperCase();
  var iconOk = document.getElementById("iconOk"); 
  var iconWrong = document.getElementById("iconWrong");

  // if(inputCode.length <=0) {      
  //   alert("请输入验证码！");      
  //   return false;      
  // }      
  if(inputCode != codeToUp && inputCode.length !== 0){      
     iconWrong.innerHTML = "请输入正确的验证码";
     iconOk.style.display = "none";
     // checkCode.setAttribute("disabled","disabled");      
     createCode();      
     return false;      
  }      
  else if(inputCode == codeToUp) {      
    iconOk.style.display = "inline";
    iconWrong.innerHTML = "";

    return true;      
  }        
} 

function validateClearText() {     
  var iconOk = document.getElementById("iconOk"); 
  var iconWrong = document.getElementById("iconWrong");                    
  iconOk.style.display = "none"; 
  iconWrong.innerHTML="";          
} 


addLoadEvent(createCode);