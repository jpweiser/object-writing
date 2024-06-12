for (i = 1; i<5; i++) {
  // Print i to the Output window.
  Debug.write("loop index is " + i);
  // Wait for user to resume.
  debugger;
}

localStorage.setItem("login", login);
sessionStorage.setItem("sessionId", sessionId);

if(unexpectedCondition) {
  alert("Unexpected Condition");
}

const val = Math.random(); // Sensitive
// Check if val is used in a security context.
