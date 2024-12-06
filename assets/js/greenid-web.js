function onRegister(verificationId, userData){
    // alert('onRegister')
    // document.getElementById("new_registration_div").style.display = "inline";
    document.getElementById("section-loading").style.display = "none";
    document.getElementById("section-personalinfo").style.display = "none";
    document.getElementById("section-greenid").style.display = "block";
    var verificationToken = JSON.parse(JSON.stringify(userData)).verificationToken;
    // alert('verificationId:'+ verificationId+'  >> var verificationToken:'+ verificationToken);

    // document.getElementById("verificationId").innerHTML = verificationId;
    // document.getElementById("verificationToken").innerHTML = verificationToken;

}

function onError(verificationToken, errorName, code, error){
    // alert('onError')
    console.log('inside onError');
    console.log(verificationToken, errorName, code, error);
    document.getElementById("section-loading").style.display = "none";
    return true;
}
function onSourceAttempt(verificationToken, sourceName, checkState, overallState){
    // alert('onSourceAttempt')
    console.log('inside onSourceAttempt');
    console.log(verificationToken, sourceName, checkState, overallState);
    return true;
}

function onSessionComplete(verificationToken, overallState){
    // alert('onSessionComplete')
    console.log('inside onSessionComplete');
    console.log(verificationToken, overallState);
        var urltxt = "https://test-au.vixverify.com/df/verificationResult?accountId=support_vvcl&webServicePassword=VQk-K8L-dUz-ZKK&verificationToken="+verificationToken;
        console.log('calling >>> '+urltxt);
        $.ajax({
            url: urltxt
        }).then(function(data) {
        
            document.getElementById("section-greenid").style.display = "none";
            document.getElementById("section-summary").style.display = "block";

            console.log("data:" + JSON.stringify(data));

            var verificationResult = data.verificationResult;
            console.log("verificationResult>>>>>" + verificationResult);

        });


    return true;
}

function onSessionCancelled(verificationToken, overallState){
    // alert('onSessionCancelled')
    console.log('inside onSessionCancelled');
    console.log(verificationToken , overallState);
    return true;
}

function onPreSubmitValidation(){
    // alert('onPreSubmitValidation')
    console.log('inside onPreSubmitValidation');

    document.getElementById("section-personalinfo").style.display = "none";
    document.getElementById("section-loading").style.display = "block";

    return true;
}

function onSubmit(verificationToken , overallState ){
    // alert('onSubmit')
    console.log('inside onSubmit');
    console.log(verificationToken , overallState);

    return true;
}

greenidJQuery("document").ready(function() {
    
    console.log("i'm here in greenidJQuery....");
    // document.getElementById("new_registration_div").style.display = "none";
    document.getElementById("section-greenid").style.display = "none";
    document.getElementById("section-summary").style.display = "none";
    document.getElementById("section-loading").style.display = "none";

    greenidUI.setup({
        environment: "test", 
        formId: "theform",
        frameId: "greenid-div",
        country: "usethiscountry",
        registerCallback: onRegister,
        errorCallback: onError,
        sourceAttemptCallback: onSourceAttempt,
        sessionCompleteCallback: onSessionComplete,
        sessionCancelledCallback: onSessionCancelled,
        preSubmitValidationCallback: onPreSubmitValidation,
        submitCallback: onSubmit
    });
    
});

greenidConfig.setOverrides({"greenid-intro-content" : "<h1>Proceed to verify your identity</h1>"});