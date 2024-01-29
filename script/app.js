// aggiungo un event listener al form
document.getElementById('add-item-form').addEventListener('submit', function (event) {
  // evito che venga eseguito il submit come da standard HTML
  event.preventDefault();

  // placeholder per la funzione di aggiunta elemento in lista
  saveTask();

  // svuoto il campo di input
  document.getElementById('new-item-text').value = '';
});

function addItem() {
  var itemText = document.getElementById('new-item-text').value;

  if (itemText.trim().length !== 0) {
    var itemList = document.getElementById('tasks-list');
    var newItem = document.createElement('li');

    newItem.setAttribute('class', 'list-group-item d-flex justify-content-between align-items-center');

    // elemento span
    var spanElement = document.createElement('span');
    spanElement.innerText = itemText;

    // elemento div contenente i bottoni
    var buttons = document.createElement('div');

    buttons.innerHTML = '<button type="button" class="btn btn-warning btn-sm" onclick="editTask(this.parentNode.parentNode)"><i class="fas fa-pen-to-square"></i></button>'
      + '<button type="button" class="btn btn-danger btn-sm" onclick="deleteTask(this.parentNode.parentNode)"><i class="fas fa-trash-alt"></i></button>';

    newItem.appendChild(spanElement);
    newItem.appendChild(buttons);

    itemList.appendChild(newItem);
  }
}

function deleteTask(elementToRemove) {
  var itemList = document.getElementById('tasks-list');

  itemList.removeChild(elementToRemove);
}

function editTask(elementToEdit)  {
  var currentText = elementToEdit.querySelector('span').innerText;
  var newTaskText = prompt('Modifica il task:', currentText);

  if (newTaskText !== null && (newTaskText.trim() !== currentText.trim()))  {
    elementToEdit.querySelector('span').innerText = newTaskText;
    elementToEdit.style.backgroundColor = 'yellow';
  }
}


function inputChanged(e)  {
  var inputElement = e.target;
  var button = document.querySelector('div.input-group-append .btn');
  
  if (inputElement.value && inputElement.value.trim().length > 0)  
    button.classList.replace('btn-secondary', 'btn-success');
  else
    button.classList.replace('btn-success', 'btn-secondary');
}


document.getElementById('new-item-text').addEventListener('change', function(event) {
  var button = document.querySelector('button[type="submit"]');

  if (this.value && this.value.trim().length > 0)  
    button.classList.replace('btn-secondary', 'btn-success');
  else
    button.classList.replace('btn-success', 'btn-secondary');
});

document.getElementById('todo-select')
  .addEventListener('change', function() {
    var selectedValue = this.value;
    
    var items = document.querySelectorAll('li');
    
    for (var i=0; i < items.length; i++)  {
        if (items[i].innerText.trim() == selectedValue.trim())
          items[i].style.backgroundColor = "green";
        else
          items[i].style.backgroundColor = "white";
    }
  });


