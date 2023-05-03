if(window.sessionStorage.getItem("user") != null) window.location.href = "./account.html";

//

var signInForm = $("#Sign-In-Form");
var signInList = $("#Sign-In-Form *");

$(signInForm).submit(function (e) {
	
	for(var i = 0; i < signInList.length - 1; i++) {
		
		if($(signInList[i]).val().indexOf(" ") != -1) {
			
			alert("띄어쓰기는 사용할 수 없습니다.");
			return false;
			
		}
		
	}
	var user = "";
	var id = $(signInList[0]).val();
	var pw = $(signInList[1]).val();
	var success = false;
	for(var i in window.localStorage) {
		
		if(window.localStorage.getItem(i) == null) {
		
			alert("아이디가 잘못 되었거나, 비밀번호가 잘못 되었습니다.");
			return false;
		
		}
		var localId = window.localStorage.getItem(i).split(" ")[0];
		var localPw = window.localStorage.getItem(i).split(" ")[1];
		if(id == localId && pw == localPw) {
			
			user = i;
			success = true;
			break;
				
		} 
			
	}
	if(!success) {
		
		alert("아이디가 잘못 되었거나, 비밀번호가 잘못 되었습니다.");
		return false;
		
	}
	else {
		
		alert("로그인 성공!");
		window.sessionStorage.setItem("user", user);
		window.location.href = "./account.html";
		return false;
		
	}
	
});

//

var signUpForm = $("#Sign-Up-Form");
var signUpList = $("#Sign-Up-Form *");

$(signUpForm).submit(function (e) {
	
	for(var i = 0; i < signUpList.length - 1; i++) {
		
		if($(signUpList[i]).val().indexOf(" ") != -1) {
			
			alert("띄어쓰기는 사용할 수 없습니다.");
			return false;
			
		}
		
	}
	if($(signUpList[1]).val() == $(signUpList[2]).val()) {
		
		for(var i in window.localStorage) {
			
			if(window.localStorage.getItem("User" + i) == null) break;
			if(window.localStorage.getItem("User" + i).split(" ")[0] == $(signUpList[0]).val()) {
				
				alert("이미 존재하는 아이디 입니다.");
				return false;
				
			}
			
		}
		window.localStorage.setItem("User" + window.localStorage.length, $(signUpList[0]).val() + " " + $(signUpList[1]).val() + " " + $(signUpList[3]).val());
		alert("회원 가입을 성공 했습니다.");
		
	} else {

		alert("비밀번호 확인이 맞지 않습니다.");
		return false;
		
	}

});