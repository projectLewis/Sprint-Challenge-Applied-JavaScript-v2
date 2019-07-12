// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    for (key in response.data.articles) {
      response.data.articles[key].forEach(el => {
        const {authorName, authorPhoto, headline} = el
        cardGenerator(authorName, authorPhoto, headline);
      });
    }
  });

  const cardGenerator = (authorName, authorPhoto, headline) => {
    const cardsContainer = document.querySelector('.cards-container');
    const cardDiv = document.createElement('div');
    const headlineDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imgContainerDiv = document.createElement('div');
    const img = document.createElement('img');
    const authorSpan = document.createElement('span');

    cardDiv.className = 'card';
    headlineDiv.className = 'headline';
    headlineDiv.textContent = headline;
    authorDiv.className = 'author'
    imgContainerDiv.className = 'img-container';
    img.src = authorPhoto;
    authorSpan.textContent = `by ${authorName}`;

    
    
    cardsContainer.appendChild(cardDiv);
    cardDiv.appendChild(headlineDiv);
    cardDiv.appendChild(authorDiv);
    authorDiv.appendChild(imgContainerDiv);
    imgContainerDiv.appendChild(img);
    authorDiv.appendChild(authorSpan)
  }