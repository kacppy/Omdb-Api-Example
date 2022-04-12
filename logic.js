var title;
var poster_src;
var imdb_id;


function search(str) {
	if (str.length < 1) {
		return;
	} 
	else {
			$.ajax({
				url: "http://www.omdbapi.com/?apikey=<API_KEY_HERE>&t="+str,
				success: function(data) {
					if (data['Response'] === "False"){
						poster_src = "blank.jpg";
						title = data['Error'];
					}
					else {
					title = data['Title'];

					if (data['Poster']==="N/A"){
						poster_src = "blank.jpg";
					}
					else{
						poster_src = data['Poster'];
					}
					imdb_id = data['imdbID'];
				}

				$('#hints').css('display', 'block')
				$("#poster").attr("src",poster_src);
				$("#mov_title").html(title);
				},

			});

	}
}

function select_mov(){
	if($('#hints').hasClass("checked")){
		$('#hints').removeClass('checked');
		$('#picked').hide();
		$('#title').show();
		$('.sh_n').hide();
		$('.send').hide();
		$('#map_canvas').hide();
	}
	else{
		$('#hints').addClass('checked');
		$('#picked').html('You picked: '+title);
		$('#picked').show();
		$('#title').hide();
		$('.sh_n').show();
	}
}
