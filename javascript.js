let gridLength = window.prompt('What length do you want the grid to be?', 16);
const gridContainer = document.querySelector('.grid-container');

for (i = 0; i < gridLength; i++)
{
    const newRow = document.createElement('div');
    newRow.classList.add('row');
    for (j = 0; j < gridLength; j++)
    {
        const newPixel = document.createElement('div');
        newPixel.classList.add('pixel');
        newRow.appendChild(newPixel);
    }
    gridContainer.appendChild(newRow);
}