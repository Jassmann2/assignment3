document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submit-button').addEventListener('click', function() {
        // Replace contents of contact-page with a <p> element
        var contactPage = document.getElementById('contact-page');
        contactPage.innerHTML = '<p style="font-size: 24px;">Thank you for your message</p>';
    });
});
