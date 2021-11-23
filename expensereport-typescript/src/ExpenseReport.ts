const message = 'Hello, World!\n';

const sumTwoValues = (a: number, b: number): number => a + b

const printHelloWorld = (): void => {
  process.stdout.write(message);
}

type ExpenseType = "dinner" | "breakfast" | "car-rental"

class Expense {
  kindOfExpense: ExpenseType
  amount: number
  constructor(type: ExpenseType, amount: number) {
    this.kindOfExpense = type
    this.amount = amount
  }
}

function printReport(expenses: Expense[]) {
  let totalExpenses: number = 0
  let mealExpenses: number = 0

  process.stdout.write("Expenses: " + todaysDate() + "\n")


  for (const expense of expenses) {
    if (expense.kindOfExpense == "dinner" || expense.kindOfExpense == "breakfast") {
      mealExpenses += expense.amount
    }

    let expenseName = ""

    switch (expense.kindOfExpense) {
      case "dinner":
        expenseName = "Dinner"
        break
      case "breakfast":
        expenseName = "Breakfast"
        break
      case "car-rental":
        expenseName = "Car Rental"
        break
    }

   let mealOverExpensesMarker = isMealOverExpenseLimit(expense);

    process.stdout.write(expenseName + "\t" + expense.amount + "\t" + mealOverExpensesMarker + "\n")

    totalExpenses += expense.amount
  }

  process.stdout.write("Meal Expenses: " + mealExpenses + "\n")
  process.stdout.write("Total Expenses: " + totalExpenses + "\n")
}

export {sumTwoValues, printHelloWorld, printReport, Expense, ExpenseType}

function isMealOverExpenseLimit(expense: Expense) {
  
 let  expenseMarker = expense.kindOfExpense == "dinner" && expense.amount > 5000 || expense.kindOfExpense == "breakfast" && expense.amount > 1000 ? "X" : " ";
  return expenseMarker ;
}

function todaysDate() {
  return new Date().toISOString().substr(0, 10);
}

