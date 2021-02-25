document.addEventListener("DOMContentloaded", () => {
    const diceValue = [
        "&#9856",
        "&#9857",
        "&#9858",
        "&#9859",
        "&#9860",
        "&#9861",
    ]

    const diceInput = document.getElementById('dice-input')
    const diceOutput = document.getElementById('dice-para')
    const sum = document.getElementById('sum-para')
    const button = document.getElementById('dice-roll-button')
    const ul = document.getElementById('ul')

    button.addEventListener('click', () => {
        event.preventDefault()

        let arr = []
        for (let i = 0; i < diceInput.value; i++) {
            arr[i] = diceValue[Math.floor(Math.random() * 6)]
        }

        let sumOutput = 0
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === "&9856") {
                sum += 1
            }else if (arr[i] === "&9857") {
                sum += 2
            } else if (arr[i] === "&9858") {
                sum +=3
            } else if (arr[i] === "&9859") {
                sum += 4
            } else if (arr[i] === "&9860") {
                sum += 5
            } else if (arr[i] === "&9861") {
                sum += 6
            }
            
        }
        let newRoll = document.createElement('li')
        newRoll.innerHTML = `${sumOutput} ${arr.join('')}`
        ul.appendChild(newRoll)

        sum.innerHTML = `Sum = ${sumOutput}`
        diceOutput.innerHTML = arr.join('')


    })
})






// document.addEventListener("DOMContentLoaded", () => {
//     const input = Number(document.querySelector('#dice-input')
//     const diceHistory = document.querySelector('ul')

// }
//     const diceSum = document.querySelector('#sum-para')
//     const diceOutput = document.querySelector('#dice-para')
//     const button = document.querySelector('#dice-roll-button')
//     const diceValue = {
//         "&#9856" : 1 ,
//         "&#9857" : 2 ,
//         "&#9858" : 3 ,
//         "&#9859" : 4 ,
//         "&#9860" : 5 ,
//         "&#9861" : 6 ,
//     }

//     button.addEventListener('click', () => {
//         event.preventDefault()

//         let arr = []
//         for (let i = 0; i < input.value; i++) {
//             arr[i] = diceValue[Math.floor(Math.random() * 6)]
//         }
//     }

// }



    
//     button.addEventListener('click', () => {
//         event.preventDefault()
//     })
//     }

    

//     document.querySelector('form').addEventListener('submit', (event) => {
//         event.preventDefault()
//         for (let i = 0, i > 0; i++) {
            
//         }


//     })

//     const diceRolled = document.createElement('li)')
//     diceRolled.textContent = input
//     diceHistory.appendChild(diceRolled)
