window.onload = () => {
    let btn = document.createElement('div');
    btn.id = 'item-add';
    btn.innerHTML = 'ADD';
    document.getElementById('parent').prepend(btn);
    btn.onclick = () => {
        displayAddForm();
    };
    getData();
    // document.getElementById('delete').addEventListener('click', function(e){
    //     console.log(e);
    // });

};

function getData() {
    fetch('http://localhost:9091/get-cars', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: "include",
    })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            response.forEach(item => {
                document.getElementById('root').innerHTML += `
        <div class="container" id="${item.id}">
            <div id="data">
                <div id="top">
                    <div id="name">${item.name}</div>
                    <div id="year">${item.year}</div>
                </div>
                <div id="bottom">
                    <div id="description">${item.description}</div>
                </div>
            </div>
            <div id="buttons">
                
            </div>
        </div>
    `
                var del = document.createElement('button');
                del.id = 'delete';
                del.innerHTML = "DELETE";
                document.querySelectorAll('#buttons').forEach(element => {
                    element.append(del);
                })
            });
        });
    document.querySelectorAll('#delete').forEach(element=>{
        element.onclick = (e)=>{
            console.log(e);
        };
    });
};

function addData(object) {
    console.log('object', object);
    fetch('http://localhost:9091/add-car', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(object)
    })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            document.getElementById('root').innerHTML += `
        <div class="container" id="${response.id}">
            <div id="data">
                <div id="top">
                    <div id="name">${response.name}</div>
                    <div id="year">${response.year}</div>
                </div>
                <div id="bottom">
                    <div id="description">${response.description}</div>
                </div>
            </div>
            <div id="buttons">
                <button id="delete" type="submit">Delete</button>
                <button id="update" type="submit">Update</button>
            </div>
        </div>
    `
        });
    document.getElementById('delete').onclick = function () {
        console.log('entered')
    };
};


function displayAddForm() {
    if (!document.getElementById('form')) {
        let form = document.createElement('div');
        form.id = 'form';
        form.innerHTML = `
            <input placeholder="name" id="new-name">
            <input placeholder="year" id="new-year">
            <input placeholder="description" id="new-description">
            <button type="submit" id="add-item"> ADD CAR </button>    
            <button id="close"> Close </button>    
        `;
        document.getElementById('parent').prepend(form);
        document.getElementById('add-item').onclick = () => {
            addData({
                'name': document.getElementById('new-name').value,
                'year': document.getElementById('new-year').value,
                'description': document.getElementById('new-description').value
            });
            document.getElementById('form').remove();

        };
    };
    document.getElementById('close').onclick = () => {
        document.getElementById('form').remove();
    };
};

function removeCar(id) {
    fetch('http://localhost:9091/delete-car', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(id)
    })
        .then(response => response.json())
        .then(response => {

        });
};