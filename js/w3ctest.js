function w3ctest(url){
			$.getJSON('w3ctest.php?url='+url, function(result){
			
			var li = $('<li class="ilosc_wiadomosci">').text('Found ' + result.messages.length + ' problem(s) with the test site');
			$("ul#w3c").append(li);
			
            $.each(result.messages, function(i, field){
				var li = $('<li class="'+field.type+'">').append($('<span class="linia">').text('Line '+field.lastLine+', ')).append($('<span class="kolumna">').text('Column '+field.lastColumn+': ')).append($('<span class="wiadomosc">').text(field.message));
				
				$("ul#w3c").append(li);
            });
          });
		}