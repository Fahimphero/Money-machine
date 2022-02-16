function balanceAndExpense(income, food, rent, cloth, balance, expenses) {
    const incomeInputText = document.getElementById(income);
    const foodInputText = document.getElementById(food);
    const rentInputText = document.getElementById(rent);
    const clothesInputText = document.getElementById(cloth);
    const totalBalance = document.getElementById(balance);
    const totalExpense = document.getElementById(expenses);
    const incomeInput = parseFloat(incomeInputText.value);
    const foodInput = parseFloat(foodInputText.value);
    const rentInput = parseFloat(rentInputText.value);
    const error = document.getElementById('error');
    const errorTwo = document.getElementById('error-two');
    const errorFour = document.getElementById('error-four');
    const clothesInput = parseFloat(clothesInputText.value);

    // error handling
    if (incomeInput >= 0 && foodInput >= 0 && rentInput >= 0 && clothesInput >= 0) {

        // total expense
        const total = foodInput + rentInput + clothesInput;
        totalExpense.innerText = total;
        if (total <= incomeInput) {

            // total balance
            const result = incomeInput - total;
            totalBalance.innerText = result;
            error.style.display = 'none';
            errorTwo.style.display = 'none';
            return result;
        }
        else {
            errorFour.style.display = 'block';

        }

    }
    else if (incomeInput < 0 || foodInput < 0 || rentInput < 0 || clothesInput < 0) {
        error.style.display = 'block';
    }
    else {
        errorTwo.style.display = 'block';
    }
};

document.getElementById('calculate').addEventListener('click', function () {

    // calling function
    balanceAndExpense('income-input', 'food-input', 'rent-input', 'cloth-input', 'balance', 'total-expense');
});

document.getElementById('save').addEventListener('click', function () {
    const percentageInputText = document.getElementById('percentage-input');
    const percentageInput = parseFloat(percentageInputText.value);
    const incomeInputText = document.getElementById('income-input');
    const incomeInput = parseFloat(incomeInputText.value);
    const savingAmount = document.getElementById('saving-amount');
    const remainingBalance = document.getElementById('remaining-balance');
    const errorThree = document.getElementById('error-three');

    // calling function
    const totalBalance = balanceAndExpense('income-input', 'food-input', 'rent-input', 'cloth-input', 'balance', 'total-expense');

    // saving Amount
    const totalSavings = incomeInput * (percentageInput / 100);
    if (totalSavings < totalBalance) {
        savingAmount.innerText = parseFloat(totalSavings);
        // remaining balance
        remainingBalance.innerText = totalBalance - parseFloat(totalSavings);
    }
    else {
        errorThree.style.display = 'block';
    }


});