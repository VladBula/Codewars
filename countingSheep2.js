function countSheeps(arrayOfSheep) {
    let counter = 0
    arrayOfSheep.forEach(sheep => {
        if(sheep) counter++
    })
    return counter
}

function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(item => item === true).length
}
