
    $("#ajaxForm").submit(function(e){
        e.preventDefault();
        var action = $(this).attr("action");
        $.ajax({
        type: "POST",
        url: action,
        crossDomain: true,
        data: new FormData(this),
        dataType: "json",
        processData: false,
        contentType: false,
        headers: {
        "Accept": "application/json"
        }
    }).done(function() {
        alert('The form was submitted successfully.')
    }).fail(function() {
        alert('An error occurred! Please try again later.')
    });
    });




    function showImage(imageNum) {
        var image = document.getElementById('image' + imageNum);
        image.style.display = 'block';
    }

    // Function to hide image when mouse leaves paragraph
    function hideImage(imageNum) {
        var image = document.getElementById('image' + imageNum);
        image.style.display = 'none';
    }

