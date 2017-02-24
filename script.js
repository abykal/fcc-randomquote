$(document).ready(function(){

  var quote = "";
  var author = "";

  //First call to get the quote while initial loading
  getQuote();

	//getQuote function definition http://quotes.stormconsultancy.co.uk/random.json
	function getQuote(){
		$.getJSON("http://quotes.stormconsultancy.co.uk/random.json",
						 function(json){

								quote = json.quote;
								author = json.author;

								console.log(quote.length);
								loadData();
		})

	}

	function loadData() {
		if (quote.length > 130) {
			getQuote();
		} else {
			$('#quoteMsg').html(quote);

			if (author){
				$('#quoteAuthor').html(author);
			}
			else{
				 $('#quoteAuthor').html('Anonymous');
			}
		}
	}


	// New quote at every next button click
  $('#nextQuote').on('click', function(event){
    event.preventDefault();
    console.log("QuoteDisplay");
    getQuote();
  });

  //Share quote via Twitter
  $('#tweetQuote').on('click', function(event) {
    event.preventDefault();
    console.log("TweetDisplay");
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + ' by ' + author));
  });


});
