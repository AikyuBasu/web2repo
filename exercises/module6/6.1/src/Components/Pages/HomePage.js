const HomePage = async () => {

  try {
    const main = document.querySelector('main');
    main.classList = 'container mt-4';
    main.innerHTML = 'A joke :';


    const response = await fetch('/api/joke/Any?type=single');

    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

    const joke = await response.json();

    const divJoke = document.createElement('div');
    divJoke.innerHTML = `
    <h1>Category : ${joke.category}</h1>
    <h1>${joke.joke}</h1>
    `;
    main.appendChild(divJoke);
  } catch (err) {
    console.error('HomePage::error: ', err);
  }

};
  
  

export default HomePage;
