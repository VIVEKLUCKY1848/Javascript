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
