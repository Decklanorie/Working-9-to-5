function overTime(arr) {
	var start = arr[0]
	var stop = arr[1]
	var mul = arr[2]
	var fac = arr[3]
	var val = [0,0]
	
	if(stop <= 17){
		return `$${((stop - start)*mul).toFixed(2)}`
	}
	if(start > 17){
		return `$${((stop - start)*mul*fac).toFixed(2)}`
	}
	val[0] = (17 - start)*mul
	val[1] = (stop - 17)*mul*fac
	return `$${(val[0]+val[1]).toFixed(2)}`
}
