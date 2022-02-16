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
    const clothesInput = parseFloat(clothesInputText.value);
    const total = foodInput + rentInput + clothesInput;

    totalExpense.innerText = total;

    const result = incomeInput - total;
    totalBalance.innerText = result;
    return result;
}

document.getElementById('calculate').addEventListener('click', function () {
    balanceAndExpense('income-input', 'food-input', 'rent-input', 'cloth-input', 'balance', 'total-expense');
});

document.getElementById('save').addEventListener('click', function () {
    const percentageInputText = document.getElementById('percentage-input');
    const percentageInput = parseFloat(percentageInputText.value);
    const incomeInputText = document.getElementById('income-input');
    const incomeInput = parseFloat(incomeInputText.value);
    const savingAmount = document.getElementById('saving-amount');
    const remainingBalance = document.getElementById('remaining-balance');
    const totalSavings = incomeInput * (percentageInput / 100);
    savingAmount.innerText = parseFloat(totalSavings);
    const totalBalance = balanceAndExpense('income-input', 'food-input', 'rent-input', 'cloth-input', 'balance', 'total-expense');
    remainingBalance.innerText = totalBalance - parseFloat(totalSavings);

});