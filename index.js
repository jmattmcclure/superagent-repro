
/* superagent.get("https://dummyjson.com/http/500")
		.then((res) => {
			console.log("won't happen 200");
		})
		.catch((e) => {
			console.log("we got an error");
			delete e.response;
			console.trace(e);
		}); */

const superagent = require("superagent");
fetch("https://dummyjson.com/http/500").then((response)=> {
	if(!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);	
	}
}).catch((e) => {
	console.log("fetch error");
	delete e.response;
	console.trace(e);
})
superagent.get("https://dummyjson.com/http/500", (err, res) => {
	if (err) {
		console.log("superagent error callback");
		error.capturestacktrace(err);
		delete err.response;
		console.trace(err);
	}
})