var HomeView = function(employee) {
    this.initialize = function() {
        this.$el = $('<div/>');
        this.$el.on('click', '.name-btn', this.routeName);
		this.$el.on('click', '.dep-btn', this.routeDep);
	};
	this.render = function() {
   		this.$el.html(this.template(employee));
   	 	return this;
	};
	this.routeName = function () {
   	 	
	};
	this.initialize();
}