const container = document.querySelector('.container');
selectedColor = 'none';

const blackButton = document.querySelector('#black');
    blackButton.addEventListener('click', (e) => {
            selectedColor = "black";
    })

const whiteButton = document.querySelector('#white');
    whiteButton.addEventListener('click', (e) => {
        selectedColor = 'white';
    })

const resetButton = document.querySelector('#reset');
    resetButton.addEventListener('click', (e) => {
       
    let gridRowsAndColumns = Number(window.prompt("How many squares you want per side?", ""));
    if(isNaN(gridRowsAndColumns)) {
        return alert('Please insert a number');
    }
    else if(gridRowsAndColumns > 64 || gridRowsAndColumns < 5) {
        return alert('Please insert a number between 5 and 64');
    }
    createDivs(gridRowsAndColumns);   
})

const resetGrid = () => {
   document.querySelectorAll('.container > div').forEach(div => {
       div.remove();
   })
}

const createDivs = (gridRowsAndColumns) => {
    resetGrid();
    container.style.gridTemplateColumns = `repeat(${gridRowsAndColumns}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridRowsAndColumns}, 1fr)`;

    for(let i = 0; i < gridRowsAndColumns; i++) {
        for(let j = 0; j < gridRowsAndColumns; j++) {
            let div = document.createElement('div');
            div.classList.add('board');
            container.appendChild(div);
            div.style.backgroundColor = 'powderblue';
            div.style.border = 'solid black 1px';

            div.addEventListener('mouseover', function() {
                if(selectedColor === 'black') {
                    div.style.backgroundColor = 'black';
                } 
                else if(selectedColor === 'white') {
                    div.style.backgroundColor = 'white';
                }  
            })

            const clearButton = document.querySelector('#clear');
            clearButton.addEventListener('click', (e) => {
                div.style.backgroundColor = 'powderblue';
                selectedColor = 'powderblue';
       
            })
        }
    }
}

createDivs(16);
