# Paydunk Authorize.net / PayPal Integration

<img alt="Paydunk" src="http://paydunk.com/wp-content/themes/paydunk/images/footr_logo.png" />

Download the front-end plugin (found here: https://github.com/paydunk/front-end-plugin/blob/master/jquery.paydunk.js) and use the following files to get started quickly with Paydunk & PayPal Payments Pro!

### index.php

Update this file with your paydunk App ID and price (order total). Request API access and register applications at https://developers.paydunk.com. Check in the Applications tab to view all of your apps. You'll see each of your apps are given an App ID and App Secret.

### test.php

Update this file with:

* info from your order database if necessary (lines 32-34)
* your custom code depending on the order status i.e., check the payment status and update your order database accordingly (starting on line 158) 
* your Paydunk App ID and App Secret (lines 171 & 172)

### bootstrap.php

Update the bootstrap.php file, found in the PayPalSDK/paypal/rest-api-sdk-php/sample/ folder.

line 28: update with your own ClientId and Secret by visiting https://developer.paypal.com/webapps/developer/applications/myapps

line 74: update this to 'live' if not using your sandbox

### thankyou.php

Sample thank you page which the user is redirected to if the payment was successful. Specify the link to your thank you page when you register a new application at https://developers.paydunk.com.
