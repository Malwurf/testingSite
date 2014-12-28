function w3ctest(url){
			$.getJSON('w3ctest.php?url='+url, function(result){
			
			var li = $('<li class="ilosc_wiadomosci">').text('Znaleziono ' + result.messages.length + ' problemy');
			$("ul#w3c").append(li);
			
            $.each(result.messages, function(i, field){
				var li = $('<li class="'+field.type+'">').append($('<span class="linia">').text(field.lastLine)).append($('<span class="kolumna">').text(field.lastColumn)).append($('<span class="wiadomosc">').text(field.message));
				
				$("ul#w3c").append(li);
            });
          });
		}