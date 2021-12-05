function mapToNegativize(sourceArray){
    // returns an array with all values made negative
    // expect(mapToNegativize([1, 2, 3, -9])).to.eql([-1, -2, -3, 9])
    let negativized = []
    sourceArray.forEach(element => negativized.push(element * -1))
    return negativized 
}

function mapToNoChange(sourceArray){
    // returns an array with the original values
    return sourceArray
}

function mapToDouble(sourceArray){
    // returns an array with the original values multiplied by 2
    let doubled = []
    sourceArray.forEach(element => doubled.push(element * 2))
    return doubled
}

function mapToSquare(sourceArray){
    // returns an array with the original values squared
    let squared = []
    sourceArray.forEach(element => squared.push(element ** 2))
    return squared
}

function reduceToTotal(sourceArray, startingPoint = 0){
    // returns a running total
    sourceArray.forEach(element => startingPoint += element)
    return startingPoint
}

function reduceToAllTrue(sourceArray){
    // returns true when all values are truthy
    // sourceArray = [1, 2, true, "razmatazz"]
    let result = true
    sourceArray.forEach(element => {
        if (!!element === false) {
            result = false
        }
    })
    return result 
}

function reduceToAnyTrue(sourceArray){
    let result = false
    sourceArray.forEach(element => {
        if (!!element){
            result = true
        }
    })
    return result
}