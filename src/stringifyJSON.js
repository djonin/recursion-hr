// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === "string") {
  	return '"' + obj + '"';
  } else if (Array.isArray(obj)) {
  	var resultArr = [];
  	for (var i = 0; i < obj.length; i++) {
  		resultArr.push(stringifyJSON(obj[i]));
  	}
  	return "[" + resultArr.join(',') + "]";
  } else if (obj && typeof obj === "object") {
  	var resultObj = [];
  	for (var key in obj) {
  		if (obj[key] !== undefined && typeof obj[key] !== "function") {
  			resultObj.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
  		}
  	}
  	return "{" + resultObj.join(',') + "}";
  } else if (typeof obj === "function") {
  	return undefined;
  }
  return "" + obj;
};
