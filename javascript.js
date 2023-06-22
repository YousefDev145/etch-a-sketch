let gridLength = 16;
const gridContainer = document.querySelector('.grid-container');

for (i = 0; i < gridLength; i++)
{
    const newRow = document.createElement('div');
    newRow.classList.add('row');
    for (j = 0; j < gridLength; j++)
    {
        const newPixel = document.createElement('div');
        newRow.appendChild(newPixel);
    }
    gridContainer.appendChild(newRow);
}