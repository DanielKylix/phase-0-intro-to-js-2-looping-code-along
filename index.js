// Code your solutions in this file
const gifts = ["Guadalupe", "Ollie", "Aki"];
const messages = []
const writeCards = (array,event) => {
for (let counter = 0; counter < array.length; counter++) {
    let message = `Thank you, ${array[counter]}, for the wonderful ${event} gift!`
    messages.push(message)
    return messages
}
}

writeCards(gifts,'surprise')
const countDown = (countdown) => {
    while (countdown > -1) {
        console.log(countdown)
        countdown--;
    }

}
countDown(10)