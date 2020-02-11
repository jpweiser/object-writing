var db = window.openDatabase("myDb", "1.0", "Personal secrets stored here", 2*1024*1024); 

const val = Math.random(); // Sensitive
// Check if val is used in a security context.
