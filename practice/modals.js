const modal = document.getElementById('modal');
const openButton = document.getElementById('open-modal');
const closeButton = modal.querySelector('.close-button');
const modalDescription = document.getElementById('modal-description');

function openModal() {
  const paragraphs = document.querySelectorAll('main p');
  let textContent = '';
  for (let i = 0; i < 3 && i < paragraphs.length; i++) {
    textContent += paragraphs[i].textContent + '\n';
  }
  modalDescription.textContent = textContent.trim();

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

openButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});