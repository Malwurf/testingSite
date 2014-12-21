<?php
if(isset($_GET['url'])){
	$url = 'http://validator.w3.org/check?uri='.urlencode($_GET['url']).';output=json';

	$options = array(
	  'http'=>array(
			'method'=>"GET",
			'header'=>"Accept-language: en\r\n" .
					  "User-Agent: Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B334b Safari/531.21.102011-10-16 20:23:10\r\n"
		)
	);

	$context = stream_context_create($options);
	echo file_get_contents($url, false, $context);
}
?>
