// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  
	function recursiveGetElements(obj) {
		var result = [];

		if(obj.classList == undefined)
			return result;

		for (var i = 0; i<obj.classList.length; i++) {
			if(className === obj.classList[i]) {
				result.push(obj);
				break;
			}
		}

		if(obj.childNodes == undefined)
			return result;

		for (var j =0; j<obj.childNodes.length; j++) {
			result = result.concat(recursiveGetElements(obj.childNodes[j]));
		}

		return result;
	}

  return recursiveGetElements(document.body);
};
