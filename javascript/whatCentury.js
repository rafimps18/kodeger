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

const years = [2023, 2019, 1180, 1984, 1899, 536]

for (let i = 0; i < years.length; i++){
    console.log(years[i] + " ---> " + whatCentury(years[i]))
}