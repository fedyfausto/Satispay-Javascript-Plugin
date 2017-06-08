/*!
 * Satispay JavaScript Library v1.0.0
 * https://github.com/fedyfausto/Satispay-Javascript
 *
 * Satispay Service
 * https://www.satispay.com/
 *
 * Copyright Federico Fausto Santoro
 * Released under the Apache 2.0 license
 *
 * Date: 2017-06-07
 */

(function() {
    /**
     * Constructor
     */
    this.Satispay = function() {
        this.container = document.createElement("div");
        this.container.style.display = "none";
        document.body.appendChild(this.container);

        var defaults = {
            key: null,
            webhook: null,
            script_url:"https://online.satispay.com/checkout.min.js",
            sandbox:false
        }

        if (arguments[0] && typeof arguments[0] === "object") {
            this.options = extendDefaults(defaults, arguments[0]);
            if(this.options.sandbox){
                this.options.script_url="https://staging.online.satispay.com/checkout.min.js";
            }
        }
    }

    /**
     * @method newPayment - Prepare and show the lightbox view to pay
     * @param {Number} The amount of your payment, insert 200 for 2.00
     * @param {String} The description for this payment, it will show into the window above the logo
     * @param {String} The name of your callback function, this will called after the payment verification
     */
    Satispay.prototype.newPayment = function(amount,description,callback) {
        // open code goes here
        var $this = this;
        $this.container.innerHTML = "";

        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() { 
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
                $this.dom_script = document.createElement("script");
                $this.dom_script.className = "satispay-button";
                $this.dom_script.setAttribute('src', $this.options.script_url);
                $this.dom_script.setAttribute('data-key', $this.options.sandbox ? $this.options.key_sandbox : $this.options.key );
                $this.dom_script.setAttribute('data-amount', amount);
                $this.dom_script.setAttribute('data-description', description);
                $this.dom_script.setAttribute('data-webhook', $this.options.webhook);
                $this.dom_script.setAttribute('data-callback', callback);
                $this.container.appendChild($this.dom_script);
                setTimeout(function(){
                    var btn = document.getElementById('satisbutton');
                    btn.click();
                },1000);
            }
        }
        xmlHttp.setRequestHeader("Cache-Control", "max-age=3600");
        xmlHttp.open("GET", $this.options.script_url, true); // true for asynchronous 
        xmlHttp.send(null);
    }

    //private
    function extendDefaults(source, properties) {
        var property;
        for (property in properties) {
            if (properties.hasOwnProperty(property)) {
                source[property] = properties[property];
            }
        }
        return source;
    }

}());