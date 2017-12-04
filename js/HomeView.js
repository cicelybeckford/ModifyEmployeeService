var HomeView = function(employee) {
    this.initialize = function() {
        this.$el = $('<div/>');
        this.$el.on('click', '.name-btn', routeName);
		this.$el.on('click', '.dep-btn', routeDep);
	};
	this.render = function() {
   		this.$el.html(this.template(employee));
   	 	return this;
	};
	function routeName () {
   	 	router.load('SearchName');
	}
	function routeDep () {
   	 	router.load('SearchDep');
	}
	this.initialize();
}