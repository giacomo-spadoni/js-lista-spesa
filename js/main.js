const list = document.getElementById('lista-spesa')
const spesa = ['pasta', 'burro', 'nutella', 'pane', 'marmellata']

// utilizzando il ciclo for

/*for (let i = 0; i < spesa.length; i++) {
    const element = spesa[i];
    const myLi = document.createElement('li')
    myLi.textContent = '- ' + element
    list.append(myLi)
}*/

// utilizzo il ciclo while

let i = 0
while (i < spesa.length) {
    const element = spesa[i];
    const myLi = document.createElement('li')
    myLi.textContent = '- ' + element
    list.append(myLi)
    i++
}