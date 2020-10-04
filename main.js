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
		$("#romance").append('<li id="Romance1"> The Longest Ride <br> <img src= "images/ride.jpg" id="ride"> </li> <li id="romance2"> The Theory of Everything <br> <img src="images/theory.jpg" id="th"></li> <li id="romance3"> The Fault in Our Stars <br><img src="images/stars.jpg" id="image3"></li> <li id="romance4">Falling Inn Love <br> <img src="images/inn.jpg" id="img4"</li><li id ="romance5">A Star Is Born<br><img src="images/born.png" id ="image5"></li> <li id ="romance6">Love Story<br><img src="images/love.jpg" id ="image6"></li><li id ="romance7">6 Years<br><img src="images/6.jpg" id ="image7"></li><li id ="romance8">Breathe<br><img src="images/breathe.jpg" id ="image8"></li>')
	} 
	else if (category[1] === $('#input').val()) {
		$('#action').append('<li id="Action1"> Inception 2010 <br><img src= "images/Inception.jpg" id="inception"> </li> <li id="Action2">V For Vendetta <br> <img src= "images/V for Vendetta.png" id="V"></li><li id="Action3">The Dark Knight<br><img src="images/the dark knight.jpg" id ="The Dark Knight"></li><li id= "Action4">The Hunger Games <br><img src="images/the hunger games.jpg" id ="the hunger games"></li><li id ="Action5">Avengers<br><img src="images/avengers.jpg" id ="avengers"></li> <li id ="Action6">Red<br><img src="images/red.jpg" id ="red"></li><li id ="Action7">John Wick<br><img src="images/john wick.jpg" id ="john"></li><li id ="Action8">Town<br><img src="images/town.jpg" id ="town"></li>')
    }
    else if (category[2] === $('#input').val()) {
		$('#drama').append('<li id="Drama1"> The Judge <br><img src= "images/Judge.jpg" id="i1"> </li> <li id="drama2"> Good Will Hunting<br> <img src= "images/good.jpg" id="i2"></li><li id="drama3">Snitch<br><img src="images/snitch.jpg" id ="i3"></li><li id= "drama4">Bronson<br><img src="images/bronson.jpg" id ="i4"></li><li id ="drama5">All Day and a Night<br><img src="images/all.jpg" id ="i5"></li> <li id ="drama6">True Story<br><img src="images/true.jpg" id ="i6"></li><li id ="drama7">Black Mass<br><img src="images/black.jpg" id ="i7"></li><li id ="drama8">Four Brothers<br><img src="images/four.jpg" id ="i8"></li>')
    }
    else if (category[3]=== $('#input').val()) {
	    $('#horror').append('<li id="Horror1" > Annabella <br><img src= "images/annabella.jpg" id="annabella"> </li> <li id="Horror2" > The Nun <br><img src= "images/the nun.jpg" id="nun"> </li> <li id="Horror3" > A Quiet Place <br><img src= "images/a quiet place.jpg" id="quiet"> </li> <li id="Horror4" > Get Out <br><img src= "images/get out.jpg" id="getout"></li> <li id="Horror5" > IT<br><img src= "images/it.jpg" id="it"> </li> <li id="Horror6" > The Conjuring <br><img src= "images/the conjuring.jpg" id="conjuring"> </li> <li id="Horror7" > Sinister <br><img src= "images/sinister.jpg" id="sinister"> </li>')
	}
	else if (category[4]=== $('#input').val()) {
	    $('#comedy').append('<li id="comedy1" > Blended <br><img src= "images/blended.jpg" id="blended"> </li> <li id="comedy2" > Brides Maids<br><img src= "images/bridesmaids.jpg" id="bridsmaids"> </li> <li id="comedy3" > GrownUps <br><img src= "images/grown ups.jpg" id="grownups"> </li> <li id="comedy4" > We Are The Millers <br><img src= "images/millers.jpg" id="millers"> </li> <li id="comedy5" > Night School <br><img src= "images/Night-School.jpg" id="Night-School"> </li> <li id="comedy6" > Ride Along <br><img src= "images/ride along.jpg" id="ride"> </li> <li id="comedy7" > The Hustle <br><img src= "images/the hustle.jpg" id="hustle"> </li>')
    }
});



/*$( "li #Action1" ).find( "li" ).click(function(){
alert('jjjj')
})*/
/*	$('#pInception').append('<p> jkjfsdh</p><a herf="https://www.youtube.com/watch?v=6EaJ6J_BVCk&list=RDMMTAPh_duglTQ&index=3&ab_channel=FINNEAS">trailer</a>')
*/