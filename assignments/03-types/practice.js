// Write a function called isDivisibleBy3 which returns `true` if a number is
// divisible by 3, and `false` otherwise.
var isDivisibleBy3 = function (num) {
	if(num%3==0)
	{
		return true;
	}
	else
	{
		return false;
	}
};
console.log(isDivisibleBy3(9));


// Write a function that converts a Celsius temperature to Fahrenheit,
// and vice-versa. To convert from Celsius to Fahrenheit, you multiply
// the celsius value by 9 and then divide by 5. Then you add 32. To
// convert the other way, you subtract 32, and then multiply by
// 5. Finally, you divide by 9. The division operator in JavaScript is
// `/`.
var celsToFahr = function (cel) {
	return ((cel*9)/5+32);
};
console.log(celsToFahr(45));
var fahrToCels = function (fahr) {
	return (((fahr-32)*5)/9);
};
console.log(fahrToCels(45));

// Write a function called `randUpTo` that accepts a number and returns a random
// whole number between 0 and that number. For example:
//
//     randUpTo(10);
//     //=> 5
//
//     randUpTo(10);
//     //=> 9
//
//     randUpTo(1000);
//     //=> 561
//
//     randUpTo(1000);
//     //=> 236
var randUpTo = function (num) {
	return(Math.floor(Math.random()*num));
};
console.log(randUpTo(99));

// Write a function called `randBetween` that accepts two numbers representing a
// range and returns a random whole number between those two numbers.
var randBetween = function (min,max) {
	return Math.floor(Math.random()*(max-min)+min);
};
console.log(randBetween(5,10));

// The standard card suits are clubs, diamonds, hearts and spades. Write a
// function called isSuit that accepts a string and returns true if the input
// string is a suit, and false otherwise. Consider making a more robust function
// that will allow the case to be arbitrary, meaning "HEARTS", "hearts", and
// "hEaRtS" all return `true`. You can use the `toLowerCase` or `toUpperCase`
// string methods to achieve this.
//
//     isSuit("hearts");
//     //=> true
//
//     isSuit("HEARTS");
//     //=> true
//
//     isSuit("coins");
//     //=> false
var isSuit = function (suit) {
	suit=suit.toLowerCase();
	switch (suit)
	{
		case "clubs":
		{
			return true;
			break;
		}
		case "diamonds":
		{
			return true;
			break;
		}
		case "hearts":
		{
			return true;
			break;
		}
		case "spades":
		{
			return true;
			break;
		}
		default:
			return false;
	}
		
};
console.log(isSuit("HEaRTS"));


// The valid ranks for a card are two, three, four, five, six, seven, eight,
// nine, ten, jack, queen, king and ace. Write a function called `isRank` that
// accepts a string and returns true if it is a card rank.
//
//     isRank("jack");
//     //=> true
//
//     isRank("Queen");
//     //=> true
//
//     isRank("one");
//     //=> false
var isRank = function (str) {
	var arr=["two","three","four","five","six","seven","eight","nine","ten","jack","king","queen","ace"];
	var c=0;
	for(i=0;i<arr.length;i++)
	{
		if(str==arr[i])
		{
			 c+=1;
		}
	}
	if(c==1)
	{
		return true;
	}
	else
	{
		return false;
	}
};
console.log(isRank("ace"));

// Using the previous two functions, write a function called isCard that accepts
// two arguments, a rank and a suit, and returns true if they are valid for a card,
// and false otherwise.
var isCard = function (rank,suit) {
	if(isRank(rank) && isSuit(suit))
	{
		return true;
	}
	else
	{
		return false;
	}
};
console.log(isCard("one","hearts"));

// Write a function called `isCapitalized` that accepts a string and returns
// `true` if the first letter is a capital letter. How can you determine that?
// Remember that you can use strings in comparisons in the same way that you can
// use numbers, and the ordering is alphabetical (with capital letters having lower
// values than their lower-case counterparts).
var isCapitalized = function (str) {
	if(str[0]==str[0].toUpperCase())
	{
		return true;
	}
	else
	{
		return false;
	}
};
console.log(isCapitalized("apple"));

// Write a function that accepts a string representation of an HTML element (it
// can't have nested HTML elements) and returns the string contained inside. For
// example:
//
//     getHTMLText("<p>this is some text in a paragraph</p>");
//     //=> this is some text
//
//     getHTMLText("<li>this is a list item</li>");
//     //=> this is a list item
var getHTMLText = function (str) {
/*str=str.split("<");
console.log(str);
str=str.join("");
console.log(str);
str=str.split(">");
console.log(str[0]);*/
	var a=str.indexOf(">");
	var b=str.lastIndexOf("<");
	return str.slice(a+1,b);
	

};
console.log(getHTMLText("<ul>this is a list item</ul>"))

// Write a function that determines if a string represents an HTML element. This
// means it has to start with an opening HTML tag and end with a closing HTML tag.
//
//     isHTMLElement("<p>this is a paragraph</p>");
//     //=> true
//
//     isHTMLElement("this is a tweet!");
//     //=> false
//
//     isHTMLElement("<p>this is NOT an paragraph</div>");
//     //=> false
//
//     isHTMLElement("<li>this is an HTML list element</li>");
//     //=> true
//
// It may help in this case to look up the `lastIndexOf` method on the string
// objects.
var isHTMLElement = function (str) {
	var a=str.indexOf(">");
	var tag=str.slice(0,a+1);
	var b=str.lastIndexOf("<");
	var c=str.slice(b);
	if(c.slice(2,-1)==tag.slice(1,a))
	{
		return true;
	}
	else
	{
		return false;
	}
};
console.log(isHTMLElement("<em>this is NOT an paragraph</div>"))