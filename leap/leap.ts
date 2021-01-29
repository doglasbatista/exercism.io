function isLeapYear(year: number) : boolean {
    const isDivisibleBy4 = year % 4 === 0;
    const isNotDivisibleBy100 = year % 100 !== 0;

    return (isDivisibleBy4 && isNotDivisibleBy100) || year % 400 === 0;
}

export default isLeapYear
