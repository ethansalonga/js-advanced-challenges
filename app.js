// Q1. Show rating
function showRating(rating) {
  let ratings = ""
  for (let i = 0; i < Math.floor(rating); i++) {
    ratings += "*"
    if (i !== Math.floor(rating) - 1) {
      ratings += " "
    }
  }
  if (!Number.isInteger(rating)) {
    ratings += " ."
  }
  return ratings
}

console.log(showRating(4.5))

// Q2. Sort by lowest to highest price
function sortLowToHigh(numbers) {
  return numbers.sort((a, b) => a - b)
}

console.log(sortLowToHigh([1, 5, 0, 10, 4]))

// Q3. Sort by highest to lowest price
function sortHighToLow(numbers) {
  return numbers.sort((a, b) => b.price - a.price)
}

console.log(
  sortHighToLow([
    { id: 1, price: 50 },
    { id: 2, price: 0 },
    { id: 3, price: 500 },
  ])
)
