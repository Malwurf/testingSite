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
	

	<div class="container-fluid">
		<div class="container-fluid margin_top_15pc">
			<input id="address" type="text" class="form-control width_60 height_45" placeholder="np. www.pwr.edu.pl">
			<button id="runTest" class="btn btn-success btn-lg">Test</button>
		</div>
<!--		<div class="margin_top_15">
			<p class="">Twoje IP to - <?php include 'ip.php'; ?>
		</div>
-->
		
	</div>
	
	<p class="white_box site_ip">Adres IP testowanej strony to - <span id="insert_ip"></span></p>
	<p id="score_result"></p>
	<div class="container margin_top_10pc">
		<table id="insightResultTable" class="table table-striped table-bordered table-hover white_box">
			<thead>
				<tr>
					<td>Importance</td>
					<td>Type</td>
					<td>Description</td>
				</tr> 
			</thead>

			<tbody>
			</tbody>
		</table>
	</div>


	<script src="js/jquery-2.1.1.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/modernizr.js"> </script>
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
			check_ip(URL_TO_GET_RESULTS_FOR);
			URL_TO_GET_RESULTS_FOR = "http://" + URL_TO_GET_RESULTS_FOR;
			$("#insightResultTable tbody").html('');
			setTimeout(runPagespeed, 0);
		});
	</script>
	<script src="js/scripts/insight.js"></script>
	<script>
		if 	(Modernizr.applicationcache) {
			document.write("ApplicationCache Jest wspierane !");
		}else{
			document.write("ApplicationCache Nie jest!");
		}
	</script>

</body>
</html>
