 
var dataStore = new MarvelService()


dataStore.getCharacters(ready)

function ready(data){
  
  update(data, '#marvel-characters')
  
  $('#marvel-characters').on('click', '.btn-success', function(){
     dataStore.addToMyCharacters(this.id);
     update(dataStore.getMarvelCharacters(), '#marvel-characters');
     update(dataStore.getMyCharacters(), '#my-characters');

    //this function will take the player that was clicked and add them to your team through the dataStore.
 
  })
  
  $('#my-characters').on('click', '.btn-danger', function(){
     dataStore.removeMyCharacter(this.id);
   update(dataStore.getMarvelCharacters(), '#marvel-characters');
     update(dataStore.getMyCharacters(), '#my-characters');
    //this will remove the character from your team
  })
  
  
  function update(list, target){
    //target is the id of the element where the list will be rendered
    debugger;
    var elem = $(target)
    elem.empty()
     
    for (var i in list) {
      console.log(list)
      var character = list[i];
      console.log(character);
      var marvelTemplate = `
      <div class="card">
        <img src="${character.thumbnail.path}.${character.thumbnail.extension}" width="100">
        <h3>${character.name}</h3>
        <div>
          <button class="btn-success" id="${character.id}">Add to Team</button>
        </div>
      <div>
      `
      var myTemplate = `
      <div class="card">
        <img src="${character.thumbnail.path}.${character.thumbnail.extension}" width="100">
        <h3>${character.name}</h3>
        <div>
          <button class="btn-danger" id="${character.id}">DESTROY FOREVER</button>
        </div>
      <div>
      `
      
      elem.append(target == '#marvel-characters' ? marvelTemplate : myTemplate)
    }
    
  }
  
}