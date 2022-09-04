let areas = {
    a: null,
    b: null,
    c: null
};

document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstart', dragstart);
    item.addEventListener('dragend', dragend);
});

document.querySelectorAll('.area').forEach(area => {
    area.addEventListener('dragover', dragover);
    area.addEventListener('dragleave', dragleave);
    area.addEventListener('drop', drop);
});

document.querySelector('.neutralArea').addEventListener('dragover', dragOverNeutral);
document.querySelector('.neutralArea').addEventListener('dragleave', dragLeaveNeutral);
document.querySelector('.neutralArea').addEventListener('drop', dropNeutral);

// Functions Item
function dragstart(e) {
    e.currentTarget.classList.add('dragging');
};
function dragend(e) {
    e.currentTarget.classList.remove('dragging');
};

// Functions Area

function dragover(e) {
    if (e.currentTarget.querySelector('.item') === null) {
        e.preventDefault();
        e.currentTarget.classList.add('hover');
    }
};
function dragleave(e) {
    e.currentTarget.classList.remove('hover');
};
function drop(e) {
    e.currentTarget.classList.remove('hover');

    if (e.currentTarget.querySelector('.item') === null) {
        let dragItem = document.querySelector('.item.dragging');
        e.currentTarget.appendChild(dragItem);
        updateAreas();
    }
};

// Functions Neutral Area 
function dragOverNeutral(e) {
    e.preventDefault();
    e.currentTarget.classList.add('hover');
};
function dragLeaveNeutral(e) {
    e.currentTarget.classList.remove('hover');
};
function dropNeutral(e) {
    e.currentTarget.classList.remove('hover');
    let dragItem = document.querySelector('.item.dragging');
    e.currentTarget.appendChild(dragItem);
    updateAreas();
};

// Logic Functions
function updateAreas(e) {
    document.querySelectorAll('.area').forEach(area => {
        let name = area.getAttribute('data-name');

        if (area.querySelector('.item') !== null) {
            areas[name] = area.querySelector('.item').innerHTML;
        } else {
            areas[name] = null;
        }
    });

    if(areas.a === '1' && areas.b === '2' && areas.c === '3') {
        document.querySelector('.areas').classList.add('correct')
        document.querySelector('.areas').classList.remove('correct2');
    } else if(areas.a === '3' && areas.b === '2' && areas.c === '1') {
        document.querySelector('.areas').classList.remove('correct');
        document.querySelector('.areas').classList.add('correct2')
    } else {
        document.querySelector('.areas').classList.remove('correct');
        document.querySelector('.areas').classList.remove('correct2');
    }
};