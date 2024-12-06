
$( document ).ready(function() {
    console.log( "ready!" );
    
    document.getElementById("section-personalinfo").style.display = "block";
    document.getElementById("section-form").style.display = "block";
    document.getElementById("section-loading").style.display = "none";

    document.getElementById("section-qrcode").style.display = "none";
    // document.getElementById("section-addlninfo").style.display = "none";

//     document.getElementById("section-summary").style.display = "none";

});


/* attach a submit handler to the form */
$("#myform").submit(function(event) {

    /* stop form from submitting normally */
    event.preventDefault();

    var accountId   = document.getElementById("accountId").value;
    var apiCode     = document.getElementById("apiCode").value;
    var ruleId      = document.getElementById("ruleId").value;
    var givenNames  = document.getElementById("givenNames").value;
    var middleNames = document.getElementById("middleNames").value;
    var surname     = document.getElementById("surname").value;
    var dob         = document.getElementById("dob").value;
    var mobilePhone = document.getElementById("mobilePhone").value;
    var email       = document.getElementById("email").value;

    console.log(accountId);

    document.getElementById("section-form").style.display = "none";
    document.getElementById("section-personalinfo").style.display = "none";
    document.getElementById("section-loading").style.display = "block";

    // document.getElementById("section-qrcode").style.display = "none";
    // document.getElementById("section-addlninfo").style.display = "none";

    // document.getElementById("section-summary").style.display = "none";

    var method = "POST";
    var url = "https://test-au.vixverify.com/df/registerVerificationAndGenerateHostedInviteURL";
    // console.log('calling rest_endpoint>>> '+url);
    var url_qr_default = "https://api.qrserver.com/v1/create-qr-code/?data=https://verify.gbgid.me/a14d42e0632b6995ea9a1b48f97276b1/hosted-landing-page&size=300x300";
    var url_qr_dynamic = "https://api.qrserver.com/v1/create-qr-code/?data=changeme&size=300x300&color=105-105-105";

    var params =  {
        "accountId": accountId,
        "password": apiCode,
        "ruleId": ruleId,
        "givenNames":givenNames,
        "middleNames":middleNames,
        "surname":surname,
        "country":"AU",
        "dob": dob,
        "mobilePhone":mobilePhone,
        "email":email
    };
    
    var xhr = new XMLHttpRequest();
    
    xhr.open(method, url, false);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onload = function() {

        // Here you can use the Data
        console.log(xhr.readyState);

        if (xhr.readyState == XMLHttpRequest.DONE) {

            if (xhr.status == 200) {
                // Here the callback gets implemented
                object = JSON.parse(xhr.responseText);
                
                console.log(xhr.responseText)

                var response = JSON.parse(xhr.responseText);
                
                var newurl = url_qr_dynamic.replace("changeme", response.hostedInviteUrl)
                console.log(newurl)

                document.getElementById("url_qrcode").src = newurl;

                document.getElementById("section-personalinfo").style.display = "none";
                document.getElementById("section-form").style.display = "none";
                document.getElementById("section-loading").style.display = "none";
            
                document.getElementById("section-qrcode").style.display = "block";
                // document.getElementById("section-addlninfo").style.display = "block";
            
                // document.getElementById("section-summary").style.display = "none";

            } else {
                console.error("sorry, we have run into some issues.")
            }

        } else {
            console.error("sorry, we have run into some issues now.")
        }

    };

    // Define a callback function to handle errors
    xhr.onerror = function() {
        console.log("An error occurred while sending the request.");
    };

    xhr.send(JSON.stringify(params));

});