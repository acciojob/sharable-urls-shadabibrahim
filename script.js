// your code here

let name = document.querySelector("#name").value;
let year = document.querySelector("#year").value;
let ans = document.querySelector("span");

let message = `?name=${name}&year=${year}`;
let submit = document.querySelector("#button");
submit.addEventListener('click',function(e){
	e.preventDefault();
	ans.innerText = message
})
