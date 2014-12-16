// Specify your actual API key here:
var API_KEY = 'AIzaSyDe-l5UgxxAM_yejKW1qEV6LDrdx-ee0mw';



var API_URL = 'https://www.googleapis.com/pagespeedonline/v1/runPagespeed?';
var CHART_API_URL = 'http://chart.apis.google.com/chart?';

// Object that will hold the callbacks that process results from the
// PageSpeed Insights API.
var callbacks = {};

// Invokes the PageSpeed Insights API. The response will contain
// JavaScript that invokes our callback with the PageSpeed results.
function runPagespeed() {
  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.async = true;
  var query = [
    'url=' + URL_TO_GET_RESULTS_FOR,
    'callback=runPagespeedCallbacks',
    'key=' + API_KEY,
  ].join('&');
  s.src = API_URL + query;
  document.head.insertBefore(s, null);
}

// Our JSONP callback. Checks for errors, then invokes our callback handlers.
function runPagespeedCallbacks(result) {
  if (result.error) {
    var errors = result.error.errors;
    for (var i = 0, len = errors.length; i < len; ++i) {
      if (errors[i].reason == 'badRequest' && API_KEY == 'yourAPIKey') {
        alert('Please specify your Google API key in the API_KEY variable.');
      } else {
        // NOTE: your real production app should use a better
        // mechanism than alert() to communicate the error to the user.
        alert(errors[i].message);
      }
    }
    return;
  }

	//console.log(result);
  print_score(result.score);

  // Dispatch to each function on the callbacks object.
  for (var fn in callbacks) {
    var f = callbacks[fn];
    if (typeof f == 'function') {
      callbacks[fn](result);
    }
  }
}


//uzupełnia tabelkę
callbacks.fillTheTable = function(result) {
	var rules = result.formattedResults.ruleResults;
	$.each(rules, function(index, value) {
		var impact = value.ruleImpact;
		var name = value.localizedRuleName;
		var tips = [];
		
		$.each(value.urlBlocks, function(index2, value2) {
			var tmp = value2.header.format;
			tips.push(tmp);
		});
		
		// wrzucenie danych do tabeli
		var trstring = "<tr><td>";
		trstring += impact + "</td><td>" + name + "</td><td>";
		$.each(tips, function(index2, value2) {
			trstring += "- " + value2 + "<br>";
		});
		trstring += "</td></tr>";
		$("#insightResultTable tbody").append(trstring);
	});
    $("#insightResultTable").show();
    $('#modernizr').show();
    //$('.site_ip').show();
};

    function print_score(wynik){
      if(wynik <= 20){
        $('#score_result').html("<p class='white_box status'> Rate E");
      } else if ((wynik > 20) && (wynik <= 40)) {
        $('#score_result').html("<p class='white_box status'> Rate D");
      } else if ((wynik > 40) && (wynik <= 60)) {
        $('#score_result').html("<p class='white_box status'> Rate C");
      } else if ((wynik > 60) && (wynik <= 80)) {
        $('#score_result').html("<p class='white_box status'> Rate B");
      } else if ((wynik > 80) && (wynik <= 100)) {
        $('#score_result').html("<p class='white_box status'> Rate A");
      } else if (wynik >= 96) {
          $('score_result').html("<p class='white_box status'> Rate A+");
      }
    };

/*
function print_score(wynik){
    $('#score_result').html("<p class='white_box status'>111Testowana strona jest zoptymalizowana w " + wynik + "%");
};
*/



