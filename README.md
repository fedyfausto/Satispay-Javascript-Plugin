# Satispay-Javascript-Plugin
A Javascript plugin to generate a dynamic payment request to Satispay service

---

##### Satispay is a new payment system that allows you to pay stores or friends from your smartphone. 

Satispay allows you to perform microtransmissions completely free of charge (under € 10 Euros).

The service allows you to add a WebButton, so you can manage the payment from your application or website but the WebButton is not dynamic so you can generate this one only refreshing your webpage and only clicking on the default Satispay Button.

This plugin allows you to generate and open a dynamic window to get the payment from your users (and you can manage this with your classic events!)

In Desktop view:

![alt text](http://i67.tinypic.com/2vjr6eh.png "Desktop view")

In Mobile view:

![alt text](http://i64.tinypic.com/2nh28tl.png "Mobile view")

Compatibility
---
The plugin is compatible with the majority of Web browsers and with Cordova / Phonegap applications

Libraries
---
The plugin use the original Satispay library to generate a WebButton

Install
---

Download and import the library with SCRIPT tag:

```html
<script src="/path_to_your_assets/satispay.js"></script>

```
or minified version:
```html
<script src="/path_to_your_assets/satispay.min.js"></script>

```

How to use
---

Before you can use the plugin, you need to initialize a Satispay object
```Javascript
var satispay = new Satispay(options);
```
Where the options are:
```Javascript
{
    key : <String> Your merchant key,
    webhook: <String> Your server URL hook,
    sandbox: <Bool> Define if you are in Sandbox mode,
    [key_sandbox: <String> Your sandbox merchant key]
}
```
After initialization of the object you can call the main method to launch the  payment window:

```Javascript
satispay.newPayment(amount:<Int>,description:<String>,nameOfCallBackFunction:<String>);
```
* amount : The amount of your payment (e.g. use 200 for 2.00 €/$) 
* description : The description for this payment, it will show into the window under the logo
* nameOfCallBackFunction : The name of your callback function, this will be called after the payment verification

Complete Example
---
```Javascript
//Define the options
var options = {
    key : "YOUR_KEY",
    webhook: "http://yourserver.yourdomain/webhook",
    sandbox: false
}

//Initialize the Satispay object
var satispay = new Satispay(options);

//define a callback function
var cb = function(){
    console.log("The coffee has been Paid!");
}

//Pay one coffee
satispay.newPayment(100,"Coffee Test","cb");

//OR with a click event (e.g. Jquery):

$("yourbutton_selector").on("click",function(){
    satispay.newPayment(100,"Coffee Test","cb");
});

```
Preview
---
In Desktop view:

![alt text](http://i67.tinypic.com/2vjr6eh.png "Desktop view")

In Mobile view:

![alt text](http://i64.tinypic.com/2nh28tl.png "Mobile view")


Be aware of Sandbox mode
---
If you want to test the sandbox you will need to accept the self-signed certificate of Satispay staging server, to do this click on this link and accept the certificate:
https://staging.online.satispay.com/

Any problems or bugs?
---
Contact me at fedyfausto@hotmail.com ;)
