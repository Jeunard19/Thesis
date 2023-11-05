AFRAME.registerComponent('game', {
init: function() {
     var el2 = document.getElementById("mydropdown2");
		  const objects = ["Car", "House", "Beach", "Peace", "Love", "Thunder","Music","War","Joke","Magic"];
      var object = objects[Math.floor(Math.random()*objects.length)];
      var options = [object]
      el2.setAttribute('value', object);


   while (options.length < 3) {
      new_object = objects[Math.floor(Math.random()*objects.length)];
      if(!options.includes(new_object)){
		  options.push(new_object)}
	  }
	  
	  
let shuffled_options = options
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)
      
   option = "option"
   option_id = ""
   let i = 0;
    for (let i = 0; i < 3; i++) { 
      option_id = option+""+(i+1)
      console.log(option_id)
      var el1 = document.getElementById(option_id);
      el1.setAttribute('value', shuffled_options[i]);
}


}
});
