let url = 'http://localhost:3000/z-warriors/'

const getData = async () => {
    console.log('Get data');

    const res = await fetch(url);
    const data = await res.json()

    console.log(data);
}

getData()

function addZWarrior(zWarrior) {
    fetch(url, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(zWarrior),
    })
    .then(response => response.json())
    .then(newZWarrior => {
        console.log('New z-warrior added:', newZWarrior);
    })
    .catch(error => {
        console.error('Error adding new z-warrior:', error);
    });
}

const newZWarrior = {
    id: 4,
    name: 'Gohan',
    race: 'Hybrid',
    transformation: 'Super Saiyan 2',
};

function updateZWarrior(id, updatedZWarrior) {
    const updateUrl = `${url}/${id}`;

    fetch(updateUrl, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedZWarrior),
    })
    .then(response => response.json())
    .then(updatedZWarrior => {
        console.log('Z-warrior updated:', updatedZWarrior);
    })
    .catch(error => {
        console.error('Error updating z-warrior:', error);
    });
}

const gohanId = 4;
const updatedGohan = {
    id: gohanId,
    name: 'Gohan',
    race: 'Hybrid',
    transformation: 'Beast Mode',
};

function deleteZWarrior(id) {
    const deleteUrl = `${url}/${id}`;

    fetch(deleteUrl, {
        method: 'DELETE',
    })
    .then(response => {
    if (response.ok) {
        console.log('Z-warrior deleted successfully');
    } else {
        throw new Error('Failed to delete z-warrior');
    }
    })
    .catch(error => {
    console.error('Error deleting z-warrior:', error);
    });
}

document.getElementById("deleteBtn").addEventListener("click", () => {
    deleteZWarrior(gohanId);
})

document.getElementById("updateBtn").addEventListener("click", () => {
    updateZWarrior(gohanId, updatedGohan);
})

document.getElementById("addBtn").addEventListener("click", () => {
    addZWarrior(newZWarrior);
})
