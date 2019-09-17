var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbwD-go0MVn77NwDHSG5zT2AjmLQ6NIyVMikuhkFDeYC4XCAPG10/exec'

$('#submit-form').on('click', function(e) {
    e.preventDefault();
    var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: $form.serializeObject()
    }).success();
})