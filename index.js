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

function findClosestValueInBst(tree, target) {
    // Write your code here.
      const values = []
      depthFirstSearch(tree,values)
      let bestDiff
      let runningClosest
  
      values.forEach(num =>{
          if (Math.abs(num - target) < bestDiff || bestDiff === undefined){
              runningClosest = num
              bestDiff = Math.abs(num - target)
          }
      })
      return runningClosest
  }
  
  const depthFirstSearch = (tree,array) =>{
      if (!tree) return;
      array.push(tree.value)
      depthFirstSearch(tree.left,array)
      depthFirstSearch(tree.right,array)
  }
  
  // This is the class of the input tree. Do not edit.
  class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

