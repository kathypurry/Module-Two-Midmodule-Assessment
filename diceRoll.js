document.addEventListener("DOMContentLoaded", () => {
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
    let sum = document.getElementById('sum-para')
    const button = document.getElementById('dice-roll-button')
    const ul = document.querySelector('ul')
    

    button.addEventListener('click', () => {

        let arr = []
        for (let i = 0; i < diceInput.value; i++) {
            arr[i] = diceValue[Math.floor(Math.random()*6)]

        }

        let sumOutput = 0
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === "&#9856") {
                sumOutput += 1
            }else if (arr[i] === "&#9857") {
                sumOutput += 2
            } else if (arr[i] === "&#9858") {
                sumOutput +=3
            } else if (arr[i] === "&#9859") {
                sumOutput += 4
            } else if (arr[i] === "&#9860") {
                sumOutput += 5
            } else if (arr[i] === "&#9861") {
                sumOutput += 6
            }
            
        }
        let newRoll = document.createElement('li')
        newRoll.innerHTML = `${sumOutput} ${arr.join('')}`
        ul.appendChild(newRoll)

        sum.innerHTML = `Sum = ${sumOutput}`
        diceOutput.innerHTML = arr.join('')


    })
})

console.log('hello')

// document.addEventListener("DOMContentLoaded", () => {




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
