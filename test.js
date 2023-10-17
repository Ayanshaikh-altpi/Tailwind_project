function outer() {
    let count = 1

    function inner() {
        count++
        console.log(count)
    }
    return inner
}

const bahar = outer()
bahar()
bahar()
bahar()
bahar()
bahar()