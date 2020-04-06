(() => {
  const addElement = document.querySelector('.box__add');
  const deleteElement = document.querySelector('.box__delete');

  let items = Array.from(document.querySelectorAll('.dropzone__dropitem'));
  let dragElem;
  const onAdd = () => {
    const divElement = document.createElement('div');
    const text = document.createTextNode('Click to Edit');

    divElement.appendChild(text);
    divElement.className = 'dropzone__dropitem';
    divElement.setAttribute('draggable', true);

    const target = document.getElementById('add');
    target.appendChild(divElement);
    items = Array.from(document.querySelectorAll('.dropzone__dropitem'));
    setDrag();
  };

  const onEditText = (event) => {
    const text = prompt('Input Text');
    if (text !== null) {
      if (text === '' || text.trim() === '') {
        alert('Need text to input');
      } else {
        event.target.innerText =
          text[0].toUpperCase() + text.substr(1, text.length - 1);
      }
    }
  };

  const readText = () => {
    items.forEach((item) => {
      item.addEventListener('dblclick', onEditText);
    });
  };
  readText();

  const onDragStart = (event) => {
    dragElem = event.target;
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  const onDragEnter = (event) => {
    event.preventDefault();
  };

  const onDrop = (event) => {
    const dropzone = event.target;
    const target = event.target.className;

    if (target === 'dropzone__items') {
      dropzone.appendChild(dragElem);
    }

    if (target === 'delete__icon md hydrated') {
      dropzone.appendChild(dragElem);
    }
  };

  const setDrag = () => {
    const dropItems = [...items];
    const dropZones = Array.from(document.querySelectorAll('.dropzone__items'));
    dropItems.forEach((dropItem) => {
      dropItem.addEventListener('dragstart', onDragStart);
    });

    dropZones.forEach((dropzone) => {
      dropzone.addEventListener('drop', onDrop);
      dropzone.addEventListener('dragover', onDragOver);
      dropzone.addEventListener('dragenter', onDragEnter);
    });

    deleteElement.addEventListener('dragstart', onDragStart);
    deleteElement.addEventListener('drop', onDrop);
    deleteElement.addEventListener('dragover', onDragOver);
    deleteElement.addEventListener('dragenter', onDragEnter);
  };
  setDrag();

  const headers = Array.from(document.querySelectorAll('.dropzone__header'));

  addElement.addEventListener('click', onAdd);
  addElement.addEventListener('click', readText);
  addElement.addEventListener('click', setDrag);
  headers.forEach((header) => {
    header.addEventListener('dblclick', onEditText);
  });
})();
