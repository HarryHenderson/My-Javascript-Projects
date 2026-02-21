const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('task-list');

let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

function save() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function createTaskElement(task, idx) {
  const li = document.createElement('li');
  li.className = 'task-item';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = !!task.done;
  checkbox.addEventListener('change', () => {
    tasks[idx].done = checkbox.checked;
    save();
    render();
  });

  const span = document.createElement('span');
  span.textContent = task.text;
  if (task.done) span.classList.add('done');
  span.addEventListener('dblclick', () => enableEdit(span, idx));

  const del = document.createElement('button');
  del.textContent = 'Delete';
  del.className = 'delete-btn';
  del.addEventListener('click', () => {
    tasks.splice(idx, 1);
    save();
    render();
  });

  li.append(checkbox, span, del);
  return li;
}

function render() {
  list.innerHTML = '';
  tasks.forEach((t, i) => list.appendChild(createTaskElement(t, i)));
}

function addTask() {
  const val = input.value.trim();
  if (!val) return;
  tasks.push({ text: val, done: false });
  input.value = '';
  save();
  render();
}

addBtn.addEventListener('click', addTask);
input.addEventListener('keydown', (e) => { if (e.key === 'Enter') addTask(); });

function enableEdit(span, idx) {
  const inputEdit = document.createElement('input');
  inputEdit.type = 'text';
  inputEdit.value = tasks[idx].text;
  inputEdit.className = 'edit-input';
  span.replaceWith(inputEdit);
  inputEdit.focus();

  function finishEdit() {
    const v = inputEdit.value.trim();
    if (v) tasks[idx].text = v;
    save();
    render();
  }

  function cancelEdit() { render(); }

  inputEdit.addEventListener('blur', finishEdit);
  inputEdit.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') finishEdit();
    if (e.key === 'Escape') cancelEdit();
  });
}

render();
