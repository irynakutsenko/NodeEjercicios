function createArray(num) {
    let array = []
    for (let i = 0; i < 10; i++) {
        num++
        array.push(num)
    }
    return array;
}

module.exports = { createArray }