'use strict';

Array.prototype.toTwenty = function() {
	let arr = [];

	for (var i = 1; i <= 20; i++) {
		arr.push(i);
	}

	return arr;
}

Array.prototype.toForty = function() {
	let arr = [];

	for (var i = 2; i <= 40; i += 2) {
		arr.push(i);
	}

	return arr;
}

Array.prototype.toOneThousand = function() {
	let arr = [];

	for (var i = 10; i <= 1000; i += 10) {
		arr.push(i);
	}

	return arr;
}

Array.prototype.search = function(num) {
	var index = -1;
	var minIndex = 0;
	var maxIndex = this.length - 1;
	var midIndex;
	var count = 0;

	while(minIndex <= maxIndex) {
		midIndex = ~~((minIndex + maxIndex) / 2);

		if (this[minIndex] === num) {
			index = minIndex;
			break;
		} else if (this[maxIndex] === num) {
			index = maxIndex;
			break;
		} else if (this[midIndex] < num) {
			minIndex = midIndex + 1;
		} else if (this[midIndex] > num) {
			maxIndex = midIndex - 1;
		} else {
			index = midIndex;
			break;
		}

		count++;
	}

	return {"count": count, "index": index, "length": this.length};
}
