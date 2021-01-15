$(document).foundation();

function showStackTrace(){
	$('#stack-trace').toggle();
	if($('#stack-trace-toggle').text().includes('Show')){
		$('#stack-trace-toggle').text('❐ Hide stack trace');
	} else {
		$('#stack-trace-toggle').text('❐ Show stack trace');
	}
}