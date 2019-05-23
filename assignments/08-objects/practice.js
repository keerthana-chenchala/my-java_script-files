// Write a function called isUser that accepts an object, and returns true if it is
// a valid user object, false otherwise. A valid user object will contain a
// property called `name` which is a string, and a property called `screen_name`
// which is also a string. It should contain no other properties.
//
//     isUser({ "name":"Semmy Purewal", "screen_name":"semmypurewal" });
//     //=> true
//
//     isUser({ "name":"Firstname Lastname", "screen_name":"user" });
//     //=> true
//
//     isUser("semmypurewal");
//     //=> false
//
//     isUser({ "age": 37, "name":"Semmy Purewal", "screen_name":"semmypurewal" });
//     //=> false
//
var isUser = function (obj) {
	var arr=["name","screen_name"];
if(typeof(obj)=="object"){
		var x=Object.keys(obj).every(function(ky){
			return arr.includes(ky);
		})
return x;
	}
else
{
	return false;
}
};
console.log(isUser("sdhfjdsf"));

// Often when working with HTML, we'll want to take data stored in an object and
// display it as an HTML `div` element. For example, suppose we have a person
// object which contains a name and a screen_name. We'd like to produce a `div`
// that contains an `h1` element with the name, and an `h2` element with
// screen_name. For example:
//
//     var user = { "name":"Semmy Purewal", "screen_name":"semmypurewal" };
//
//     userToDiv(user);
//     //=> "<div><h1>Semmy Purewal</h1><h2>semmypurewal</h2></div>"
//
// Write this function. It should throw an error if the user is not a valid
// user. It might be helpful to use some functions from previous sections.
//
var userToDiv = function (obj) {
	if(isUser(obj)){
		return "<div><h1>"+obj.name+"</h1><h2>"+obj.screen_name+"</div>";
	}
};
console.log(userToDiv({ "name":"Semmy Purewal", "screen_name":"semmypurewal" }));

// Now suppose we have a user object that contains a list of tweets. In HTML, we
// may want to represent that as a list element with a set of list items. That
// looks something like this:
//
//     <ul>
//       <li>this is a tweet.</li>
//       <li>this is another tweet.</li>
//     </ul>
//
// Write a function that converts a user object containing tweets into an HTML
// `div` element representing that user.
//
//     userWithTweetsToDiv({
//         "name": "Semmy Purewal",
//         "screen_name":"semmypurewal",
//         "tweets": [
//             "this is a tweet.",
//             "this is another tweet!"
//         ]
//     });
//     //=> "<div><h1>Semmy Purewal</h1><h2>semmypurewal</h2><ul><li>this is a tweet.</li><li>this is another tweet</li></ul></div>"
//
var userWithTweetsToDiv = function (obj) {
	if(typeof(obj)=="object" && obj.tweets.length==2){
		return "<div><h1>"+obj.name+"</h1><h2>"+obj.screen_name+"<ul><li>"+obj.tweets[0]+"</li><li>"+obj.tweets[1]+"</li></ul></div>";
	}
	else 
		return "enter the object with two tweets";

};
console.log(userWithTweetsToDiv({"name": "Semmy Purewal","screen_name":"semmypurewal","tweets": ["this is a tweet.","this is another tweet!"]}));

// Write a function that accepts an array of strings, and returns an object that
// represents the number of times that each string appears in the array. This might
// sound confusing, but this is what we'd like to have happen.
//
//     frequencies([ "hello", "world", "hello", "goodbye", "hello", "world", "thing" ]);
//     //=> { "hello" : 3, "world" : 2, "goodbye": 1, "thing" : 1 }
//
//     frequencies([]);
//     //=> {}
//
//     frequencies([ "hello", "world" ]);
//     //=> { "hello" : 1, "world" : 1 }
//
// There are several ways you can do it, but it might be interesting to try it with
// the `reduce` method that starts with an empty object.
//
var frequencies = function (arr) {
	var obj={};
	var freq=arr.map(function(arg){
		var c=0;
		var x=arr.filter(function(ar){
			if(arg==ar){
				c+=1;
			}
			obj[arg]=c;
		})
	})
return obj;
};
console.log(frequencies([ "hello", "world", "hello", "goodbye", "hello", "world", "thing" ]));