var objPeople = [
	{ 
		username: "ditu",
		password: "david"
	},
	{ 
		username: "mihai",
		password: "dinu"
	},
	{ 
		username: "mihail",
		password: "oproiu"
	}

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		
		if(username == objPeople[i].username && password == objPeople[i].password) {
			alert(username + " is logged in!!!");
           
            window.open("index.html");
			return;
		}
	}
	alert("incorrect username or password");
}

