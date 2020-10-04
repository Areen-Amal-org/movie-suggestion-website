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

var x = $("#enter").click(function() {
	$("#list").hide();
	$("body").css(
	"background-image", "url('images/unnamed.jpg')"
	).css("background-repeat", "repeat");
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
    else if(category[1] === $('#input').val()){
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
    else if(category[3] === $('#input').val()){
		$('#horror').append(
			'<li> Annabella<br><img src= "images/annabella.jpg" id="annabella"><br><button id="h1">Press For More Information</button><br><br><br><ul id ="detail1"</ul></li><br>',
			'<li> The Nun <br><img src= "images/the nun.jpg" id="nun"><br><button id="h2">Press For More Information</button><br><br><br><ul id ="detail2"</ul></li><br>',
			'<li> A Quiet Place <br><img src= "images/a quiet place.jpg" id="quiet"><br><button id="h3">Press For More Information</button><br><br><br><ul id ="detail3"</ul></li><br>',
			'<li> Get Out <br><img src= "images/get out.jpg" id="getout"><br><button id="h4">Press For More Information</button><br><br><br><ul id ="detail4"</ul></li><br> ',
			'<li> IT<br><img src= "images/it.jpg" id="it"> <br><button id="h5">Press For More Information</button><br><br><br><ul id ="detail5"</ul></li><br> ',
			'<li> The Conjuring <br><img src= "images/the conjuring.jpg" id="conjuring"><br><button id="h6">Press For More Information</button><br><br><br><ul id ="detail6"</ul></li><br>',
			'<li> Sinister <br><img src= "images/sinister.jpg" id="sinister"><br><button id="h7">Press For More Information</button><br><br><br><ul id ="detail7"</ul></li><br>')
	}
	else if(category[4]=== $('#input').val()) {
	    $('#comedy').append(
		   '<li> Blended <br><img src= "images/blended.jpg" id="blended"> <br><button id="c1">Press For More Information</button> <ul id="de1"> </ul> </li><br> ',
		   '<li> Brides Maids<br><img src= "images/bridesmaids.jpg" id="bridsmaids"><br><button id="c2">Press For More Information</button> <ul id="de2"> </ul> </li><br>',
		   '<li> GrownUps <br><img src= "images/grown ups.jpg" id="grownups"><br><button id="c3">Press For More Information</button> <ul id="de3"> </ul> </li><br> ',
		   '<li> We Are The Millers <br><img src= "images/millers.jpg" id="millers"><br><button id="c4">Press For More Information</button> <ul id="de4"> </ul> </li><br>',
		   '<li> Night School <br><img src= "images/Night-School.jpg" id="Night-School"><br><button id="c5">Press For More Information</button> <ul id="de5"> </ul> </li><br> ',
		   '<li> Ride Along <br><img src= "images/ride along.jpg" id="ride"> <br><button id="c6">Press For More Information</button> <ul id="de6"> </ul> </li><br>',
		   '<li> The Hustle <br><img src= "images/the hustle.jpg" id="hustle"> <br><button id="c7">Press For More Information</button> <ul id="de7"> </ul> </li><br>')
     }
     $("#home").append("<button id='f'> Back To Home </button>");
});

$("#home").click( function() {
		   $("#lists").hide();
	       $("#list").show();
	       $("body").css(
	"background-image", "url('images/pic4.jpg')"
	);
	     window.location.reload();
	     return x ; 
});


$("#romance").on("click", "#but1", function() {
	$("#details1").append(
		'<li> Rating: 7.1 </li>', 
		'<li> Year: 2015 </li>',
		'<li> Description: The lives of a young couple intertwine with a much older man, as he reflects back on a past love. </li>',
		'<li> Press For The <a href="https://www.youtube.com/watch?v=FUS_Q7FsfqU"> Trailer </a> </li>'
)
});

 $("#romance").on("click", "#but2", function() {
	$("#details2").append(
		'<li> Rating: 7.7 </li>', 
		'<li> Year: 2014 </li>',
		'<li> Description: A look at the relationship between the famous physicist Stephen Hawking and his wife. </li>',
		'<li> Press For The <a href="https://www.youtube.com/watch?v=Salz7uGp72c"> Trailer </a> </li>'
)
});

 $("#romance").on("click", "#but3", function() {
	$("#details3").append(
		'<li> Rating: 7.7 </li>', 
		'<li> Year: 2014 </li>',
		'<li> Description: Two teenage cancer patients begin a life-affirming journey to visit a reclusive author in Amsterdam. </li>',
		'<li> Press For The <a href="https://www.youtube.com/watch?v=9ItBvH5J6ss"> Trailer </a> </li>'
)
});

 $("#romance").on("click", "#but4", function() {
	$("#details4").append(
		'<li> Rating: 5.6 </li>', 
		'<li> Year: 2019 </li>',
		'<li> Description: When city girl Gabriela spontaneously enters a contest and wins a rustic New Zealand inn, she teams up with bighearted contractor Jake Taylor to fix and flip it. </li>',
		'<li> Press For The <a href="https://www.youtube.com/watch?v=P9vXNloQfTM"> Trailer </a> </li>'
)
});

$("#romance").on("click", "#but5", function() {
	$("#details5").append(
		'<li> Rating: 7.7 </li>', 
		'<li> Year: 2018 </li>',
		'<li> Description: A musician helps a young singer find fame as age and alcoholism send his own career into a downward spiral. </li>',
		'<li> Press For The <a href="https://www.youtube.com/watch?v=nSbzyEJ8X9E"> Trailer </a> </li>'
)
});

 $("#romance").on("click", "#but6", function() {
	$("#details6").append(
		'<li> Rating: 6.9 </li>', 
		'<li> Year: 1970 </li>',
		'<li> Description: A boy and a girl from different backgrounds fall in love regardless of their upbringing - and then tragedy strikes. </li>',
		'<li>Press For The <a href="https://www.youtube.com/watch?v=eprwTDVTEb8"> Trailer </a> </li>'
)
});

 $("#romance").on("click", "#but7", function() {
	$("#details7").append(
		'<li> Rating: 5.6 </li>', 
		'<li> Year: 2015 </li>',
		'<li> Description: A young couple, bound by a seemingly ideal love, begin to unravel as unexpected opportunities spin them down a volatile and violent path and threaten the future they had always imagined. </li>',
		'<li> Press For The<a href="https://www.youtube.com/watch?v=xvPLshbpy5M"> Trailer </a> </li>'
)
});

 $("#romance").on("click", "#but8", function() {
	$("#details8").append(
		'<li> Rating: 7.1 </li>', 
		'<li> Year: 2017 </li>',
		'<li> Description: The inspiring true love story of Robin (Andrew Garfield) and Diana Cavendish (Claire Foy), an adventurous couple who refuse to give up in the face of a devastating disease. Their heartwarming celebration of human possibility marks the directorial debut of Andy Serkis. </li>',
		'<li> Press For The <a href="https://www.youtube.com/watch?v=JycCFypvgmI"> Trailer </a> </li>'
)
});

//=======================================================================
$('#action').on("click" ,"#a1" , function(){
	$('#det1').append(
		'<li> Rating: 8.8</li>',
		'<li> Year: 2010</li>',
		'<li> Describtion: A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.</li>',
		'<li> Press For The <a href="https://www.youtube.com/watch?v=YoHD9XEInc0&ab_channel=MovieclipsidicTrailers"> Trailer </a> </li>')
});

$('#action').on("click" ,"#a2" , function(){
	$('#det2').append(
		'<li> Rating: 8.2</li>',
		'<li> Year: 2005</li>',
		'<li> In a future British tyranny, a shadowy freedom fighter, known only by the alias of "V", plots to overthrow it with the help of a young woman.</li>',
		'<li> Press For The<a href="https://www.youtube.com/watch?v=lSA7mAHolAw&ab_channel=MovieclipsClassicTrailers">Trailer</a></li>')
});

$('#action').on("click" ,"#a3" , function(){
	$('#det3').append(
		'<li> Rating: 9.0</li>',
		'<li> Year: 2008</li>',
		'<li> When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.</li>',
		'<li>Press For The<a href="https://www.youtube.com/watch?v=EXeTwQWrcwY&ab_channel=MovieclipsClassicTrailers">Trailer</a></li>')
});

$('#action').on("click" ,"#a4" , function(){
	$('#det4').append(
		'<li> Rating: 7.2</li>',
		'<li> Year: 2012</li>',
		'<li> Katniss Everdeen voluntarily takes her younger sister"s place in the Hunger Games: a televised competition which two teenagers from each of the twelve Districts of Panem are chosen at random to fight to the death</li>',
		'<li>Press For The<a href="https://www.youtube.com/watch?v=mfmrPu43DF8&ab_channel=LionsgateMovies">Trailer</a></li>')
});

$('#action').on("click" ,"#a5" , function(){
	$('#det5').append(
		'<li> Rating: 8.0</li>',
		'<li> Year: 2012</li>',
		'<li> Earth"s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.</li>',
		'<li>Press For The<a href="https://www.youtube.com/watch?v=eOrNdBpGMv8&ab_channel=MarvelEntertainment">Trailer</a></li>')
});

$('#action').on("click" ,"#a6" , function(){
	$('#det6').append(
		'<li> Rating: 7.0</li>',
		'<li> Year: 2010</li>',
		'<li> When his peaceful life is threatened by a high-tech assassin, former black-ops agent Frank Moses reassembles his old team in a last-ditch effort to survive and uncover his assailants.</li>',
		'<li>Press For The<a href="https://www.youtube.com/watch?v=-JZ_moituIo&ab_channel=MovieclipsClassicTrailers">Trailer</a></li>')
});

$('#action').on("click" ,"#a7" , function(){
	$('#det7').append(
		'<li> Rating: 7.2</li>',
		'<li> Year: 2014</li>',
		'<li>An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.</li>',
		'<li>Press For The<a href="https://www.youtube.com/watch?v=2AUmvWm5ZDQ&ab_channel=LionsgateMovies">Trailer</a></li>')
});

$('#action').on("click" ,"#a8" , function(){
	$('#det8').append(
		'<li> Rating: 7.5</li>',
		'<li> Year: 2010</li>',
		'<li> A longtime thief, planning his next job, tries to balance his feelings for a bank manager connected to an earlier heist, and a hell-bent F.B.I Agent looking to bring him and his crew down.</li>',
		'<li>Press For The<a href="youtube.com/watch?v=WcXt9aUMbBk&ab_channel=Movieclips">Trailer</a></li>')
});
//=======================================================================

$("#drama").on("click", "#bt1", function() {
	$("#deta1").append(
		'<li> Rating: 7.4 </li>', 
		'<li> Year: 2014 </li>',
		'<li> Description: Big-city lawyer Hank Palmer returns to his childhood home where his father, the town`s judge, is suspected of murder. Hank sets out to discover the truth and, along the way, reconnects with his estranged family. </li>',
		'<li> Press For The <a href="https://www.youtube.com/watch?v=ZBvK6ni97W8"> Trailer </a> </li>'
)
});

 $("#drama").on("click", "#bt2", function() {
	$("#deta2").append(
		'<li> Rating: 8.3 </li>', 
		'<li> Year: 1997 </li>',
		'<li> Description: Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life. </li>',
		'<li> Press For The <a href="https://www.youtube.com/watch?v=PaZVjZEFkRs"> Trailer </a> </li>'
)
});

 $("#drama").on("click", "#bt3", function() {
	$("#deta3").append(
		'<li> Rating: 6.4 </li>', 
		'<li> Year: 2013 </li>',
		'<li> Description: A father goes undercover for the DEA in order to free his son, who was imprisoned after being set up in a drug deal. </li>',
		'<li>Press For The<a href="https://www.youtube.com/watch?v=rieI5g9fgRc"> Trailer </a> </li>'
)
});

 $("#drama").on("click", "#bt4", function() {
	$("#deta4").append(
		'<li> Rating: 7.1 </li>', 
		'<li> Year: 2008 </li>',
		'<li> Description: A young man who was sentenced to seven years in prison for robbing a post office ends up spending three decades in solitary confinement. During this time, his own personality is supplanted by his alter-ego, Charles Bronson. </li>',
		'<li> Press For The<a href="https://www.youtube.com/watch?v=paa9knyJKrs"> Trailer </a> </li>'
)
});

$("#drama").on("click", "#bt5", function() {
	$("#deta5").append(
		'<li> Rating: 5.8 </li>', 
		'<li> Year: 2020 </li>',
		'<li> Description: A young man who committed a homicide deals with the repercussions of his action. </li>',
		'<li> Press For The <a href="https://www.youtube.com/watch?v=BC9Kk8Np9-Y"> Trailer </a> </li>'
)
});

 $("#drama").on("click", "#bt6", function() {
	$("#deta6").append(
		'<li> Rating: 6.3 </li>', 
		'<li> Year: 2015 </li>',
		'<li> Description: When disgraced New York Times reporter Michael Finkel meets accused killer Christian Longo - who has taken on Finkel`s identity - his investigation morphs into a game of cat-and-mouse. </li>',
		'<li> Press For The <a href="https://www.youtube.com/watch?v=Y_NiP_bqlns"> Trailer </a> </li>'
)
});

 $("#drama").on("click", "#bt7", function() {
	$("#deta7").append(
		'<li> Rating: 6.9 </li>', 
		'<li> Year: 2015 </li>',
		'<li> Description: The true story of Whitey Bulger, the brother of a state senator and the most infamous violent criminal in the history of South Boston, who became an FBI informant to take down a Mafia family invading his turf. </li>',
		'<li>Press For The <a href="https://www.youtube.com/watch?v=R_F-lVhSfx8"> Trailer </a> </li>'
)
});

 $("#drama").on("click", "#bt8", function() {
	$("#deta8").append(
		'<li> Rating: 6.8 </li>', 
		'<li> Year: 2005 </li>',
		'<li> Description: When their adoptive mother is gunned down in a store robbery the `four brothers` investigate the murder for themselves & look for the killers, but not all is what it seems. </li>',
		'<li> Press For The<a href="https://www.youtube.com/watch?v=muoBmfBEO0E"> Trailer </a> </li>'
)
});

//==========================================================
$('#horror').on("click" ,"#h1" , function(){
	$('#detail1').append(
		'<li> Rating: 5.4 </li>',
		'<li> Year: 2010</li>',
		'<li> Description: A couple begins to experience terrifying supernatural occurrences involving a vintage doll shortly after their home is invaded by satanic cultists.</li>',
		'<li> Press For The <a href="https://www.youtube.com/watch?v=paFgQNPGlsg&ab_channel=WarnerBros.Pictures">Trailer</a></li>')
});

$('#horror').on("click" ,"#h2" , function(){
	$('#detail2').append(
		'<li> Rating: 5.3 </li>',
		'<li> Year: 2018</li>',
		'<li> Description: A priest with a haunted past and a novice on the threshold of her final vows are sent by the Vatican to investigate the death of a young nun in Romania and confront a malevolent force in the form of a demonic nun</li>',
		'<li> Press For The <a href="https://www.youtube.com/watch?v=zwAM5UnGd2s&ab_channel=FilmSelectTrailer">Trailer</a></li>')
});

$('#horror').on("click" ,"#h3" , function(){
	$('#detail3').append(
		'<li> Rating: 7.5 </li>',
		'<li> Year: 2018</li>',
		'<li> Description: A priest with a haunted past and a novice on the threshold of her final vows are sent by the Vatican to investigate the death of a young nun in Romania and confront a malevolent force in the form of a demonic nun</li>',
		'<li>Press For The<a href="https://www.youtube.com/watch?v=WR7cc5t7tv8&ab_channel=ParamountPictures">Trailer</a></li>')
});

$('#horror').on("click" ,"#h4" , function(){
	$('#detail4').append(
		'<li> Rating: 7.7 </li>',
		'<li> Year: 2018</li>',
		'<li> Description: A young African-American visits his white girlfriend"s parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.</li>',
		'<li> Press For The<a href="https://www.youtube.com/watch?v=DzfpyUB60YY&ab_channel=MovieclipsTrailers">Trailer</a></li>')
});

$('#horror').on("click" ,"#h5" , function(){
	$('#detail5').append(
		'<li> Rating: 5.3 </li>',
		'<li> Year: 2017</li>',
		'<li> Description: In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry, their small Maine town.</li>',
		'<li> Press For The<a href="https://www.youtube.com/watch?v=hAUTdjf9rko&ab_channel=MovieclipsTrailers">Trailer</a></li>')
});

$('#horror').on("click" ,"#h6" , function(){
	$('#detail6').append(
		'<li> Rating: 7.5 </li>',
		'<li> Year: 2018</li>',
		'<li> Description: A priest with a haunted past and a novice on the threshold of her final vows are sent by the Vatican to investigate the death of a young nun in Romania and confront a malevolent force in the form of a demonic nun</li>',
		'<li> Press For The<a href="https://www.youtube.com/watch?v=zwAM5UnGd2s&ab_channel=FilmSelectTrailer">Trailer</a></li>')
});

$('#horror').on("click" ,"#h7" , function(){
	$('#detail7').append(
		'<li> Rating: 6.8 </li>',
		'<li> Year: 2012 </li>',
		'<li> Description: Washed-up true crime writer Ellison Oswalt finds a box of super 8 home movies in his new home that suggest the murder that he is currently researching is the work of a serial killer whose work dates back to the 1960s.</li>',
		'<li> Press For The<a href="https://www.youtube.com/watch?v=_kbQAJR9YWQ&ab_channel=MovieclipsTrailers">Trailer</a></li>')
});
//===============================================================

$("#comedy").on("click", "#c1", function() {
	$("#de1").append(
		'<li> Rating: 6.5 </li>',
		'<li> Year: 2014 </li>',
		'<li> Description: After a bad blind date, a man and woman find themselves stuck together at a resort for families, where their attraction grows as their respective kids benefit from the burgeoning relationship. </li>',
		'<li> Press for the <a href="https://www.youtube.com/watch?v=8MuWt2X59fo&ab_channel=MovieclipsTrailers"> Trailer </a> </li>')
});

$("#comedy").on("click", "#c2", function() {
	$("#de2").append(
		'<li> Rating: 6.8 </li>',
		'<li> Year: 2011 </li>',
		'<li> Description: Competition between the maid of honor and a bridesmaid, over who is the bride"s best friend, threatens to upend the life of an out-of-work pastry chef.</li>',
		'<li> Press for the <a href="https://www.youtube.com/watch?v=FNppLrmdyug&ab_channel=UniversalPictures"> Trailer </a> </li>')
});

$("#comedy").on("click", "#c3", function() {
	$("#de3").append(
		'<li> Rating: 5.9 </li>',
		'<li> Year: 2010 </li>',
		'<li> Description: After their high school basketball coach passes away, five good friends and former teammates reunite for a Fourth of July holiday weekend.</li>',
		'<li> Press for the <a href="https://www.youtube.com/watch?v=e01NVCveGkg&ab_channel=SonyPicturesEntertainment"> Trailer </a> </li>')
});

$("#comedy").on("click", "#c4", function() {
	$("#de4").append(
		'<li> Rating: 7.0 </li>',
		'<li> Year: 2013 </li>',
		'<li> Description: A veteran pot dealer creates a fake family as part of his plan to move a huge shipment of weed into the U.S. from Mexico.</li>',
		'<li> Press for the <a href="https://www.youtube.com/watch?v=0Vsy5KzsieQ&ab_channel=WarnerBros.Pictures"> Trailer </a> </li>')
});

$("#comedy").on("click", "#c5", function() {
	$("#de5").append(
		'<li> Rating: 6.5 </li>',
		'<li> Year: 2018 </li>',
		'<li> Description: A group of high school dropouts are forced to attend night school in hope that they"ll pass the GED exam to finish high school. </li>',
		'<li> Press for the <a href="https://www.youtube.com/watch?v=t9QtXGirWf0&ab_channel=UniversalPictures"> Trailer </a> </li>')
});

$("#comedy").on("click", "#c6", function() {
	$("#de6").append(
		'<li> Rating: 6.2 </li>',
		'<li> Year: 2014 </li>',
		'<li> Description: Security guard Ben must prove himself to his girlfriend"s brother, top police officer James. He rides along James on a 24-hour patrol of Atlanta.</li>',
		'<li> Press for the <a href="https://www.youtube.com/watch?v=5klp6rkHIks&ab_channel=MovieclipsTrailers"> Trailer </a> </li>')
});

$("#comedy").on("click", "#c7", function() {
	$("#de7").append(
		'<li> Rating: 5.4 </li>',
		'<li> Year: 2019 </li>',
		'<li> Description: Two con women - one low rent and the other high class - team up to take down the men who have wronged them.</li>',
		'<li> Press for the <a href="https://www.youtube.com/watch?v=_j5hwooOHVE&ab_channel=MGM"> Trailer </a> </li>')
});
