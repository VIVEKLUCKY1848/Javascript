// Check if a variable or object is defined or initialized start
if (typeof variable !== 'undefined') {
	// the variable is defined
}

if (typeof variable === 'undefined') {
    // variable is undefined or null
}

if (typeof variable === 'undefined' || variable === null) {
    // variable is undefined or null
}

if (typeof variable !== 'undefined' && variable !== null) {
    // variable is undefined or null
}

//~ Only for browsers
if ("var" in window) {
   // global variable var is defined
} else {
   // global variable var is not defined
}

if (typeof variable !== 'undefined' && variable !== null && "variable" in window) {
    // variable is undefined or null
}
// Check if a variable or object is defined or initialized finished

// jQuery Find particular class based children and loop through those start
var $lsnjQ = jQuery.noConflict();
$lsnjQ(document).ready(function() {
	//$lsnjQ('.read-more').colorbox({inline:true, width:"50%"});
	$lsnjQ('#parent_id').children().find('childele.class or childele#id').each(function() {
		//Do anything you want with $lsnjQ(this)
		$lsnjQ(this).colorbox({inline:true, width:"50%"});
	});
});
// jQuery Find particular class based children and loop through those finish
