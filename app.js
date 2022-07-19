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

// Q4. Promises

// Q5. Find all the posts by a single user
async function postsByUser(userId) {
  const promise = await fetch("https://jsonplaceholder.typicode.com/posts")

  const result = await promise.json()

  const posts = result.filter(element => element.userId === userId)

  console.log(posts)
}

postsByUser(4)

// Q6. First 6 Incomplete Todos
async function firstSixIncomplete() {
  const promise = await fetch("https://jsonplaceholder.typicode.com/todos")

  const result = await promise.json()

  const todos = result
    .filter(elem => !elem.completed)
    .slice(0, 6)

  console.log(todos)
}

firstSixIncomplete()
