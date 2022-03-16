$("#quote-form").on("submit", function(event) {
    message = $("#quote-form").serialize();
    $.ajax({
        url: "https://formspree.io/f/xqknbdrq", 
        method: "POST",
        data: message,
        dataType: "json"
    })
    .done(
        () => {window.location.replace("thank_you.html")}
    )
    .fail(
        () => {window.alert("There was a problem with your request, please contact us on telegram")}
    );

    event.preventDefault();
});