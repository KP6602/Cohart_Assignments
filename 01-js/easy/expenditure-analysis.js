/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // Create an object to store the total spent for each category
  const categoryTotal = {};

  // Iterate over the transactions
  transactions.forEach(transaction => {
    const { category, price } = transaction;
    
    // If the category already exists in the categoryTotal object, add the price to its total
    if (categoryTotal[category]) {
      categoryTotal[category] += price;
    } 
    // If the category doesn't exist, create it with the current price
    else {
      categoryTotal[category] = price;
    }
  });

  // Convert the categoryTotal object to an array of objects
  const result = Object.keys(categoryTotal).map(category => ({
    category,
    totalSpent: categoryTotal[category]
  }));

  return result;
}

module.exports = calculateTotalSpentByCategory;

