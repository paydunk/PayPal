var paydunkInit;

(function($) {

    $.fn.paydunk = function( options ) {

        // default settings
        var settings = $.extend({
            order_number : null,
            shipping     : null,
            tax          : null
        }, options);
		
	    paydunkInit = {
				appID: settings.appID,
				version: '1.0.0'
		};
		
		$(this).html('<button type="button" id="pd-paydunkButton"></button><form><input type="hidden" id="pd-client_id" name="client_id" value="'+settings.appID+'" /><input type="hidden" id="pd-order_number" name="order_number" value="'+settings.order_number+'" /><input type="hidden" id="pd-price" name="price" value="'+settings.price+'" /><input type="hidden" id="pd-tax" name="tax" value="'+settings.tax+'" /><input type="hidden" id="pd-shipping" name="shipping" value="'+settings.shipping+'" /></form>');

		(function(d, s, id, st, r) {
			var js,
			stylesheet,
			fjs = d.getElementsByTagName(s)[0];

			// check if element with id="paydunk-jssdk" already exist
			if (d.getElementById(id)) {return;}

			// create new DOM elements
			js = d.createElement(s);
			js.id = id;
			js.src = "https://api.paydunk.com/js/paydunkSignin.js";

			stylesheet = d.createElement(st);
			stylesheet.rel = r;
			stylesheet.href = "https://api.paydunk.com/css/login.css";

			// insert DOM elements
			fjs.parentNode.insertBefore(js, fjs);
			fjs.parentNode.insertBefore(stylesheet, fjs);
		}(document, 'script', 'paydunk-jssdk', 'link', 'stylesheet'));

    };

}(jQuery));
