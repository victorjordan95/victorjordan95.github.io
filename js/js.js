var $contactForm=$("#contact-form");$contactForm.submit(function(e){e.preventDefault(),$.ajax({url:"//formspree.io/your@email.com",method:"POST",data:$(this).serialize(),dataType:"json",beforeSend:function(){$contactForm.append('<div class="alert loading">Sending message…</div>')},success:function(e){$contactForm.find(".loading").hide(),$contactForm.append('<div class="alert success">Message sent!</div>'),$(".alert .alert-success").delay(4e3).hide()},error:function(e){$contactForm.find(".loading").hide(),$contactForm.append('<div class="alert error">Ops, there was an error.</div>')}})});