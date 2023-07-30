AFRAME.registerComponent('showall', {
init: function() {

      var el = document.getElementById("dropdownContainer");



        if (Object.keys(NAF.connection.getConnectedClients()).length === 0) {
            el.setAttribute('visible', true);
            console.log('hreqweqweqewell')
        }
        else if(Object.keys(NAF.connection.getConnectedClients()).length === 1) {
            el.setAttribute('visible', false);
            console.log('h')

        }
        else {
            el.setAttribute('position', {x:-8,  y:1,  z:-10});
            
            
        }
}


});

