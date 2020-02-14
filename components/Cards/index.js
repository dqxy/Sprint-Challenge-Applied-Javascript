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


function card(item) {

    const card = document.createElement('div'),
    headline = document.createElement('div'),
    author = document.createElement('div'),
    img_container = document.createElement('div'),
    img = document.createElement('img'),
    name = document.createElement('span');

    headline.textContent = item[0];
    name.textContent = 'By ' + item[2] ;
    img.src = item[1];
    //console.log(item);
    
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    img_container.classList.add ('img_container');
    
//    const container = document.querySelector('.cards-container');
//    container.append(card);
    card.append(headline);
    card.append(author);
    author.append(img_container);
    img_container.append(img);
    author.append(name);

    
    return card;
}

const entryPoint2 = document.querySelector('.cards-container');

axios.get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {

   // console.log(Object.values(response.data.articles)[3][2]);
   Object.entries(response.data.articles)[0][1].forEach(myFunction2);
   Object.entries(response.data.articles)[1][1].forEach(myFunction2);
   Object.entries(response.data.articles)[2][1].forEach(myFunction2);
   Object.entries(response.data.articles)[3][1].forEach(myFunction2);
   Object.entries(response.data.articles)[4][1].forEach(myFunction2);
   
    
    function myFunction2(item, index) {
    
      entryPoint2.append(card(Object.values(item)));
    }


     
  })
  .catch(error => {
  console.log("the data was not returned", error)
});

const fruits = {
    apple: 28,
    orange: 17,
    pear: 54,
  }
  
  const values = Object.values(fruits)
  //console.log(values) 

//    https://zellwk.com/blog/looping-through-js-objects/