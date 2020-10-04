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
	if (category[0] === $('#input').val()) {
		$("#romance").append(
			'<li> The Longest Ride <br> <img src= "images/ride.jpg" id="image1"> <br> <button id="but1"> Press For More Information </button> <br><br><br> <ul id="details1"> </ul> <br><br><br> </li>', 
			'<li> The Theory of Everything <br> <img src="images/theory.jpg" id="image2"> <br> <button id="but2"> Press For More Information </button> <br><br><br> <ul id="details2"> </ul> </li> ',
			'<li> The Fault in Our Stars <br> <img src="images/stars.jpg" id="image3"> <br> <button id="but3"> Press For More Information </button> <br><br><br> <ul id="details3"> </ul> </li> ',
			'<li> Falling Inn Love <br> <img src="images/inn.jpg" id="image4"> <br> <button id="but4"> Press For More Information </button> <br><br><br> <ul id="details4"> </ul> </li> ',
			'<li> A Star Is Born <br> <img src="images/born.png" id ="image5"> <br> <button id="but5"> Press For More Information </button> <br><br><br> <ul id="details5"> </ul> </li> ',
			'<li> Love Story <br> <img src="images/love.jpg" id ="image6"> <br> <button id="but6"> Press For More Information </button> <br><br><br> <ul id="details6"> </ul> </li> ',
			'<li> 6 Years <br> <img src="images/6.jpg" id ="image7"> <br> <button id="but7"> Press For More Information </button> <br><br><br> <ul id="details7"> </ul> </li> ',
			'<li> Breathe <br> <img src="images/breathe.jpg" id ="image8"> <br> <button id="but8"> Press For More Information </button> <br><br><br> <ul id="details8"> </ul> </li>')
	} 
    else if(category[1] === $('#input').val()) {
		$('#action').append(
			 '<li> Inception 2010 <br> <img src= "images/Inception.jpg" id="inception"> <br> <button class ="bt1">Press For More Information </button> <br><br><br> <ul id="details1"> </ul> </li>' ,
			 '<li> V For Vendetta <br> <img src= "images/V for Vendetta.png" id="V"> <br> <button class="bt1">Press For More Information </button> <br><br><br> <ul id="details1"> </ul> </li>',
			 '<li> The Dark Knight <br> <img src="images/the dark knight.jpg" id ="The Dark Knight"> <br> <button class="bt1">Press For More Information </button> <br><br><br> <ul id="details1"> </ul> </li>',
			 '<li> The Hunger Games <br> <img src="images/the hunger games.jpg" id ="the hunger games"> <br> <button class="bt1">Press For More Information </button> <br><br><br> <ul id="details1"> </ul> </li>',
			 '<li> Avengers <br> <img src="images/avengers.jpg" id ="avengers"> <br> <button class ="bt1">Press For More Information </button> <br><br><br> <ul id="details1"> </ul> </li>',
			 '<li> Red <br> <img src="images/red.jpg" id ="red"> <br> <button class ="bt1">Press For More Information </button> <ul id="details1"> </ul> </li>' ,
			 '<li> John Wick <br> <img src="images/john wick.jpg" id ="john"> <br> <button class="bt1">Press For More Information </button> <ul id="details1"> </ul> </li>',
			 '<li> Town <br> <img src="images/town.jpg" id ="town"> <br> <button class="bt1">Press For More Information </button> <br><br><br> <ul id="details1"> </ul> </li>')
    }
    else if (category[2] === $('#input').val()) {
		$('#drama').append(
			'<li> The Judge <br> <img src= "images/Judge.jpg" id="i1"> <br> <button id="bt1"> Press For More Information </button> <br><br><br> <ul id="deta1"> </ul> </li>', 
			'<li> Good Will Hunting <br> <img src= "images/good.jpg" id="i2"> <br> <button id="bt2"> Press For More Information </button> <br><br><br> <ul id="deta2"> </ul> </li>',
			'<li> Snitch <br> <img src="images/snitch.jpg" id ="i3"> <br> <button id="bt3"> Press For More Information </button> <br><br><br> <ul id="deta3"> </ul> </li>',
			'<li> Bronson <br> <img src="images/bronson.jpg" id ="i4"> <br> <button id="bt4"> Press For More Information </button> <br><br><br> <ul id="deta4"> </ul> </li>',
			'<li> All Day and a Night <br> <img src="images/all.jpg" id ="i5"> <br> <button id="bt5"> Press For More Information </button> <br><br><br> <ul id="deta5"> </ul> </li>',
			'<li> True Story <br> <img src="images/true.jpg" id ="i6"> <br> <button id="bt6"> Press For More Information </button> <br><br><br> <ul id="deta6"> </ul> </li>',
			'<li> Black Mass <br> <img src="images/black.jpg" id ="i7"> <br> <button id="bt7"> Press For More Information </button> <br><br><br> <ul id="deta7"> </ul> </li>',
			'<li> Four Brothers <br> <img src="images/four.jpg" id ="i8"> <br> <button id="bt8"> Press For More Information </button> <br><br><br> <ul id="deta8"> </ul> </li>')
    }
    else if(category[3]=== $('#input').val()) {
		$('#horror').append(
			'<li> Annabella<br><img src= "images/annabella.jpg" id="annabella"><br><button class="bt1">Press For More Information</button></li><br>',
			'<li> The Nun <br><img src= "images/the nun.jpg" id="nun"><br><button class="bt1">Press For More Information</button></li><br>',
			'<li> A Quiet Place <br><img src= "images/a quiet place.jpg" id="quiet"><br><button class="bt1">Press For More Information</button></li><br>',
			'<li> Get Out <br><img src= "images/get out.jpg" id="getout"><br><button class="bt1">Press For More Information</button></li><br> ',
			'<li> IT<br><img src= "images/it.jpg" id="it"> <br><button class="bt1">Press For More Information</button></li><br> ',
			'<li> The Conjuring <br><img src= "images/the conjuring.jpg" id="conjuring"><br><button class="bt1">Press For More Information</button></li><br>',
			'<li> Sinister <br><img src= "images/sinister.jpg" id="sinister"><br><button class="bt1">Press For More Information</button></li><br>')
	}
    else if(category[4]=== $('#input').val()) {
	    $('#comedy').append(
		   '<li> Blended <br><img src= "images/blended.jpg" id="blended"> <br><button class="bt1">Press For More Information</button> <ul id="de1"> </ul> </li><br> ',
		   '<li> Brides Maids<br><img src= "images/bridesmaids.jpg" id="bridsmaids"><br><button class="bt1">Press For More Information</button> <ul id="de2"> </ul> </li><br>',
		   '<li> GrownUps <br><img src= "images/grown ups.jpg" id="grownups"><br><button class="bt1">Press For More Information</button> <ul id="de3"> </ul> </li><br> ',
		   '<li> We Are The Millers <br><img src= "images/millers.jpg" id="millers"><br><button class="bt1">Press For More Information</button> <ul id="de4"> </ul> </li><br>',
		   '<li> Night School <br><img src= "images/Night-School.jpg" id="Night-School"><br><button class="bt1">Press For More Information</button> <ul id="de5"> </ul> </li><br> ',
		   '<li> Ride Along <br><img src= "images/ride along.jpg" id="ride"> <br><button class="bt1">Press For More Information</button> <ul id="de6"> </ul> </li><br>',
		   '<li> The Hustle <br><img src= "images/the hustle.jpg" id="hustle"> <br><button class="bt1">Press For More Information</button> <ul id="de7"> </ul> </li><br>')
    }
});


$("#romance").on("click", "#but1", function() {
	$("#details1").append(
		'<li> rating: 7.1 </li>', 
		'<li> Year: 2015 </li>',
		'<li> Description: The lives of a young couple intertwine with a much older man, as he reflects back on a past love. </li>',
		'<li> Press for the <a href="https://www.youtube.com/watch?v=FUS_Q7FsfqU"> Trailer </a> </li>'
)
});

 $("#romance").on("click", "#but2", function() {
	$("#details2").append(
		'<li> rating: 7.7 </li>', 
		'<li> Year: 2014 </li>',
		'<li> Description: A look at the relationship between the famous physicist Stephen Hawking and his wife. </li>',
		'<li> Press for the <a href="https://www.youtube.com/watch?v=Salz7uGp72c"> Trailer </a> </li>'
)
});

 $("#romance").on("click", "#but3", function() {
	$("#details3").append(
		'<li> rating: 7.7 </li>', 
		'<li> Year: 2014 </li>',
		'<li> Description: Two teenage cancer patients begin a life-affirming journey to visit a reclusive author in Amsterdam. </li>',
		'<li> Press for the <a href="https://www.youtube.com/watch?v=9ItBvH5J6ss"> Trailer </a> </li>'
)
});

 $("#romance").on("click", "#but4", function() {
	$("#details4").append(
		'<li> rating: 5.6 </li>', 
		'<li> Year: 2019 </li>',
		'<li> Description: When city girl Gabriela spontaneously enters a contest and wins a rustic New Zealand inn, she teams up with bighearted contractor Jake Taylor to fix and flip it. </li>',
		'<li> Press for the <a href="https://www.youtube.com/watch?v=P9vXNloQfTM"> Trailer </a> </li>'
)
});

$("#romance").on("click", "#but5", function() {
	$("#details5").append(
		'<li> rating: 7.7 </li>', 
		'<li> Year: 2018 </li>',
		'<li> Description: A musician helps a young singer find fame as age and alcoholism send his own career into a downward spiral. </li>',
		'<li> Press for the <a href="https://www.youtube.com/watch?v=nSbzyEJ8X9E"> Trailer </a> </li>'
)
});

 $("#romance").on("click", "#but6", function() {
	$("#details6").append(
		'<li> rating: 6.9 </li>', 
		'<li> Year: 1970 </li>',
		'<li> Description: A boy and a girl from different backgrounds fall in love regardless of their upbringing - and then tragedy strikes. </li>',
		'<li> Press for the <a href="https://www.youtube.com/watch?v=eprwTDVTEb8"> Trailer </a> </li>'
)
});

 $("#romance").on("click", "#but7", function() {
	$("#details7").append(
		'<li> rating: 5.6 </li>', 
		'<li> Year: 2015 </li>',
		'<li> Description: A young couple, bound by a seemingly ideal love, begin to unravel as unexpected opportunities spin them down a volatile and violent path and threaten the future they had always imagined. </li>',
		'<li> Press for the <a href="https://www.youtube.com/watch?v=xvPLshbpy5M"> Trailer </a> </li>'
)
});

 $("#romance").on("click", "#but8", function() {
	$("#details8").append(
		'<li> rating: 7.1 </li>', 
		'<li> Year: 2017 </li>',
		'<li> Description: The inspiring true love story of Robin (Andrew Garfield) and Diana Cavendish (Claire Foy), an adventurous couple who refuse to give up in the face of a devastating disease. Their heartwarming celebration of human possibility marks the directorial debut of Andy Serkis. </li>',
		'<li> Press for the <a href="https://www.youtube.com/watch?v=JycCFypvgmI"> Trailer </a> </li>'
)
});

//=======================================================================

$("#romance").on("click", "#bt1", function() {
	$("#deta1").append(
		'<li> rating: 7.1 </li>', 
		'<li> Year: 2015 </li>',
		'<li> Description: The lives of a young couple intertwine with a much older man, as he reflects back on a past love. </li>',
		'<li> Press for the <a href="https://www.youtube.com/watch?v=FUS_Q7FsfqU"> Trailer </a> </li>'
)
});

 $("#romance").on("click", "#bt2", function() {
	$("#deta2").append(
		'<li> rating: 7.7 </li>', 
		'<li> Year: 2014 </li>',
		'<li> Description: A look at the relationship between the famous physicist Stephen Hawking and his wife. </li>',
		'<li> Press for the <a href="https://www.youtube.com/watch?v=Salz7uGp72c"> Trailer </a> </li>'
)
});

 $("#romance").on("click", "#bt3", function() {
	$("#deta3").append(
		'<li> rating: 7.7 </li>', 
		'<li> Year: 2014 </li>',
		'<li> Description: Two teenage cancer patients begin a life-affirming journey to visit a reclusive author in Amsterdam. </li>',
		'<li> Press for the <a href="https://www.youtube.com/watch?v=9ItBvH5J6ss"> Trailer </a> </li>'
)
});

 $("#romance").on("click", "#bt4", function() {
	$("#deta4").append(
		'<li> rating: 5.6 </li>', 
		'<li> Year: 2019 </li>',
		'<li> Description: When city girl Gabriela spontaneously enters a contest and wins a rustic New Zealand inn, she teams up with bighearted contractor Jake Taylor to fix and flip it. </li>',
		'<li> Press for the <a href="https://www.youtube.com/watch?v=P9vXNloQfTM"> Trailer </a> </li>'
)
});

$("#romance").on("click", "#bt5", function() {
	$("#deta5").append(
		'<li> rating: 7.7 </li>', 
		'<li> Year: 2018 </li>',
		'<li> Description: A musician helps a young singer find fame as age and alcoholism send his own career into a downward spiral. </li>',
		'<li> Press for the <a href="https://www.youtube.com/watch?v=nSbzyEJ8X9E"> Trailer </a> </li>'
)
});

 $("#romance").on("click", "#bt6", function() {
	$("#deta6").append(
		'<li> rating: 6.9 </li>', 
		'<li> Year: 1970 </li>',
		'<li> Description: A boy and a girl from different backgrounds fall in love regardless of their upbringing - and then tragedy strikes. </li>',
		'<li> Press for the <a href="https://www.youtube.com/watch?v=eprwTDVTEb8"> Trailer </a> </li>'
)
});

 $("#romance").on("click", "#bt7", function() {
	$("#deta7").append(
		'<li> rating: 5.6 </li>', 
		'<li> Year: 2015 </li>',
		'<li> Description: A young couple, bound by a seemingly ideal love, begin to unravel as unexpected opportunities spin them down a volatile and violent path and threaten the future they had always imagined. </li>',
		'<li> Press for the <a href="https://www.youtube.com/watch?v=xvPLshbpy5M"> Trailer </a> </li>'
)
});

 $("#romance").on("click", "#bt8", function() {
	$("#deta8").append(
		'<li> rating: 7.1 </li>', 
		'<li> Year: 2017 </li>',
		'<li> Description: The inspiring true love story of Robin (Andrew Garfield) and Diana Cavendish (Claire Foy), an adventurous couple who refuse to give up in the face of a devastating disease. Their heartwarming celebration of human possibility marks the directorial debut of Andy Serkis. </li>',
		'<li> Press for the <a href="https://www.youtube.com/watch?v=JycCFypvgmI"> Trailer </a> </li>'
)
});
