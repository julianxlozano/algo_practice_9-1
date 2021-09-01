function isValidSubsequence(array, sequence) {
	let trueCount = 0
  array.forEach(num=>{
		let subnum = sequence[trueCount]
		if (num === subnum){trueCount++}})
	return (trueCount === sequence.length ? true : false)
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;