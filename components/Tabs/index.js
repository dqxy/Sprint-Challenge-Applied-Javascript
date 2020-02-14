// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


function tab(data) {
    const tab = document.createElement('div');
        
     tab.textContent = `${data}`;
     
     tab.classList.add('tab');

     return tab;
   }
   
 const entryPoint = document.querySelector('.topics');

 axios.get("https://lambda-times-backend.herokuapp.com/topics")
   .then(response => {

    response.data.topics.forEach(myFunction);
    
    function myFunction(item, index) {
      entryPoint.append(tab(item));
    }
     
   })
   .catch(error => {
   console.log("the data was not returned", error)
 });

