function sendMail(contactForm) {
    emailjs.send("gmail", "happyjourney", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "textareadesc": contactForm.textareadesc.value
})
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }  
    );
    return false;  // To block from loading a new page
}