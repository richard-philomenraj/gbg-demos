			var protocolAndhostNameOfURL = location.origin;

    		var currentServerhost = window.location.host

			Harmony.init("web", "F3rWW5DOuiuWgHGw6eIiI6TERbeqbvvJ", Harmony.AUSTRALIA);
			

//    		if (currentServerhost.indexOf("test-au.vixverify.com") >= 0)
//    		{
//    			Harmony.init("web", "XDF5GwuvPsLuJ22NcfD9cRnWDaaPkGji", Harmony.AUSTRALIA);
//    		}
//    		else if (currentServerhost.indexOf("balpha.vixverify.com") >= 0)
//    		{
//        		Harmony.init("web", "vwHPP85gLISpgbrQJICQdUBEmlKOT3P7", Harmony.AUSTRALIA);
//    		}
//            else if (currentServerhost.indexOf("local.vixverify.com") >= 0)
//            {
//                Harmony.init("web", "q30gjhmhnInCiZKvejgCWDRTFvT3wbbj", Harmony.AUSTRALIA);
//            }
//            else if (currentServerhost.indexOf("staging.vixverify.com") >= 0)
//            {
//                Harmony.init("web", "q30gjhmhnInCiZKvejgCWDRTFvT3wbbj", Harmony.AUSTRALIA);
//            } else {
//    			// for test.edentiti.com
//    			Harmony.init("web", "CrQ5gMpWN7CjdP2bhK7iFQ0wGG1kcLlW", Harmony.AUSTRALIA);
//    		}

    		// Use the JSONP protocol for compatibility with IE 8/9.
   			Harmony.useProtocol(Harmony.JSONP);

	        Harmony.UI.addressLookup($("#fullAddress"), Harmony.AUPAF);

	        // Configure the output fields.
	        Harmony.UI.addField(Harmony.SUBDWELLING, $("#flatNumber"));
	        Harmony.UI.addField(Harmony.STREET_NUMBER, $("#streetNumber"));
	        Harmony.UI.addField(Harmony.STREET_NAME, $("#streetName"));
	        Harmony.UI.addField(Harmony.STREET_TYPE, $("#streetType"));
	        Harmony.UI.addField(Harmony.POSTCODE, $("#postcode"));
	        Harmony.UI.addField(Harmony.LOCALITY, $("#suburb"));
	        Harmony.UI.addField(Harmony.STATE, $("#state"));

	        var accountId = document.getElementById('accountId').value;

			$("#address-non-harmony-div").hide();

//	        $.get('https://test-au.vixverify.com/harmony/harmony-health-check.seam?customerid='.concat(accountId)).then(function(responseData) {
//	        	  //responseData is the contents of the other page. Do whatever you want with it.
//
//	        	if (responseData.indexOf("can use harmony") > -1)
//	        	  {
//	        		  $("#address-non-harmony-div").hide();
//	        	  }
//	        	  else
//	        	  {
//	        		  $("#address-harmony-div").hide();
//	        	  }
//
	        	$('#address-loading-placeholder').fadeOut('slow', function() {
		        	$('#address-fields').fadeIn();
	        	});
//
//	        });

