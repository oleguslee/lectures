const message = 'Hello, Whales!'
const message2 = "Hello, \n\t Whales!"

const groupName = 'Whale'

const message3 = `Hello,
      ${groupName}!`
// console.log(message3);
// console.log(message2);

// console.log(message2[0]);

// message2[0] = 'M'
// console.log(message2);
console.log(message2.charAt(0));
console.log(message2.charCodeAt(0));

console.log(message2.toLowerCase());
console.log(message2.toUpperCase());


console.log(message.indexOf('e'));
console.log(message.lastIndexOf('e'));

console.log(message.slice(5, 4));
console.log(message.substring(4, 5));


const newMessage = 'Hello'

const ultraNewMessage = newMessage.replace('Hel', 'Olo')
console.log(ultraNewMessage);


const turboUltraNewMessage = newMessage.replaceAll('l', 'y')
const superTurboUltraNewMessage = newMessage.replace(/l/g, 'y')

console.log(superTurboUltraNewMessage);
console.log(newMessage.search(/l/));

