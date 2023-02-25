function whatCentury(year) {
    const century = Math.ceil(year/100)
    const firstDigit = returnFirstDigit(century)
    const lastDigit = returnLastDigit(century)
    if (lastDigit === 1 && firstDigit > 1){
        return century+"st"
    } else if (lastDigit === 2 && firstDigit > 1) {
        return century+"nd"
    } else if (lastDigit === 3 && firstDigit > 1){
        return century+"rd"
    } else {
        return century+"th"
    }
}

function returnFirstDigit(num) {
    const matches = String(num).match(/\d/)
    const firstDigit = Number(matches[0])
    return firstDigit
}

function returnLastDigit(num) {
    const lastDigit = num % 10
    return lastDigit
}

console.log(whatCentury(2023))