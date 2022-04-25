const cardsEl = document.querySelector('#cards');

function innerInfo(arr) {
   
    arr.forEach(object => {
        const card = document.createElement('div');
        for (const property in object) {
            const line = document.createElement('p');
            line.innerText = `${property}: ${object[property]}`;
            // console.log(`${property}: ${object[property]}`); 
            card.appendChild(line);
        }
        cardsEl.appendChild(card);
    });
}

innerInfo();
   