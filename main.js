console.log("fjfj")
function each (array, func){
  for ( var i =0 ; i < array.length; i++){
    func(array[i]);
  }
}
var category=['Romance','Action','Drama','Horror','Comedy']
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

$('ol li #ai').click(function(){
	console.log("fgjhjk")
})