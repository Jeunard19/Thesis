AFRAME.registerComponent('rotatemovement', {

  tick: function () {
	 if( document.getElementById("P1")){
		 var current_ball = document.getElementById("Ball11")
		 if(current_ball){
			 
	if(this.el.querySelector('#my-tracked-left-hand')){
	var ball = document.getElementById(this.name);
	   var x = this.el.querySelector('#my-tracked-left-hand').object3D.position.x;
	    var y = this.el.querySelector('#my-tracked-left-hand').object3D.position.y;
	     var z = this.el.querySelector('#my-tracked-left-hand').object3D.position.z;
	  current_ball.setAttribute('position',  {x:-z, y:y,  z:x})
  }
			 } else {
		  var ball= document.createElement('a-entity');
		  ball.setAttribute('networked',{template:'#ball-template'});
          ball.setAttribute('networked',{networkId:'Ball11'});
          ball.setAttribute('id','Ball11');
          ball.setAttribute('position', {x:0,  y:0,  z:1});
         ball.setAttribute('visible','false');
          this.el.appendChild(ball);
				 }

} else  if( document.getElementById("P2")){
		 var current_ball = document.getElementById("Ball22")
		 if(current_ball){
			 
	if(this.el.querySelector('#my-tracked-left-hand')){
	var ball = document.getElementById(this.name);
	   var x = this.el.querySelector('#my-tracked-left-hand').object3D.position.x;
	    var y = this.el.querySelector('#my-tracked-left-hand').object3D.position.y;
	     var z = this.el.querySelector('#my-tracked-left-hand').object3D.position.z;
	  current_ball.setAttribute('position',  {x:-z, y:y,  z:x})
  }
			 } else {
		  var ball= document.createElement('a-entity');
		  ball.setAttribute('networked',{template:'#ball-template2'});
          ball.setAttribute('networked',{networkId:'Ball22'});
          ball.setAttribute('id','Ball22');
          ball.setAttribute('position', {x:0,  y:0,  z:1});
           ball.setAttribute('visible','false');
          this.el.appendChild(ball);
				 }

}



}
		





});
