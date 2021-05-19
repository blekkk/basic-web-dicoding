const displayElement = (elem) => {
  let modal = document.getElementById(elem);
  modal.style.display = 'flex';
}

const closeElement = (elem) => {
  let modal = document.getElementById(elem);
  modal.style.display = 'none';
}