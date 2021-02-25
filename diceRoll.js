document.addEventListener("DOMContentLoaded", () => {
    const input = Number(document.querySelector('input')).value
    const diceHistory = document.querySelector('ul')

    const diceRolled = document.createElement('li)')
    diceRolled.textContent = input
    diceHistory.appendChild(diceRolled)
})
