// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const Header = () => {
  const headerContainer = document.querySelector('header-container');
  const headerDiv = document.createElement('div');
  const dateSpan = document.createElement('span');
  const header = document.createElement('h1');
  const tempSpan = document.createElement('span');

  headerDiv.className = 'header';
  dateSpan.className = 'date';
  dateSpan.textContent = 'SMARCH 28, 2019';
  header.textContent = 'Lambda Times'
  tempSpan.className = 'temp';
  tempSpan.textContent = '98°';

  headerContainer.appendChild(headerDiv);
  headerDiv.appendChild(dateSpan);
  headerDiv.appendChild(header);
  headerDiv.appendChild(tempSpan);

}

Header();