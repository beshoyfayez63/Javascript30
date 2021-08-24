const addItems = document.querySelector('.add-items');
const itemList = document.querySelector('.plates');

const items = JSON.parse(localStorage.getItem('items')) || [];

function submitHandler(event) {
  event.preventDefault();
  const text = this.querySelector('input[name="item"]').value;
  console.log(text);
  const item = {
    text,
    done: false,
  };
  items.push(item);
  populateList(items, itemList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], plateList) {
  // plateList.innerHTML = '';
  console.log(plates);
  plateList.innerHTML = plates
    .map((plate, i) => {
      // const li = document.createElement('li');
      // li.innerHTML = plate.text;
      // plateList.appendChild(li);
      return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${
        plate.done ? 'checked' : ''
      } />
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
    })
    .join('');
}

function toggleDone(event) {
  if (!event.target.matches('input')) {
    // console.log(event.target, 'no');
    return;
  }
  const el = event.target;
  const index = el.dataset.index;
  console.log(index);
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
}

addItems.addEventListener('submit', submitHandler);
itemList.addEventListener('click', toggleDone);

populateList(items, itemList);
