const clearPage = () => {
  const main = document.querySelector('main');
  main.innerHTML = '';
};

const renderPageTitle = (title) => {
  if (!title) return;
  const main = document.querySelector('main');
  const pageTitle = document.createElement('h4');
  pageTitle.innerText = title;
  main.appendChild(pageTitle);
};

const renderImage = (url, wrapper) => {
  const image = document.createElement('img');
  image.src = url;
  wrapper.appendChild(image);
}

export { clearPage, renderPageTitle, renderImage };

