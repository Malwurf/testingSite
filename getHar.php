<?php

require_once("Services_WTF_Test.php");

$test = new Services_WTF_Test("snailproject213295@gmail.com", "7c13ba2e9391907cf77c636a2a0d89fb");

if(isset($_GET['url']) && strlen($_GET['url']) > 0){
	$url_to_test = $_GET['url'];
	$testid = $test->test(array(
		'url' => $url_to_test
	));

	$test->get_results();

	if ($test->error()) {
		die($test->error());
	}
	$testid = $test->get_test_id();
	$results = $test->results();
	$resources = $test->resources();

	$context = stream_context_create(array(
		'http' => array(
			'header'  => "Authorization: Basic " . base64_encode("snailproject213295@gmail.com:7c13ba2e9391907cf77c636a2a0d89fb")
		)
	));
	$data = file_get_contents($resources['har'], false, $context);

	$test->load($testid);

	$result = $test->delete();

	echo $data;
}
?>