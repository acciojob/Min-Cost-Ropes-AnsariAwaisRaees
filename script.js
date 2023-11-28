function mincost(arr)
{ 
	//write your code here
	// return the min cost
	let sum = 0;
	let res = 0;

	while(arr.length != 1){
		arr.sort(
			(a,b) => {
				return a-b;
			}

			let sum = arr[0]+arr[1];
			res += sum;
			arr.splice(0,2,sum);
			arr.sort();
		);
	}

	return res;
}

module.exports=mincost;
