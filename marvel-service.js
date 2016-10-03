function MarvelService(){
  var key = '?apikey=e44062bbc76b37176b08325d5265a0f3';
  var baseUrl = 'http://gateway.marvel.com/v1/public/'
  
  var dataStore = this;
  var marvelCharacters = [];
  var myCharacters = [];

  
  
  dataStore.getMarvelCharacters = function(){
        return marvelCharacters; 
    //what should this function return
  }
  
  dataStore.getMyCharacters = function(){
      return myCharacters;
    //what should this function return
  }
  
  
  
  dataStore.addToMyCharacters = function(id){
      for(var i=0; i< marvelCharacters.length; i++){
          var char =  marvelCharacters[i];
          if(char.id == id){
              myCharacters.push(char);
              marvelCharacters.splice(i,1);
          }
      }
          return
      }
    //in order to add a character to your list you will first need to find 
    //the character by its id in the marvelCharacters array


  
  dataStore.removeMyCharacter = function(id){
      for(var i=0; i< myCharacters.length; i++){
          var char = myCharacters[i];
          if(char.id == id){
              myCharacters.splice(i,1);
          }
      }
          return
      }

    //you need to find the character that you want to remove by its id
    //and remove it.

  
  
  dataStore.getCharacters = function(callWhenDone){
    var data = localStorage.getItem('MarvelData')
    if(data){
      marvelCharacters = JSON.parse(data);
      return callWhenDone(marvelCharacters)
    }
    $.get(baseUrl + 'characters'+key, function(response){
      localStorage.setItem('MarvelData', JSON.stringify(response.data.results))
      marvelCharacters = response.data.results;
      callWhenDone(marvelCharacters)
    })
  }
  
  
}