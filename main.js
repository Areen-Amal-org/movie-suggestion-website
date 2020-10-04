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
			 	'<li> Inception 2010 <br><img src= "Inception.jpg" id="inception"><br><button class ="bt1">Press For More Information</button></li><br>' ,
			 	'<li>V For Vendetta <br><img src= "V for Vendetta.png" id="V"><br> <button class="bt1">Press For More Information</button></li><br>',
			 	'<li>The Dark Knight<br><img src="the dark knight.jpg" id ="The Dark Knight"><br><button class="bt1">Press For More Information</button></li><br>',
			 	'<li>The Hunger Games <br><img src="the hunger games.jpg" id ="the hunger games"><br> <button class="bt1">Press For More Information</button></li><br>',
			 	'<li>Avengers<br><img src="avengers.jpg" id ="avengers"> <br><button class ="bt1">Press For More Information</button></li><br> ',
			 	'<li>Red<br><img src="red.jpg" id ="red"><br> <button class ="bt1">Press For More Information</button></li><br>' ,
			 	'<li>John Wick<br><img src="john wick.jpg" id ="john"><br><button class="bt1">Press For More Information</button></li><br>',
			 	'<li>Town<br><img src="town.jpg" id ="town"><br><button class="bt1">Press For More Information</button></li><br>')
}
else if(category[3]=== $('#input').val()){
		$('#horror').append(
			'<li> Annabella<br><img src= "annabella.jpg" id="annabella"><br><button class="bt1">Press For More Information</button></li><br>',
			'<li> The Nun <br><img src= "the nun.jpg" id="nun"><br><button class="bt1">Press For More Information</button></li><br>',
			'<li> A Quiet Place <br><img src= "a quiet place.jpg" id="quiet"><br><button class="bt1">Press For More Information</button></li><br>',
			'<li> Get Out <br><img src= "get out.jpg" id="getout"><br><button class="bt1">Press For More Information</button></li><br> ',
			'<li> IT<br><img src= "it.jpg" id="it"> <br><button class="bt1">Press For More Information</button></li><br> ',
			'<li> The Conjuring <br><img src= "the conjuring.jpg" id="conjuring"><br><button class="bt1">Press For More Information</button></li><br>',
			'<li> Sinister <br><img src= "sinister.jpg" id="sinister"><br><button class="bt1">Press For More Information</button></li><br>')

	}else if (category[0] === $('#input').val()) {
		$("#romance").append(
			'<li> The Longest Ride <br> <img src= "images/ride.jpg" id="image1"> <br> <button class="bt"> Press For More Information </button> <br><br><br> </li>', 
			'<li> The Theory of Everything <br> <img src="images/theory.jpg" id="image2"> <br> <button class="bt"> Press For More Information </button> <br><br><br> </li> ',
			'<li> The Fault in Our Stars <br> <img src="images/stars.jpg" id="image3"> <br> <button class="bt"> Press For More Information </button> <br><br><br> </li> ',
			'<li> Falling Inn Love <br> <img src="images/inn.jpg" id="image4"> <br> <button class="bt"> Press For More Information </button> <br><br><br> </li> ',
			'<li> A Star Is Born <br> <img src="images/born.png" id ="image5"> <br> <button class="bt"> Press For More Information </button> <br><br><br> </li> ',
			'<li> Love Story <br> <img src="images/love.jpg" id ="image6"> <br> <button class="bt"> Press For More Information </button> <br><br><br> </li> ',
			'<li> 6 Years <br> <img src="images/6.jpg" id ="image7"> <br> <button class="bt"> Press For More Information </button> <br><br><br> </li> ',
			'<li> Breathe <br> <img src="images/breathe.jpg" id ="image8"> <br> <button class="bt"> Press For More Information </button> <br><br><br> </li>')
	} 
    else if (category[2] === $('#input').val()) {
		$('#drama').append(
			'<li> The Judge <br> <img src= "images/Judge.jpg" id="i1"> <br> <button class="bt"> Press For More Information </button> <br><br><br> </li>', 
			'<li> Good Will Hunting <br> <img src= "images/good.jpg" id="i2"> <br> <button class="bt"> Press For More Information </button> <br><br><br> </li>',
			'<li> Snitch <br> <img src="images/snitch.jpg" id ="i3"> <br> <button class="bt"> Press For More Information </button> <br><br><br> </li>',
			'<li> Bronson <br> <img src="images/bronson.jpg" id ="i4"> <br> <button class="bt"> Press For More Information </button> <br><br><br> </li>',
			'<li> All Day and a Night <br> <img src="images/all.jpg" id ="i5"> <br> <button class="bt"> Press For More Information </button> <br><br><br> </li>',
			'<li> True Story <br> <img src="images/true.jpg" id ="i6"> <br> <button class="bt"> Press For More Information </button> <br><br><br> </li>',
			'<li> Black Mass <br> <img src="images/black.jpg" id ="i7"> <br> <button class="bt"> Press For More Information </button> <br><br><br> </li>',
			'<li> Four Brothers <br> <img src="images/four.jpg" id ="i8"> <br> <button class="bt"> Press For More Information </button> <br><br><br> </li>')
    }
else if(category[4]=== $('#input').val()){
	$('#comedy').append(
		'<li> Blended <br><img src= "blended.jpg" id="blended"> <br><button class="bt1">Press For More Information</button></li><br> ',
		'<li> Brides Maids<br><img src= "bridesmaids.jpg" id="bridsmaids"><br><button class="bt1">Press For More Information</button></li><br>',
		'<li> GrownUps <br><img src= "grown ups.jpg" id="grownups"><br><button class="bt1">Press For More Information</button></li><br> ',
		'<li> We Are The Millers <br><img src= "millers.jpg" id="millers"><br><button class="bt1">Press For More Information</button></li><br>',
		'<li> Night School <br><img src= "Night-School.jpg" id="Night-School"><br><button class="bt1">Press For More Information</button></li><br> ',
		'<li> Ride Along <br><img src= "ride along.jpg" id="ride"> <br><button class="bt1">Press For More Information</button></li><br>',
		'<li> The Hustle <br><img src= "the hustle.jpg" id="hustle"> <br><button class="bt1">Press For More Information</button></li><br>')
}
})
