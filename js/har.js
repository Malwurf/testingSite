function loadHar(url){
	if(url.length > 5){
		$('#har-view').text('');
		$('#har-view').append($('<img style="margin-left: auto; margin-right: auto; display: block;	padding-bottom: 64px; padding-top: 64px;" src="img/loading-blue.gif" />'));

		$.get( "getHar.php",{ url: url}).done(function( data ) {
			$('#har-view img').remove();
			try{
				$('#har-view').HarView();
				var har = $('#har-view').data('HarView');
				har.render(JSON.parse(data));
			}catch (e){
				$('#har-view').text('Error: ' + data);
			}
		});
	}
}