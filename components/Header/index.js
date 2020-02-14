// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

    const header = document.createElement('div'),
    date = document.createElement('span'),
    h1 = document.createElement('h1'),
    temp = document.createElement('span');


    date.textContent = 'SMARCH 28, 2019';
    h1.textContent = 'Lambda Times';
    temp.textContent = '98°';
    //newImage.src = imgUrl;
    
    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');
    
    const container = document.querySelector('.header-container');
    container.append(header);
    header.append(date);
    header.append(h1);
    header.append(temp);
    
    return header;
}

Header();
