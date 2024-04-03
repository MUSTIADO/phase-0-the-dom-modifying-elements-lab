// Remove the DOM node with id 'main#main'
const mainNode = document.getElementById('main');
mainNode.remove();

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Set the id of the new <h1> element to 'victory'
newHeader.id = 'victory';

// Set the text content of the new <h1> element
const yourName = 'MUSTAFA'; 
newHeader.textContent = `${yourName} is the champion`;

// Append the new <h1> element to the document body or any desired location
document.body.appendChild(newHeader);
