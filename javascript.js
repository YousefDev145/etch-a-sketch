const resizeBtn = document.querySelector('.resize-grid');
const gridContainer = document.querySelector('.grid-container');
createGrid();
resizeBtn.addEventListener('click', () =>
{
    while (gridContainer.childElementCount > 0)
    {
        gridContainer.removeChild(gridContainer.children[0]);
    }

    createGrid(window.prompt('What length do you want the grid to be?', 16));
});

function createGrid(length = 16)
{
    for (i = 0; i < length; i++)
    {
        const newRow = document.createElement('div');
        newRow.classList.add('row');
        for (j = 0; j < length; j++)
        {
            const newPixel = document.createElement('div');
            newPixel.classList.add('pixel');
            newPixel.addEventListener('click', (e) => e.target.style.cssText = 'background-color: black;');
            newRow.appendChild(newPixel);
        }
        gridContainer.appendChild(newRow);
    }
}