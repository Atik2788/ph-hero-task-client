    const rotateLeft = (array, int) => {
        let filterArray = [...array]
        filterArray.splice(filterArray.indexOf(int), 1);

        return [...filterArray, int]
    }
    console.log(rotateLeft([1, 5, 6, 10, 58, 45, 4], 10))
