/*
|--------------------------------------------------------------------------
| Imminent Template Main JS
|--------------------------------------------------------------------------
*/
document.addEventListener("touchstart", function() {}, false);
(function($) {
    "use strict";
    /*
    |--------------------------------------------------------------------------
    | CountUp
    |--------------------------------------------------------------------------
    */
    $(function() {
        var austDay = new Date();
        austDay = new Date(austDay.getFullYear(), 5, 25);
        $('#defaultCountdown').countdown({ until: austDay });
        $('#year').text(austDay.getFullYear());
    });


    /*
    |--------------------------------------------------------------------------
    | Subscribe Form
    |--------------------------------------------------------------------------
    */
    $('#mc-form').ajaxChimp({
        url: 'http://mgscoder.us2.list-manage.com/subscribe/post?u=57eb49699512ae629a24aca54&id=bfa98bd8f0'
    });

    /*
    |--------------------------------------------------------------------------
    | Contact Form
    |--------------------------------------------------------------------------
    */
    $("#contactForm").validator().on("submit", function(event) {
        if (event.isDefaultPrevented()) {
            //handle the invalid form...
            formError();
            submitMSG(false, "Please fill in the form properly!");
        } else {
            //everything looks good!
            event.preventDefault();
            submitForm();
        }
    });

    function submitForm() {
        //Variables With Form Content
        var fname = $("#fname").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        var message = $("#message").val();

        $.ajax({
            type: "POST",
            url: "contact-process.php",
            data: "fname=" + fname + "&email=" + email + "&phone=" + phone + "&message=" + message,
            success: function(text) {
                if (text === "success") {
                    formSuccess();
                } else {
                    formError();
                    submitMSG(false, text);
                }
            }
        });
    }

    function formSuccess() {
        $("#contactForm")[0].reset();
        submitMSG(true, "Your Message Submitted Successfully!")
    }

    function formError() {
        $(".help-block.with-errors").removeClass('hidden');
    }

    function submitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h3 text-center text-success";
        } else {
            var msgClasses = "h3 text-center text-danger";
        }
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }

})(jQuery);

/*
|--------------------------------------------------------------------------
| overly
|--------------------------------------------------------------------------
*/
function openSubscribe() {
    $("#Main").removeClass("opacity-one");
    $("#Main").addClass("opacity-zero");
    $("#Subscribe").addClass("show");
}

function closeSubscribe() {
    $("#Subscribe").removeClass("show");
    $("#Main").removeClass("opacity-zero");
    $("#Main").addClass("opacity-one");
}

function openContact() {
    $("#Main").removeClass("opacity-one");
    $("#Main").addClass("opacity-zero");
    $("#myContact").addClass("show");
}

function closeContact() {
    $("#myContact").removeClass("show");
    $("#Main").removeClass("opacity-zero");
    $("#Main").addClass("opacity-one");
}

//style2
function openServicesStyle2() {
    $("#Main").addClass("slide-dowun");
    $("#Services").addClass("show");
}

function closeServicesStyle2() {
    $("#Services").removeClass("show");
    $("#Main").removeClass("slide-dowun");
}

function openSubscribeStyle2() {
    $("#Main").addClass("slide-right");
    $("#Subscribe").addClass("show");
}

function closeSubscribeStyle2() {
    $("#Subscribe").removeClass("show");
    $("#Main").removeClass("slide-right");
}

function openContactStyle2() {
    $("#Main").addClass("slide-left");
    $("#myContact").addClass("show");
}

function closeContactStyle2() {
    $("#myContact").removeClass("show");
    $("#Main").removeClass("slide-left");
}
//style3
function openServicesStyle3() {
    $("#Main").addClass("slide-dowun");
    $("#Services").addClass("show");
}

function closeServicesStyle3() {
    $("#Services").removeClass("show");
    $("#Main").removeClass("slide-dowun");
}

function openContactStyle3() {
    $("#Main").addClass("slide-up");
    $("#myContact").addClass("show");
}

function closeContactStyle3() {
    $("#myContact").removeClass("show");
    $("#Main").removeClass("slide-up");
}
//style4
function openServicesStyle4() {
    $("#Main").addClass("slide-dowun");
    $("#Services").addClass("show");
}

function closeServicesStyle4() {
    $("#Services").removeClass("show");
    $("#Main").removeClass("slide-dowun");
}

function openSubscribeStyle4() {
    $("#Main").addClass("slide-right");
    $("#Subscribe").addClass("show");
}

function closeSubscribeStyle4() {
    $("#Subscribe").removeClass("show");
    $("#Main").removeClass("slide-right");
}

function openContactStyle4() {
    $("#Main").addClass("slide-left");
    $("#myContact").addClass("show");
}

function closeContactStyle4() {
    $("#myContact").removeClass("show");
    $("#Main").removeClass("slide-left");
}

/*
|--------------------------------------------------------------------------
| End
|--------------------------------------------------------------------------
*/