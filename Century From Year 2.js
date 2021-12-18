const century = year => Math.ceil(year/100)

function century(year) {
  return (year + 99) / 100 | 0;
}

const century = year => year % 100 === 0 ? parseInt(year / 100) : parseInt(year / 100) + 1;