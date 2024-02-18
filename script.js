function getFormvalue() {
    //Write your code here
	let inps = document.querySelectorAll("input");
	let firstName = inps[0].value;
	let lastName = inps[1].value;
	let res = firstName + " " + lastName
	alert(res);
}
