function telephoneWords(digitString) {
  		  var keypadMap = [[],['a','b','c'],['d','e','f'],['g','h','i'],['j','k','l'],
                    ['m','n','o'],['p','q','r','s'],['t','u','v'],
                    ['w','x','y','z']];
        var letters = [];
        for(var i=0; i<digitString.length; i++) {
            letters.push(keypadMap[digitString[i]]);
        }

        var progress = 0;
        var currentWord = '';
        var limit = digitString.length;
        var foundWords = [];

        var value = recursion(letters, progress, currentWord, limit,
        foundWords);
  			console.log(value);
    }

function recursion(letters, progress, currentWord, limit, foundWords) {
        if(currentWord.length >= limit) {
            if(currentWord.length == limit){
                foundWords.push(currentWord);
            }
            return foundWords;
        }else{
            //iterating button presses
            for(var i=0; i<letters.length; i++) {
                var currentLetters = letters[i];
                console.log(currentLetters);
                for(i = progress; i<letters.length; i++) {
                    currentWord = currentWord.concat(currentLetters[i]);
                    foundWords = recursion(letters.slice(1), i,
                    currentWord, limit, foundWords);
                }
            }
        }
        return foundWords;
	}