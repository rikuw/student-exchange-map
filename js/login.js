$(document).ready(function () {
	//your code here
	$('.small.modal')
	.modal({
		autofocus: true,
		blurring: true,
		closable: false,
	}).modal('show');

	$("#username").keyup(function(event){
		if(event.keyCode == 13){
			$("#log").click();
		}
	});

	$("#password").keyup(function(event){
		if(event.keyCode == 13){
			$("#log").click();
		}
	});

	$("#log").click(function() {
		var username = $("#username").val();
		var password = $("#password").val();

		if(username == '' || password == '')
		{

		}
		else
		{
		$.ajax({
				method: "POST",
				url: "api/login.php",
				data: {name: username, pwd: password},
				success: function(response){
					var responseJSON = JSON.parse(response);
					if(responseJSON.success)
					{
						window.location="admin.php";
					}
					else
					{
						$("#alert").fadeIn(1000, function(){      
						    $("#alert").html('<div class="alert alert-danger">Tarkista kirjautumistiedot!</div>');
     				    });
					}
				}
			})
		}
	});
});



		/*var username = $("#username").val();
		var password = $("#password").val();

		if (username == '' || password == ''){
			alert("Täytä kaikki kentät!");
		} else {

		}*/