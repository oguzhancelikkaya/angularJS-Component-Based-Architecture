movieApp.factory('helperUtils', function() {

	var _isNotEmpty = function(val){
		
		return (val === undefined || val == null || val.length <= 0) ? false : true;
	}
	
	var _setCookie = function(name, value, days) {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			var expires = "; expires=" + date.toGMTString();
		}
		else var expires = "";
		document.cookie = name + "=" + value + expires + "; path=/";
	}
	
	var _getCookie = function(name){
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') c = c.substring(1, c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
		}
		return null;
	}
	
  var _getFullAge = function(date) {
    // date should be in DD/MM/YYYY format
    if (!date) {
      return [999, 0, 0];
    }
    date = date.split('/');
    date = [date[2], date[1], date[0], ].join('-');
    var today = new Date();
    var birthDate = new Date(date);
    var y = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    var d = today.getDate() - birthDate.getDate();

    if (m < 0) {
      y--;
      m += 12;
    }
    if (d < 0) {
      m--;
      d += 31;
      if (m < 0) {
        m = 11;
        y--;
      }
    }
    return [y, m, d];
  }

  var _isTcknValid = function(tckn) {
    var isValid = false;

    if (tckn) {
      tckn = tckn.toString();
      var firstDigit = parseInt(tckn.substr(0, 1));

      if (tckn.length === 11 && firstDigit !== 0) {
        var totalTen = 0;
        var totalOdd = 0;
        var totalEven = 0;
        var tenThDigit = parseInt(tckn.substr(9, 1));
        var lastDigit = parseInt(tckn.substr(10, 1));

        for (var i = 0; i < 10; i++) {
          totalTen += parseInt(tckn.substr(i, 1));
        }

        for (var j = 0; j < 9; j++) {
          var val = parseInt(tckn.substr(j, 1));
          if (j % 2 === 0) {
            totalOdd += val;
          } else {
            totalEven += val;
          }
        }

        isValid = totalTen % 10 === lastDigit &&
          ((totalOdd * 7) - totalEven) % 10 === tenThDigit;
      // if length's 10 it's tax no
      } else if (tckn.length === 10) {
        isValid = true;
      }
    }

    return isValid;
  }

  var _isTaxNoValid = function(taxNo) {
    var isValid = false;

    if (taxNo) {
      taxNo = taxNo.toString();

      if (taxNo.length === 10) {
        isValid = true;
      }
      else if (taxNo.length === 11) {
        isValid = isTcknValid(taxNo);
      }
    }

    return isValid;
  }

  var _detectIE = function() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
       // Edge (IE 12+) => return version number
       return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
  }

  return {
	isNotEmpty	: 	_isNotEmpty,
	setCookie 	:	_setCookie,
	getCookie 	: 	_getCookie,
    getFullAge	: 	_getFullAge,
    isTcknValid : 	_isTcknValid,
    isTaxNoValid: 	_isTaxNoValid,
    detectIE	: 	_detectIE
  }

});
