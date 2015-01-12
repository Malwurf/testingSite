<!DOCTYPE html>
<html>
<head lang="pl">
    <meta charset="UTF-8">
    <title>Snail project</title>
    <!-- Latest compiled and minified CSS -->
    <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css"> -->
    <!-- Latest compiled and minified JavaScript
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>   -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/main.css" rel="stylesheet">
	<link rel='stylesheet' href='css/jquery-ui.css'/>
	<link rel='stylesheet' href='css/har-viewer.css'/>
</head>
<body>

	<nav  class="navbar navbar-default nav_style" role="navigation">
	  	<div class="container-fluid">
		    <div id="logo">
		      <a class="navbar-brand" href="index.php">Snail Project</a>
	      	</div>
	      	<div id="ip" class="float_right">
	      		<p class="navbar-text">Twój adres IP to - <?php include 'ip.php'; ?></p>
	      	</div>
	    </div>
	</nav>
	

	<div class="flex">
        <div class="empty"></div>
            <input id="address" type="text" class="form-control input" placeholder="np. www.pwr.edu.pl">
            <button id="runTest" class="btn btn-success btn-lg button">Test</button>
        <div class="empty"></div>
<!--		<div class="margin_top_15">
			<p class="">Twoje IP to - <?php include 'ip.php'; ?>
		</div>
-->
		
	</div>
<!--	
	<p class="white_box site_ip">Adres IP testowanej strony to - <span id="insert_ip"></span></p>
-->
    <div id="anchors">
        <div class="empty"></div>
        
        <div id="pagespeed_icon">
            <a href="#insightResultTable" class="tooltips"><span>Optimization rules</span></a>
        </div>
        <div id="waterfall_icon">
            <a href="#har-view" class="tooltips"><span>Waterfall graph</span></a>
        </div>
        <div id="w3c_icon">
            <a href="#w3c" class="tooltips"><span>Validation result</span></a>
        </div>
        <div id="modernizr_icon">
            <a href="#modernizr" class="tooltips"><span>Browser test</span></a>
        </div>
    </div>

    
	<p id="score_result"></p>
    	<div class="container margin_top_15px">
		<table id="insightResultTable" class="table table-striped table-bordered table-hover white_box">
            
			<thead>
				<tr>
					<a name="pagespeed" class="pagespeed_icon"><td>Importance</td></a>
					<td>Type</td>
					<td>Description</td>
				</tr> 
			</thead>

			<tbody>
			</tbody>
		</table>
		<div id='har-view' class="white_box">

		</div><!-- /har-view -->
        
        <div id="w3cvalidator" class="white_box">
            <ul id="w3c">
            </ul>
        </div>

        <div id="modernizr">
            <ul id="modernizr_list">
            
            </ul>
        </div>
        
	</div>


	<script src="js/jquery-2.1.1.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/modernizr.js"> </script>
	<script type='text/javascript' src='js/mustache.js'></script>
	<script type='text/javascript' src='js/jquery.min.js'></script>
	<script type='text/javascript' src='js/jquery-ui.min.js'></script>
	<script type='text/javascript' src='js/har-viewer.js'></script>
	<script src="js/har.js"> </script>
	<script>
		function check_ip(adres_strony) {
			$.ajax({
				type: "GET",
			    url: "/siteip.php",
			    data: {
			   		address: adres_strony
			    },
			    dataType: "html",
			    success: function(content){
			    	$('#insert_ip').html(content);
			    }
			});
		}

		var URL_TO_GET_RESULTS_FOR = '';
		$("#runTest").click(function(e) {
			
			URL_TO_GET_RESULTS_FOR = $("#address").val();
			//check_ip(URL_TO_GET_RESULTS_FOR);
			URL_TO_GET_RESULTS_FOR = "http://" + URL_TO_GET_RESULTS_FOR;
			$("#insightResultTable tbody").html('');
			setTimeout(runPagespeed, 0);

			loadHar(URL_TO_GET_RESULTS_FOR);
            w3ctest(URL_TO_GET_RESULTS_FOR);
		});
	</script>
	<script src="js/insight.js"></script>
	<script src="js/modernizr_test.js"></script>
    <script src="js/w3ctest.js"></script>
    
    <footer></footer>

</body>
</html>
