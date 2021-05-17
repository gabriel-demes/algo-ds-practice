const shell_sort = array => {
    let n = array.length

    for(let gap = Math.floor(n/2); gap > 0; gap = Math.floor(n/2)){
        //test
        for(let i = gap; i < n; i++){
            let gvalue= array[i]
            let j;
			for (j = i; j >= gap && array[j-gap] > gvalue; j-=gap)  {
				array[j] = array[j-gap];
			}
            array[j] = gvalue
        }
    }
}

array = [4,5,3,6,2,7,5,8,6]

console.log(array)

shell_sort(array)

console.log(array)