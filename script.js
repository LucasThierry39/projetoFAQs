
const buttons = document.querySelectorAll('.openButton');

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault(); 
    const article = button.closest('.firstArticle');
    const imgContainers = article.querySelectorAll('.img-container');
    imgContainers.forEach((imgContainer) => {
        imgContainer.classList.toggle('active');
    });
    const text = article.querySelector('.text');
    text.classList.toggle('activeText');
  });
});

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault(); 
    const article = button.closest('.secondArticle');
    const imgContainers = article.querySelectorAll('.img-container');
    imgContainers.forEach((imgContainer) => {
        imgContainer.classList.toggle('active');
    });
    const text = article.querySelector('.text');
    text.classList.toggle('activeText');
  });
});

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault(); 
    const article = button.closest('.thirdArticle');
    const imgContainers = article.querySelectorAll('.img-container');
    imgContainers.forEach((imgContainer) => {
        imgContainer.classList.toggle('active');
    });
    const text = article.querySelector('.text');
    text.classList.toggle('activeText');
  });
});

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault(); 
    const article = button.closest('.fourArticle');
    const imgContainers = article.querySelectorAll('.img-container');
    imgContainers.forEach((imgContainer) => {
        imgContainer.classList.toggle('active');
    });
    const text = article.querySelector('.text');
    text.classList.toggle('activeText');
  });
});
