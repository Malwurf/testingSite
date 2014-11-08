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
	    <!-- Brand and toggle get grouped for better mobile display -->
	    <div class="navbar-header">
	      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
	        <span class="sr-only">Toggle navigation</span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	      </button>
	      <a class="navbar-brand nav_logo_color" href="#">Snail Project</a>
	    </div>
	</nav>
	

	<div class="container-fluid">
		<div class="container-fluid margin_top_15pc">
			<input id="address" type="text" class="form-control width_60 height_45" placeholder="Podaj URL">
			<button id="runTest" class="btn btn-success btn-lg">Test</button>
		</div>
		<div class="margin_top_15">
			<p>Twoje IP to - <?php include 'ip.php'; ?>
		</div>
		
	</div>
	
	
	<div class="container margin_top_20pc">
		<table id="insightResultTable" class="table table-striped table-bordered table-hover white_box">
<!--			<thead>
				<tr>
					<td>1</td>
					<td>2</td>
					<td>3</td>
				</tr> 
			</thead> -->
			<tbody>
			</tbody>
		</table>
	</div>




	<script src="js/jquery-2.1.1.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script>
		var URL_TO_GET_RESULTS_FOR = '';
		$("#runTest").click(function(e) {
			URL_TO_GET_RESULTS_FOR = $("#address").val();
			$("#insightResultTable tbody").html('');
			setTimeout(runPagespeed, 0);
		});
	</script>
	<script src="js/scripts/insight.js"></script>
</body>
</html>
