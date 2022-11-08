//let's say that this is going to be done by you, the arquitecture or owner.
class JokesRepository{
   
  
showCustomizedJoke(response){
  document.getElementById("CategoriedJoke").innerHTML = "<h3>"+ response.value+"</h3>";   
 }

callRandom01Jokes(){
  fetch('https://api.chucknorris.io/jokes/random')
      //this line Filters just the Jokes info NOt the http response
          .then((response) => response.json())
          .then((response) => 
          ///here it's where you communicate to your html
          document.getElementById("random01").innerHTML =  response.value 
          );           
 }
 
callRandom02Jokes(){
  fetch('https://api.chucknorris.io/jokes/random')
      //this line Filters just the Jokes info NOt the http response
          .then((response) => response.json())
          .then((response) => 
          ///here it's where you communicate to your html
          document.getElementById("random02").innerHTML =  response.value 
          );           
 }
 
 
 
callJokeByCategory(){
  fetch('https://api.chucknorris.io/jokes/random?category='+ $("#choiceCategory :selected").text())
      //this line Filters just the Jokes info NOt the http response
          .then((response) => response.json())
          .then((response) => 
          ///here it's where you communicate to your html
          this.showCustomizedJoke(response)
          );           
 }
 
 //whereToPutId = the id of the html element that will receive the joke
callJokeByCategories(categoryName, whereToPutId){
  fetch('https://api.chucknorris.io/jokes/random?category='+ categoryName)
      //this line Filters just the Jokes info NOt the http response
          .then((response) => response.json())
          .then((response) => 
          ///here it's where you communicate to your html
          document.getElementById(whereToPutId).innerHTML = response.value
          );           
 }

}


  class Jokes{
      constructor(){

      }
    
 showCustomizedJoke(response){
    document.getElementById("CategoriedJoke").innerHTML = "<h3>"+ response.value+"</h3>";   
   }

callRandom01Jokes(){
    fetch('https://api.chucknorris.io/jokes/random')
        //this line Filters just the Jokes info NOt the http response
            .then((response) => response.json())
            .then((response) => 
            ///here it's where you communicate to your html
            document.getElementById("random01").innerHTML =  response.value 
            );           
   }
   
 callRandom02Jokes(){
    fetch('https://api.chucknorris.io/jokes/random')
        //this line Filters just the Jokes info NOt the http response
            .then((response) => response.json())
            .then((response) => 
            ///here it's where you communicate to your html
            document.getElementById("random02").innerHTML =  response.value 
            );           
   }
   
   
   
 callJokeByCategory(){
    fetch('https://api.chucknorris.io/jokes/random?category='+ $("#choiceCategory :selected").text())
        //this line Filters just the Jokes info NOt the http response
            .then((response) => response.json())
            .then((response) => 
            ///here it's where you communicate to your html
            showCustomizedJoke(response)
            );           
   }
   
   //whereToPutId = the id of the html element that will receive the joke
 callJokeByCategories(categoryName, whereToPutId){
    fetch('https://api.chucknorris.io/jokes/random?category='+ categoryName)
        //this line Filters just the Jokes info NOt the http response
            .then((response) => response.json())
            .then((response) => 
            ///here it's where you communicate to your html
            document.getElementById(whereToPutId).innerHTML = response.value
            );           
   }

}




