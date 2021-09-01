function isValidSubsequence(array, sequence) {
	let trueCount = 0
  array.forEach(num=>{
		let subnum = sequence[trueCount]
		if (num === subnum){trueCount++}})
	return (trueCount === sequence.length ? true : false)
}

function sortedSquaredArray(array) {
    let newArray = []
		let smallest = 0
		let largest = array.length - 1
		for (let i = 0;i < array.length; i++){
			let smlSqr = array[smallest] * array[smallest]
			let lrgSqr = array[largest] * array[largest]
			if(smlSqr < lrgSqr){
				newArray.unshift(lrgSqr)
				largest--
			}else{
				newArray.unshift(smlSqr)
			  smallest++
			}
		}
		return newArray
}


