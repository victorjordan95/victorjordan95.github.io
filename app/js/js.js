var $contactForm = $('#contact-form');
$contactForm.submit(function (e) {

    //get the name field value
    var name = $('#inputName').val();
    //get the name field value
    var email = $('#inputEmail').val();
    //get the comments
    var comments = $('#inputText').val();

    $.ajax({
        url: '//formspree.io/victorjordan95@gmail.com',
        method: 'POST',
        data:{
            name:name,
            _replyto:email,
             email:email,
            comments:comments,
            _subject:'My Form Submission',
        },
        dataType: 'json',
        beforeSend: function () {
            $contactForm.append('<div class="alert loading">Sending message…</div>');
        },
        success: function (data) {
            $contactForm.find('.loading').hide();
            $contactForm.append('<div id="js-success" class="alert success">Message sent!</div>');
            $contactForm.find('.alert .success').hide();
            //$("#js-success").fadeIn( 400 );
            // setTimeout(function(){ 
                
                // }, 3000)();
                
            },
            error: function (err) {
                $contactForm.find('.loading').hide();
                $contactForm.append('<div class="alert error">Ops, there was an error.</div>');
            }
        });
    e.preventDefault();
});