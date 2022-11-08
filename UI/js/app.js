//let's say that this is going to be done by programmer you hired 
const jokeModel = new JokesRepository();


jokeModel.callRandom01Jokes();
jokeModel.callRandom02Jokes();
jokeModel.callJokeByCategories('animal','animalId');
jokeModel.callJokeByCategories('career','careerId');
jokeModel.callJokeByCategories('fashion','fashionId');
jokeModel.callJokeByCategories('money','moneyId');
jokeModel.callJokeByCategories('music','musicId');
jokeModel.callJokeByCategories('food','foodId');

document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide' );
    splide.mount();
  } );