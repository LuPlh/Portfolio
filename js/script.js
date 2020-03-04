$(document).ready(function(){

let navToggle=$(".nav-toggle");
let navLink=$(".nav__link");

$(navToggle).on("click",function(){
	$("body").toggleClass("nav-open"); 
})

$(navLink).each(function(){
	$(this).on("click",function(){
		$("body").removeClass("nav-open");
	})
})
})