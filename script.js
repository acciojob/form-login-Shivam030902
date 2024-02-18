function getFormvalue() {
    //Write your code here
	let inps = document.querySelectorAll("input");
	let firstName = inps[0];
	let lastName = inps[1];
	let res = firstName + " " + lastName
	alert(res);
}
