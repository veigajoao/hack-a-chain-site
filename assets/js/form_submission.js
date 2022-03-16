$("#quote-form").on("submit", function(event) {
    message = $("#quote-form").serialize();
    $.ajax({
        url: "https://formspree.io/f/xqknbdrq", 
        method: "POST",
        data: message,
        dataType: "json"
    });
    window.alert("We've received your message, we'll be in touch soon!");
    event.preventDefault();
});