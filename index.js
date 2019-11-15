$(document).ready(function() {

	// Toggle password 'Signup Screen'
	$('.eye').click(function() {
		$('.eye-toggle').html('visibility');
		var password = $('#password');
		var confirmpassword = $('#confirmPassword');
		if (password.attr('type') === 'password' && confirmpassword.attr('type') === 'password') {
			password.attr('type','text');
			confirmpassword.attr('type','text');
		} else if(password.attr('type') === 'text' && confirmpassword.attr('type') === 'text'){
			password.attr('type','password');
			confirmpassword.attr('type','password');
			$('.eye-toggle').html('visibility_off');
		}
	});	

	// Toggle password 'Login screen'
	$('.eye-login').click(function() {
		$('.eye-toggle-login').html('visibility');
		var password = $('#loginPassword');
		if (password.attr('type') === 'password') {
			password.attr('type','text');
		} else if(password.attr('type') === 'text'){
			password.attr('type','password');
			$('.eye-toggle-login').html('visibility_off');
		}
	});

	// Toggle password 'Reset password screen'
	$('.eye-reset').click(function() {
		$('.eye-toggle-reset').html('visibility');
		var password = $('#newPassword');
		var confirmpassword = $('#confirmPassword');
		if (password.attr('type') === 'password') {
			password.attr('type','text');
			confirmpassword.attr('type','text');
		} else if(password.attr('type') === 'text'){
			password.attr('type','password');
			confirmpassword.attr('type','password');
			$('.eye-toggle-reset').html('visibility_off');
		}
	});
});
