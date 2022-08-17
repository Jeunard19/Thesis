AFRAME.registerComponent('positioner2', {
init: async function() {

      //var el = document.getElementById("cameraRig");
       var el= this.el;
       
       const delay = millis => new Promise((resolve, reject) => {
  setTimeout(_ => resolve(), millis)
});
		  await delay(5000);

        if (Object.keys(NAF.connection.getConnectedClients()).length === 0) {
			console.log( el.getAttribute('position'))
		
			console.log(el.getAttribute('rotation'))
            el.setAttribute('position', {x:0,  y:0,  z:1});
            el.setAttribute('id', "P1");
            
            var ball = document.createElement('a-entity');
           // ball.setAttribute('networked',{template:'#ball-template'});
            //ball.setAttribute('networked',{networkId:'Ball1'});
            
          ball.setAttribute('geometry',{primitive:'sphere'});
            ball.setAttribute('geometry',{radius:'0.15'});
            ball.setAttribute('material',{color:'red'});
            this.name = "Ball1"
            ball.setAttribute('id','Ball1');
            ball.setAttribute('position', {x:0,  y:0,  z:1});
            //NAF.clientId = "player1"
             el.appendChild(ball);
		   //document.querySelector('a-scene').appendChild(ball);
			
           
		}
          


        else if(Object.keys(NAF.connection.getConnectedClients()).length === 1) {
	
	//el.object3D.rotation.set(0, THREE.Math.degToRad(180), 0);
		  //await delay(1000);

            el.setAttribute('position', {x:0,  y:0,  z:-1});
            el.setAttribute('id', "P2");
            el.object3D.rotation.set(
  THREE.Math.degToRad(0),
  THREE.Math.degToRad(180),
  THREE.Math.degToRad(0)
);
              
            var ball = document.createElement('a-entity');
           // ball.setAttribute('networked',{template:'#ball-template2'});
           // ball.setAttribute('networked',{networkId:'Ball2'});
           this.name = "Ball2"
           ball.setAttribute('id','Ball2');
           ball.setAttribute('geometry',{primitive:'sphere'});
           ball.setAttribute('geometry',{radius:'0.15'});
           ball.setAttribute('material',{color:'green'});
 
           ball.setAttribute('position', {x:0,  y:0,  z:-1})
            el.appendChild(ball);
          
        }
        else if(Object.keys(NAF.connection.getConnectedClients()).length === 2){
			console.log( el.getAttribute('position'))
            el.setAttribute('position', {x:0,  y:1,  z:4});
             el.setAttribute('id', "P3");
             console.log(el)

}},

  tick: function () {
	 if( document.getElementById(this.name)){
		 if(this.el.querySelector('#my-tracked-left-hand')){
	var ball = document.getElementById(this.name);
	   var x = this.el.querySelector('#my-tracked-left-hand').object3D.position.x;
	    var y = this.el.querySelector('#my-tracked-left-hand').object3D.position.y;
	     var z = this.el.querySelector('#my-tracked-left-hand').object3D.position.z;
	  ball.setAttribute('position',  {x:x, y:y,  z:z})
}}
  }




});
