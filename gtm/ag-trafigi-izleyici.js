(function() {
  var oldXMLHttpRequest = XMLHttpRequest;
  XMLHttpRequest = function() {
    var actual = new oldXMLHttpRequest();
    var self = this;
    this.onreadystatechange = null;
    actual.onreadystatechange = function() {
      if (this.responseText) {
        self.responseText = this.responseText;
      }
      if (this.readyState === 4) {
        //----------------------------------------------//
        var targetURL = 'TARGET_URL';
        //----------------------------------------------//
        if (this.responseURL === targetURL) {
          //----------------------------------------------//
          // var formResponse = JSON.parse(this.responseText)['status'];
          //----------------------------------------------//
          window.dataLayer.push({
            'event': '_formSubmit',
            // 'message': formResponse
          })
        }
        self.responseText = this.responseText;
      }
      if (self.onreadystatechange) {
        return self.onreadystatechange();
      }
    };

    //----------------------------------------------//
    ["status", "statusText", "responseType", "response",
     "readyState", "responseXML", "upload"].forEach(function(item) {
        Object.defineProperty(self, item, {
            get: function() {return actual[item];}
        });
    });

    //----------------------------------------------//
    ["ontimeout, timeout", "withCredentials", "onload", "onerror", "onprogress"].forEach(function(item) {
        Object.defineProperty(self, item, {
            get: function() {return actual[item];},
            set: function(val) {actual[item] = val;}
        });
    });

    //----------------------------------------------//
    ["addEventListener", "send", "open", "abort", "getAllResponseHeaders",
     "getResponseHeader", "overrideMimeType", "setRequestHeader"].forEach(function(item) {
        Object.defineProperty(self, item, {
            value: function() {return actual[item].apply(actual, arguments);}
        });
    });
  }
})();
