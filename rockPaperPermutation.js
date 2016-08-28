function rockPaperPermutation (numRounds) {
	var results = [];
	var choices = ['r', 'p', 's'];
	var game = game || [];
	if (numRounds === 0) { return results; };

 	var rockPaperScissors = function(game) {
 	      // Base Case
        if(game.length === numRounds) {
            results.push(game);
            return;
        }
        // Iterate through Choices
        for(var i = 0; i < choices.length; i++) {
            rockPaperScissors(game.concat(choices[i]));
      	}
  	};
  	
  	rockPaperScissors([]);

  	for (var i=0; i<results.length; i++) {
  	    results[i] = results[i].join("");
  	}
  	return results;
}