function century(year) {
    let mod = (year % 100 === 0) ? 0 : 1;
    let cent = Math.floor(year / 100);

    return mod + cent;
}