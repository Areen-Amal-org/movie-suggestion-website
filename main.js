function each (array, func){
  for ( var i =0 ; i < array.length; i++){
    func(array[i]);
  }
}
var category=['Romance','Action','Drama','Horror','Comedy'];
$("#enter").keypress( function(event) {
	if(event.keyCode === 13) {
		$("#GFG_Button").click();
	}
});


$("#enter").click(function() {
	if(category[1] === $('#input').val()){
			 $('#action').append(
			 	'<li> Inception <br><img src= "images/Inception.jpg" id="inception"><br><button id ="a1">Press For More Information</button><br><br><br><ul id ="det1"</ul></li><br>' ,
			 	'<li>V For Vendetta <br><img src= "images/V for Vendetta.png" id="V"><br> <button id="a2">Press For More Information</button><br><br><br><ul id ="det2"</ul></li><br>',
			 	'<li>The Dark Knight<br><img src="images/the dark knight.jpg" id ="The Dark Knight"><br><button id="a3">Press For More Information</button><br><br><br><ul id ="det3"</ul></li><br>',
			 	'<li>The Hunger Games <br><img src="images/the hunger games.jpg" id ="the hunger games"><br> <button id="a4">Press For More Information</button><br><br><br><ul id ="det4"</ul></li><br>',
			 	'<li>Avengers<br><img src="images/avengers.jpg" id ="avengers"> <br><button id ="a5">Press For More Information</button><br><br><br><ul id ="det5"</ul></li><br> ',
			 	'<li>Red<br><img src="images/red.jpg" id ="red"><br> <button id ="a6">Press For More Information</button><br><br><br><ul id ="det6"</ul></li><br>' ,
			 	'<li>John Wick<br><img src="images/john wick.jpg" id ="john"><br><button id="a7">Press For More Information</button><br><br><br><ul id ="det7"</ul></li><br>',
			 	'<li>The Town<br><img src="images/town.jpg" id ="town"><br><button id="a8">Press For More Information</button><br><br><br><ul id ="det8"</ul></li><br>')
}
else if(category[3]=== $('#input').val()){
		$('#horror').append(
			'<li> Annabella<br><img src= "images/annabella.jpg" id="annabella"><br><button id="h1">Press For More Information</button><br><br><br><ul id ="detail1"</ul></li><br>',
			'<li> The Nun <br><img src= "images/the nun.jpg" id="nun"><br><button id="h2">Press For More Information</button><br><br><br><ul id ="detail2"</ul></li><br>',
			'<li> A Quiet Place <br><img src= "images/a quiet place.jpg" id="quiet"><br><button id="h3">Press For More Information</button><br><br><br><ul id ="detail3"</ul></li><br>',
			'<li> Get Out <br><img src= "images/get out.jpg" id="getout"><br><button id="h4">Press For More Information</button><br><br><br><ul id ="detail4"</ul></li><br> ',
			'<li> IT<br><img src= "images/it.jpg" id="it"> <br><button id="h5">Press For More Information</button><br><br><br><ul id ="detail5"</ul></li><br> ',
			'<li> The Conjuring <br><img src= "images/the conjuring.jpg" id="conjuring"><br><button id="h6">Press For More Information</button><br><br><br><ul id ="detail6"</ul></li><br>',
			'<li> Sinister <br><img src= "images/sinister.jpg" id="sinister"><br><button id="h7">Press For More Information</button><br><br><br><ul id ="detail7"</ul></li><br>')

	}else if (category[0] === $('#input').val()) {
		$("#romance").append(
			'<li> The Longest Ride <br> <img src= "images/ride.jpg" id="image1"> <br> <button id=""> Press For More Information </button> <br><br><br> </li>', 
			'<li> The Theory of Everything <br> <img src="images/theory.jpg" id="image2"> <br> <button id=""> Press For More Information </button> <br><br><br> </li> ',
			'<li> The Fault in Our Stars <br> <img src="images/stars.jpg" id="image3"> <br> <button id=""> Press For More Information </button> <br><br><br> </li> ',
			'<li> Falling Inn Love <br> <img src="images/inn.jpg" id="image4"> <br> <button id=""> Press For More Information </button> <br><br><br> </li> ',
			'<li> A Star Is Born <br> <img src="images/born.png" id ="image5"> <br> <button id=""> Press For More Information </button> <br><br><br> </li> ',
			'<li> Love Story <br> <img src="images/love.jpg" id ="image6"> <br> <button id=""> Press For More Information </button> <br><br><br> </li> ',
			'<li> 6 Years <br> <img src="images/6.jpg" id ="image7"> <br> <button id=""> Press For More Information </button> <br><br><br> </li> ',
			'<li> Breathe <br> <img src="images/breathe.jpg" id ="image8"> <br> <button id=""> Press For More Information </button> <br><br><br> </li>')
	} 
    else if (category[2] === $('#input').val()) {
		$('#drama').append(
			'<li> The Judge <br> <img src= "images/Judge.jpg" id="i1"> <br> <button id=""> Press For More Information </button> <br><br><br> </li>', 
			'<li> Good Will Hunting <br> <img src= "images/good.jpg" id="i2"> <br> <button id=""> Press For More Information </button> <br><br><br> </li>',
			'<li> Snitch <br> <img src="images/snitch.jpg" id ="i3"> <br> <button id=""> Press For More Information </button> <br><br><br> </li>',
			'<li> Bronson <br> <img src="images/bronson.jpg" id ="i4"> <br> <button id=""> Press For More Information </button> <br><br><br> </li>',
			'<li> All Day and a Night <br> <img src="images/all.jpg" id ="i5"> <br> <button id=""> Press For More Information </button> <br><br><br> </li>',
			'<li> True Story <br> <img src="images/true.jpg" id ="i6"> <br> <button id=""> Press For More Information </button> <br><br><br> </li>',
			'<li> Black Mass <br> <img src="images/black.jpg" id ="i7"> <br> <button id=""> Press For More Information </button> <br><br><br> </li>',
			'<li> Four Brothers <br> <img src="images/four.jpg" id ="i8"> <br> <button id=""> Press For More Information </button> <br><br><br> </li>')
    }
else if(category[4]=== $('#input').val()){
	$('#comedy').append(
		'<li> Blended <br><img src= "images/blended.jpg" id="blended"> <br><button id="">Press For More Information</button></li><br> ',
		'<li> Brides Maids<br><img src= "images/bridesmaids.jpg" id="bridsmaids"><br><button id="">Press For More Information</button></li><br>',
		'<li> GrownUps <br><img src= "images/grown ups.jpg" id="grownups"><br><button id="">Press For More Information</button></li><br> ',
		'<li> We Are The Millers <br><img src= "images/millers.jpg" id="millers"><br><button id="">Press For More Information</button></li><br>',
		'<li> Night School <br><img src= "images/Night-School.jpg" id="Night-School"><br><button id="">Press For More Information</button></li><br> ',
		'<li> Ride Along <br><img src= "images/ride along.jpg" id="ride"> <br><button id="">Press For More Information</button></li><br>',
		'<li> The Hustle <br><img src= "images/the hustle.jpg" id="hustle"> <br><button id="">Press For More Information</button></li><br>')
}
})
$('#action').on("click" ,"#a1" , function(){
	$('#det1').append(
		'<li> Rating: 8.8</li>',
		'<li> Year: 2010</li>',
		'<li> Describtion: A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.</li>',
		'<li><a herf="https://www.youtube.com/watch?v=YoHD9XEInc0&ab_channel=MovieclipsidicTrailers">Trailer</a></li>')
})
$('#action').on("click" ,"#a2" , function(){
	$('#det2').append(
		'<li> Rating: 8.2</li>',
		'<li> Year: 2005</li>',
		'<li> In a future British tyranny, a shadowy freedom fighter, known only by the alias of "V", plots to overthrow it with the help of a young woman.</li>',
		'<li><a herf="https://www.youtube.com/watch?v=lSA7mAHolAw&ab_channel=MovieclipsClassicTrailers">Trailer</a></li>')
})
$('#action').on("click" ,"#a3" , function(){
	$('#det3').append(
		'<li> Rating: 9.0</li>',
		'<li> Year: 2008</li>',
		'<li> When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.</li>',
		'<li>Press For The<a herf="https://www.youtube.com/watch?v=EXeTwQWrcwY&ab_channel=MovieclipsClassicTrailers">Trailer</a></li>')
})
$('#action').on("click" ,"#a4" , function(){
	$('#det4').append(
		'<li> Rating: 7.2</li>',
		'<li> Year: 2012</li>',
		'<li> Katniss Everdeen voluntarily takes her younger sister"s place in the Hunger Games: a televised competition which two teenagers from each of the twelve Districts of Panem are chosen at random to fight to the death</li>',
		'<li>Press For The<a herf="https://www.youtube.com/watch?v=mfmrPu43DF8&ab_channel=LionsgateMovies">Trailer</a></li>')
})
$('#action').on("click" ,"#a5" , function(){
	$('#det5').append(
		'<li> Rating: 8.0</li>',
		'<li> Year: 2012</li>',
		'<li> Earth"s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.</li>',
		'<li>Press For The<a herf="https://www.youtube.com/watch?v=eOrNdBpGMv8&ab_channel=MarvelEntertainment">Trailer</a></li>')
})
$('#action').on("click" ,"#a6" , function(){
	$('#det6').append(
		'<li> Rating: 7.0</li>',
		'<li> Year: 2010</li>',
		'<li> When his peaceful life is threatened by a high-tech assassin, former black-ops agent Frank Moses reassembles his old team in a last-ditch effort to survive and uncover his assailants.</li>',
		'<li>Press For The<a herf="https://www.youtube.com/watch?v=-JZ_moituIo&ab_channel=MovieclipsClassicTrailers">Trailer</a></li>')
})
$('#action').on("click" ,"#a7" , function(){
	$('#det7').append(
		'<li> Rating: 7.2</li>',
		'<li> Year: 2014</li>',
		'<li>An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.</li>',
		'<li>Press For The<a herf="https://www.youtube.com/watch?v=2AUmvWm5ZDQ&ab_channel=LionsgateMovies">Trailer</a></li>')
})
$('#action').on("click" ,"#a8" , function(){
	$('#det8').append(
		'<li> Rating: 7.5</li>',
		'<li> Year: 2010</li>',
		'<li> A longtime thief, planning his next job, tries to balance his feelings for a bank manager connected to an earlier heist, and a hell-bent F.B.I Agent looking to bring him and his crew down.</li>',
		'<li>Press For The<a herf="youtube.com/watch?v=WcXt9aUMbBk&ab_channel=Movieclips">Trailer</a></li>')
})