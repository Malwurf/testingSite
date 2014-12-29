
        $('#modernizr').prepend($('<h3>)').text('HTML5 & CSS3 features'));
		if 	(Modernizr.applicationcache) {
            var li = $('<li>').addClass('modernizr_item').text("application cache is supported !");
            $('ul#modernizr_list').append(li);
		}else{
			var li = $('<li>').addClass('modernizr_item_not_supported').text("application cache is not supported !");
            $('ul#modernizr_list').append(li);
		}
        if 	(Modernizr.draganddrop) {
            var li = $('<li>').addClass('modernizr_item').text("Drag 'n Drop is supported !");
            $('ul#modernizr_list').append(li);
		}else{
			var li = $('<li>').addClass('modernizr_item_not_supported').text("Drag 'n Drop is not supported !");
            $('ul#modernizr_list').append(li);
		}
        if 	(Modernizr.canvas) {
            var li = $('<li>').addClass('modernizr_item').text("canvas is supported !");
            $('ul#modernizr_list').append(li);
		}else{
			var li = $('<li>').addClass('modernizr_item_not_supported').text("canvas is not supported !");
            $('ul#modernizr_list').append(li);
		}
         if 	(Modernizr.audio) {
            var li = $('<li>').addClass('modernizr_item').text("HTML 5 Audio is supported !");
            $('ul#modernizr_list').append(li);
		}else{
			var li = $('<li>').addClass('modernizr_item_not_supported').text("HTML 5 Audio is not supported !");
            $('ul#modernizr_list').append(li);
		}
         if 	(Modernizr.video) {
            var li = $('<li>').addClass('modernizr_item').text("HTML 5 Video is supported !");
            $('ul#modernizr_list').append(li);
		}else{
			var li = $('<li>').addClass('modernizr_item_not_supported').text("HTML 5 Video is not supported !");
            $('ul#modernizr_list').append(li);
		}
         if 	(Modernizr.localstorage) {
            var li = $('<li>').addClass('modernizr_item').text("local storage is supported !");
            $('ul#modernizr_list').append(li);
		}else{
			var li = $('<li>').addClass('modernizr_item_not_supported').text("local storage is not supported !");
            $('ul#modernizr_list').append(li);
		}
         if 	(Modernizr.postmessage) {
            var li = $('<li>').addClass('modernizr_item').text("post message is supported !");
            $('ul#modernizr_list').append(li);
		}else{
			var li = $('<li>').addClass('modernizr_item_not_supported').text("post message is not supported !");
            $('ul#modernizr_list').append(li);
		}
         if 	(Modernizr.sessionstorage) {
            var li = $('<li>').addClass('modernizr_item').text("session storage is supported !");
            $('ul#modernizr_list').append(li);
		}else{
			var li = $('<li>').addClass('modernizr_item_not_supported').text("session storage is not supported !");
            $('ul#modernizr_list').append(li);
		}
         if 	(Modernizr.websockets) {
            var li = $('<li>').addClass('modernizr_item').text("web sockets is supported !");
            $('ul#modernizr_list').append(li);
		}else{
			var li = $('<li>').addClass('modernizr_item_not_supported').text("web sockets is not supported !");
            $('ul#modernizr_list').append(li);
		}
         if 	(Modernizr.websqldatabase) {
            var li = $('<li>').addClass('modernizr_item').text("web SQL database is supported !");
            $('ul#modernizr_list').append(li);
		}else{
			var li = $('<li>').addClass('modernizr_item_not_supported').text("web SQL database is not supported !");
            $('ul#modernizr_list').append(li);
		}

        
        /* Inne */
/*        $('#modernizr').append($('<h3>)').text('CSS 3 features')); */
        if 	(Modernizr.svg) {
            var li = $('<li>').addClass('modernizr_item').text("SVG image is supported !");
            $('ul#modernizr_list').append(li);
		}else{
			var li = $('<li>').addClass('modernizr_item_not_supported').text("SVG image is not supportede !");
            $('ul#modernizr_list').append(li);
		}
         if 	(Modernizr.fontface) {
            var li = $('<li>').addClass('modernizr_item').text("@font-face is supported !");
            $('ul#modernizr_list').append(li);
		}else{
			var li = $('<li>').addClass('modernizr_item_not_supported').text("@font-face is not supported !");
            $('ul#modernizr_list').append(li);
		}
         if 	(Modernizr.backgroundsize) {
            var li = $('<li>').addClass('modernizr_item').text("backgroundsize is supported !");
            $('ul#modernizr_list').append(li);
		}else{
			var li = $('<li>').addClass('modernizr_item_not_supported').text("backgroundsize is not supported !");
            $('ul#modernizr_list').append(li);
		}
         if 	(Modernizr.borderimage) {
            var li = $('<li>').addClass('modernizr_item').text("borderimage is supported !");
            $('ul#modernizr_list').append(li);
		}else{
			var li = $('<li>').addClass('modernizr_item_not_supported').text("borderimage is not supported !");
            $('ul#modernizr_list').append(li);
		}
         if 	(Modernizr.borderradius) {
            var li = $('<li>').addClass('modernizr_item').text("borderradius is supported !");
            $('ul#modernizr_list').append(li);
		}else{
			var li = $('<li>').addClass('modernizr_item_not_supported').text("borderradius is not supported !");
            $('ul#modernizr_list').append(li);
		}
         if 	(Modernizr.boxshadow) {
            var li = $('<li>').addClass('modernizr_item').text("boxshadow is supported !");
            $('ul#modernizr_list').append(li);
		}else{
			var li = $('<li>').addClass('modernizr_item_not_supported').text("boxshadow is not supported !");
            $('ul#modernizr_list').append(li);
		}
         if 	(Modernizr.hsla) {
            var li = $('<li>').addClass('modernizr_item').text("hsla is supported !");
            $('ul#modernizr_list').append(li);
		}else{
			var li = $('<li>').addClass('modernizr_item_not_supported').text("hsla is not supported !");
            $('ul#modernizr_list').append(li);
		}
         if 	(Modernizr.multiplebgs) {
            var li = $('<li>').addClass('modernizr_item').text("multiplebgs is supported !");
            $('ul#modernizr_list').append(li);
		}else{
			var li = $('<li>').addClass('modernizr_item_not_supported').text("multiplebgs is not supported !");
            $('ul#modernizr_list').append(li);
		}
         if 	(Modernizr.opacity) {
            var li = $('<li>').addClass('modernizr_item').text("opacity is supported !");
            $('ul#modernizr_list').append(li);
		}else{
			var li = $('<li>').addClass('modernizr_item_not_supported').text("opacity is not supported !");
            $('ul#modernizr_list').append(li);
		}
         if 	(Modernizr.rgba) {
            var li = $('<li>').addClass('modernizr_item').text("rgba is supported !");
            $('ul#modernizr_list').append(li);
		}else{
			var li = $('<li>').addClass('modernizr_item_not_supported').text("rgba is not supported !");
            $('ul#modernizr_list').append(li);
		}
         if 	(Modernizr.textshadow) {
            var li = $('<li>').addClass('modernizr_item').text("textshadow is supported !");
            $('ul#modernizr_list').append(li);
		}else{
			var li = $('<li>').addClass('modernizr_item_not_supported').text("textshadow is not supported !");
            $('ul#modernizr_list').append(li);
		}
         if 	(Modernizr.cssanimations) {
            var li = $('<li>').addClass('modernizr_item').text("css animations is supported !");
            $('ul#modernizr_list').append(li);
		}else{
			var li = $('<li>').addClass('modernizr_item_not_supported').text("css animations is not supported !");
            $('ul#modernizr_list').append(li);
		}
         if 	(Modernizr.csscolumns) {
            var li = $('<li>').addClass('modernizr_item').text("csscolumns is supported !");
            $('ul#modernizr_list').append(li);
		}else{
			var li = $('<li>').addClass('modernizr_item_not_supported').text("csscolumns is not supported !");
            $('ul#modernizr_list').append(li);
		}
         if 	(Modernizr.generatedcontent) {
            var li = $('<li>').addClass('modernizr_item').text("generated content is supported !");
            $('ul#modernizr_list').append(li);
		}else{
			var li = $('<li>').addClass('modernizr_item_not_supported').text("generated content is not supported !");
            $('ul#modernizr_list').append(li);
		}
         if 	(Modernizr.cssgradients) {
            var li = $('<li>').addClass('modernizr_item').text("css gradients is supported !");
            $('ul#modernizr_list').append(li);
		}else{
			var li = $('<li>').addClass('modernizr_item_not_supported').text("css gradients is not supported !");
            $('ul#modernizr_list').append(li);
		}
         if 	(Modernizr.cssreflections) {
            var li = $('<li>').addClass('modernizr_item').text("css reflections is supported !");
            $('ul#modernizr_list').append(li);
		}else{
			var li = $('<li>').addClass('modernizr_item_not_supported').text("css reflections is not supported !");
            $('ul#modernizr_list').append(li);
		}
         if 	(Modernizr.csstransforms) {
            var li = $('<li>').addClass('modernizr_item').text("css transforms is supported !");
            $('ul#modernizr_list').append(li);
		}else{
			var li = $('<li>').addClass('modernizr_item_not_supported').text("css transforms is not supported !");
            $('ul#modernizr_list').append(li);
		}
         if 	(Modernizr.csstransforms3d) {
            var li = $('<li>').addClass('modernizr_item').text("css transforms 3d is supported !");
            $('ul#modernizr_list').append(li);
		}else{
			var li = $('<li>').addClass('modernizr_item_not_supported').text("css transforms 3d is not supported !");
            $('ul#modernizr_list').append(li);
		}
         if 	(Modernizr.csstransitions) {
            var li = $('<li>').addClass('modernizr_item').text("css transitions is supported !");
            $('ul#modernizr_list').append(li);
		}else{
			var li = $('<li>').addClass('modernizr_item_not_supported').text("css transitions is not supported !");
            $('ul#modernizr_list').append(li);
		}
         if 	(Modernizr.inlinesvg) {
            var li = $('<li>').addClass('modernizr_item').text("inline svg is supported !");
            $('ul#modernizr_list').append(li);
		}else{
			var li = $('<li>').addClass('modernizr_item_not_supported').text("inline svg is not supported !");
            $('ul#modernizr_list').append(li);
		}
         if 	(Modernizr.smil) {
            var li = $('<li>').addClass('modernizr_item').text("smil is supported !");
            $('ul#modernizr_list').append(li);
		}else{
			var li = $('<li>').addClass('modernizr_item_not_supported').text("smil is not supported !");
            $('ul#modernizr_list').append(li);
		}
         if 	(Modernizr.webgl) {
            var li = $('<li>').addClass('modernizr_item').text("webgl is supported !");
            $('ul#modernizr_list').append(li);
		}else{
			var li = $('<li>').addClass('modernizr_item_not_supported').text("webgl is not supported !");
            $('ul#modernizr_list').append(li);
		}
         if 	(Modernizr.cookies) {
            var li = $('<li>').addClass('modernizr_item').text("cookies is supported !");
            $('ul#modernizr_list').append(li);
		}else{
			var li = $('<li>').addClass('modernizr_item_not_supported').text("cookies is not supported !");
            $('ul#modernizr_list').append(li);
		}
         if 	(Modernizr.json) {
            var li = $('<li>').addClass('modernizr_item').text("json is supported !");
            $('ul#modernizr_list').append(li);
		}else{
			var li = $('<li>').addClass('modernizr_item_not_supported').text("json is not supported !");
            $('ul#modernizr_list').append(li);
		}
         if 	(Modernizr.img_webp) {
            var li = $('<li>').addClass('modernizr_item').text("img webp is supported !");
            $('ul#modernizr_list').append(li);
		}else{
			var li = $('<li>').addClass('modernizr_item_not_supported').text("img webp is not supported !");
            $('ul#modernizr_list').append(li);
		}
	