var arrayTasks = {

	concat: function (arr1, arr2) {
		var resultArray = arr1.concat(arr2);
		return resultArray;
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		var resultArr = arr.map(element => element ** 2);
		return resultArr;
	},

	sum: function (arr) {
		var sum = arr.reduce(function(total, currentValue){
			return total + currentValue;
		});
		return sum;
	},

	// findDuplicates: function (arr) {
	// 	var uniqueArray = arr.filter(function(item, pos) {
  //   return arr.indexOf(item) == pos;
	// 	});
	// 	console.log(uniqueArray);
	// 	return uniqueArray;
	// },

	removeAndClone: function (arr, valueToRemove) {
		var filteredArray = arr.filter(element => element !== valueToRemove);
		return filteredArray;
	},

	findIndexesOf: function (arr, itemToFind) {
		var indexArray = [];
		arr.forEach(function(element, index){
			if(element === itemToFind){
				console.log(element);
				indexArray.push(index);
			}
		})
		return indexArray;
	},

	// sumOfAllEvenNumbersSquared: function (arr) {

	// }

}

module.exports = arrayTasks
