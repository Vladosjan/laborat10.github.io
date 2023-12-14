document.addEventListener("DOMContentLoaded", function() {
    let playerName = prompt("Enter your name:"); 
	playerName.innerHTML = "Your name:" + playerName;
    let button1 = document.getElementById("button1");

    // Перевірити, чи елемент існує перед додаванням події
    if (button1) {
        // Додати подію на кнопку для виклику функції spin при натисканні
        button1.addEventListener("click", spin);
    } else {
        console.error("Елемент з ідентифікатором 'button1' не знайдено.");
    }

    const slots = [0, 1, 2]; // Список слотів
    const symbols = ["🍒", "🍋", "🍊", "🍇", "🍉"]; // Список можливих символів

    function spin() {
        // Генерація випадкових символів для кожного слоту
        const results = slots.map(() => symbols[Math.floor(Math.random() * symbols.length)]);

        // Оновлення тексту у слотах
        for (let i = 0; i < slots.length; i++) {
           let slotElementId = "slot" + (slots[i] + 1);
document.getElementById(slotElementId).textContent = results[i];
        }

        // Логіка обробки результатів (можна додати власні правила)
        if (results.every(symbol => symbol === results[0])) {
            alert("Ви виграли!");
        } else {
            alert("Спробуйте ще раз!");
        }
    }
});
