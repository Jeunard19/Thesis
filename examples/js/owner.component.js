AFRAME.registerComponent('owner', {
	
	init: function() {
		console.log('::::::::::::::::::')
		var that = this;
		console.log(this.el)
	
	 NAF.utils.getNetworkedEntity(this.el).then((el) => {
      if (NAF.utils.isMine(el)) {
        console.log("llllllllllllll")
      } else {
        console.log("llllllllllllll")
      }
	});
		}
}
);
