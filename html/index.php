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
	
	
	
	<div class="container-fluid">
		<p><h1>Snail project</h1></p>
	</div>

	<div class="container-fluid">
		<div class="container-fluid margin_top_15">
			<input id="address" type="text" class="form-control width_60 height_45" placeholder="Podaj URL">
			<button id="runTest" class="btn btn-success btn-lg">Test</button>
		</div>
		<?php include 'ip.php'; ?>
	</div>
	
	
	<div class="container">
		<table id="insightResultTable" class="table table-striped table-bordered table-hover">
			<thead>
				<tr>
					<td>1</td>
					<td>2</td>
					<td>3</td>
				</tr>
			</thead>
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
