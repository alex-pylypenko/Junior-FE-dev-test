function buttonClick(button) {
    alert("Gallery is not ready yet");
}

$(document).ready(function () {
    $('form').submit(function (event) {

        event.preventDefault();        

        $.ajax({
            type: $(this).attr('method'),
            url: $(this).attr('action'),
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            success: function (res) {
                res = "Thanks for your invoice";
                alert(res);
            },
        });
    });
});