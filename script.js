// your code here

let name = document.querySelector("#name");
let year = document.querySelector("#year");
let ans = document.querySelector("span");
 
let submit = document.querySelector("#button");
submit.addEventListener('click',function(e){
	e.preventDefault();
	ans.innerText = `?name=${name.value}&year=${year.value}`;
})
