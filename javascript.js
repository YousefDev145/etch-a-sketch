const resizeSlider = document.querySelector('.resize-grid');
const gridSize = document.querySelector('.grid-size');
const toggleBtn = document.querySelector('.toggle-grid-lines');
toggleBtn.addEventListener('click', toggleGridLines);
const gridContainer = document.querySelector('.grid-container');
let mouseHeld = false;
let gridLines = false;
let gridLength = 16;
window.addEventListener('mousedown', () => mouseHeld = true);
window.addEventListener('mouseup', () => mouseHeld = false);
createGrid();
resizeSlider.addEventListener('change', () =>
{
    gridLength = resizeSlider.value;
    while (gridContainer.childElementCount > 0)
    {
        gridContainer.removeChild(gridContainer.children[0]);
    }
    createGrid();
    if (gridLines)
    {
        toggleGridLines();
        gridLines = true;
    }
});

function createGrid()
{
    for (i = 0; i < gridLength; i++)
    {
        const newRow = document.createElement('div');
        newRow.classList.add('row');
        for (j = 0; j < gridLength; j++)
        {
            const newPixel = document.createElement('div');
            newPixel.classList.add('pixel');
            let opacity = 0;
            newPixel.addEventListener('mouseover', (e) =>
            {
                if (mouseHeld)
                {
                    if (opacity < 1)
                    {
                        opacity += .1;
                    }

                    e.target.style.cssText = `background-color: rgb(0, 0, 0, ${opacity})`;
                }
            });
            newPixel.addEventListener('mousedown', (e) =>
            {
                if (opacity < 1)
                {
                    opacity += .1;
                }

                e.target.style.cssText = `background-color: rgb(0, 0, 0, ${opacity})`;
            });
            newRow.appendChild(newPixel);
        }
        gridContainer.appendChild(newRow);
    }
    gridSize.textContent = `Grid Size: ${resizeSlider.value}x${resizeSlider.value}`;
}

function toggleGridLines()
{
    for (i = 0; i < gridLength; i++)
    {
        for (j = 0; j < gridLength; j++)
        {
            gridContainer.children[i].children[j].classList.toggle('grid-lines');
        }
    }
    gridLines = !gridLines;
}