const promptSync = require("prompt-sync")();

console.log("Welcome to Happy shopping\n");
var bill = 0;
var price : number = 0;

function buyAnything(): number {
  let choice;
  do {
    console.log("Enter 1 for Fruits, 2 for Vegetables, or 3 to exit");
    choice = parseInt(promptSync("Enter your choice: "));
    if (choice === 1) {
      buyFruits();
    } else if (choice === 2) {
      buyVegetables();
    } else {
      console.log("Exit");
    }
  } while (choice !== 3);
  return bill;
}

function buyFruits(): void {
  console.log("Available Fruits are:");
  console.log("1. Apple (Rs 30)");
  console.log("2. Grapes (Rs 40)");
  console.log("3. Bananas (Rs 50)");
  console.log("4. Kivi (Rs 70)");
  console.log("5. Pear (Rs 20)");
  console.log("6. Exit");

  
  let choice;
  do {
    choice = parseInt(promptSync("Enter number to buy item: "));
    if (choice >= 1 && choice <= 5) {
      
      let quantity;
      switch (choice) {
        case 1:
          price = 30;
          break;
        case 2:
          price = 40;
          break;
        case 3:
          price = 50;
          break;
        case 4:
          price = 70;
          break;
        case 5:
          price = 20;
          break;
      }
      quantity = parseInt(promptSync("Enter quantity: "));
      bill =bill+(price * quantity) ;
      console.log("Added to your cart");
    } else if (choice !== 6) {
      console.log("Invalid choice");
    }
  } while (choice !== 6);
}

function buyVegetables(): void {
  console.log("Available Vegetables are:");
  console.log("1. Iceberg (Rs 30)");
  console.log("2. Broccoli (Rs 40)");
  console.log("3. Carrot (Rs 50)");
  console.log("4. Exit");

  let choice;
  do {
    choice = parseInt(promptSync("Enter number to buy item: "));
    if (choice >= 1 && choice <= 3) {
      var price;
      let quantity;
      switch (choice) {
        case 1:
          price = 30;
          break;
        case 2:
          price = 40;
          break;
        case 3:
          price = 50;
          break;
      }
      quantity = parseInt(promptSync("Enter quantity: "));
      let priceOrDefault = price || 0;
      bill += priceOrDefault * quantity;
      console.log("Added to your cart");
    } else if (choice !== 4) {
      console.log("Invalid choice");
    }
  } while (choice !== 4);
}

bill = buyAnything();
console.log("Total bill: Rs", bill);
console.log("Total after discount: Rs", applyDiscount(bill));

function applyDiscount(bill: number): number {
  let discountedBill: number;

  if (bill > 100) {
    discountedBill = bill * 0.9; // 10% discount
  } 
  else {
    discountedBill = bill;
  }

  return discountedBill;
}
function checkoutProcess(): void {
  const paymentMethod: string = promptSync('Choose a payment method (Credit Card/Debit Card/Cash): ');

  console.log(`Payment method selected: ${paymentMethod}`);
  console.log('Thank you for shopping! Your order has been processed.');
}
checkoutProcess();