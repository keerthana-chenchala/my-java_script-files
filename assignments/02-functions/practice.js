// (example) Write a function that accepts two number arguments and adds them
// together.

var add = function (a,b) {
	return a+b;
};

console.log(add(18,20));


// Create a function that takes in a cost and a quantity and outputs the total
// pre-tax cost for that quantity of items at the given price. For example
//
//     var preTaxTotal = totalCost(5, 5.99); // 5 items at 5.99
//     //=> 29.950000000000003
var totalCost = function (cost,total) {
	return cost*total;
};
console.log(totalCost(5,5.99));

// Write a function that takes a rank and a suit as input, and returns a string
// representation of a card. For example, it should behave as follows
//
//     cardString("ace", "spades");
//     //=> ace of spades
//
//     cardString("queen", "hearts");
//     //=> queen of hearts
var cardString = function (rank,suit) {
	return rank+" of "+suit;
};
console.log(cardString("king","hearts"))


// Write a function called `openTag` that accepts a tag name and returns an
// opening HTML tag with that tag name. For example,
//
//     openTag("p");
//     //=> <p>
//
//     openTag("div");
//     //=> <div>
var openTag = function (tag) {
	return ("<"+tag+">");
};
console.log(openTag("p"));


// Similarly, write a function called `closingTag` that returns the closing HTML tag
// with that name.
//
//     closeTag("p");
//     //=> </p>
//
//     closeTag("div");
//     //=> </div>
var closeTag = function (tags) {
	return ("</"+tags+">");
};
console.log(closeTag("div"));

// Write a function called `toTagString` that accepts two inputs: a tag name,
// and the string content, and returns the content tagged with the specified
// string.  For example:
//
//     toTagString("li", "list item 1");
//     //=> <li>list item 1</li>
//
//     // the 'em' tag is for 'emphasis'
//     toTagString("em", "this is important stuff");
//     //=> <em>this is important stuff</em>
//
// Although I won't be testing for this, your code should re-use the functions that
// you created in the previous section.
var toTagString = function (tag,str) {
	return ("<"+tag+">"+str+"</"+tag+">");
};
console.log(toTagString("p","Life is beautiful"));
