var passwordArray = [115, 101, 99, 114, 101, 116];
var password = String.fromCharCode.apply(null, passwordArray);

$('#tabs a[href="#members"]').click(function (e) {
    // var enteredPassword = prompt("Please enter password:");
    // if (enteredPassword !== password) {
    //     alert("Incorrect password. Access denied.");
    //     return false; // Stop the event propagation
    // } else {
        // Password is correct, so show the members-only section
        $('#members-only').show();
//     }
});
