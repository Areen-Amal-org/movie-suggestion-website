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
			 $('#action').append('<li id= "Action1"> Inception 2010 <br><img src= "Inception.jpg" id="inception"> </li> <li id="Action2">V For Vendetta <br> <img src= "V for Vendetta.png" id="V"></li><li id="Action3">The Dark Knight<br><img src="the dark knight.jpg" id ="The Dark Knight"></li><li id= "Action4">The Hunger Games <br><img src="the hunger games.jpg" id ="the hunger games"></li><li id ="Action5">Avengers<br><img src="avengers.jpg" id ="avengers"></li> <li id ="Action6">Red<br><img src="red.jpg" id ="red"></li><li id ="Action7">John Wick<br><img src="john wick.jpg" id ="john"></li><li id ="Action8">Town<br><img src="town.jpg" id ="town"></li>')
}
else if(category[3]=== $('#input').val()){
		$('#horror').append('<li id="Horror1" > Annabella <br><img src= "annabella.jpg" id="annabella"> </li> <li id="Horror2" > The Nun <br><img src= "the nun.jpg" id="nun"> </li> <li id="Horror3" > A Quiet Place <br><img src= "a quiet place.jpg" id="quiet"> </li> <li id="Horror4" > Get Out <br><img src= "get out.jpg" id="getout"></li> <li id="Horror5" > IT<br><img src= "it.jpg" id="it"> </li> <li id="Horror6" > The Conjuring <br><img src= "the conjuring.jpg" id="conjuring"> </li> <li id="Horror7" > Sinister <br><img src= "sinister.jpg" id="sinister"> </li>')
	}

else if(category[4]=== $('#input').val()){
	$('#comedy').append('<li id="comedy1" > Blended <br><img src= "blended.jpg" id="blended"> </li> <li id="comedy2" > Brides Maids<br><img src= "bridesmaids.jpg" id="bridsmaids"> </li> <li id="comedy3" > GrownUps <br><img src= "grown ups.jpg" id="grownups"> </li> <li id="comedy4" > We Are The Millers <br><img src= "millers.jpg" id="millers"> </li> <li id="comedy5" > Night School <br><img src= "Night-School.jpg" id="Night-School"> </li> <li id="comedy6" > Ride Along <br><img src= "ride along.jpg" id="ride"> </li> <li id="comedy7" > The Hustle <br><img src= "the hustle.jpg" id="hustle"> </li>')
}
})

/*$( "li #Action1" ).find( "li" ).click(function(){
alert('jjjj')
})*/
/*	$('#pInception').append('<p> jkjfsdh</p><a herf="https://www.youtube.com/watch?v=6EaJ6J_BVCk&list=RDMMTAPh_duglTQ&index=3&ab_channel=FINNEAS">trailer</a>')
*/