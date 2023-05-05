/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
	let left = 0,
		right = arr.length - 1;
	while (left <= right) {
		mid = left + Math.floor((right - left) / 2);
		if (mid === 0 || arr[mid] < arr[mid + 1]) {
			left = mid + 1;
		} else if (arr[mid] < arr[mid - 1]) {
			right = mid - 1;
		} else {
			return mid;
		}
	}
};
console.log(peakIndexInMountainArray([6, 7, 4, 3, 2, 1]));