// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

   
		HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
		SearchNameView.prototype.template = Handlebars.compile($("#search-name-tpl").html());
		SearchDepView.prototype.template = Handlebars.compile($("#search-dep-tpl").html());
        EmployeeListView.prototype.template = Handlebars.compile($("#employee-list-tpl").html());
		EmployeeView.prototype.template = Handlebars.compile($("#employee-tpl").html());
	
			
    /* ---------------------------------- Local Variables ---------------------------------- */
    var service = new EmployeeService();
    service.initialize().done(function () {
		router.addRoute('Home', function() {
			$('body').html(new HomeView(service).render().$el);
		});
		router.addRoute('SearchName', function() {
			$('body').html(new SearchNameView(service).render().$el);
		});
		router.addRoute('SearchDep', function() {
			$('body').html(new SearchDepView(service).render().$el);
		});
		router.addRoute('employees/:id', function(id) {
			service.findById(parseInt(id)).done(function(employee) {
				$('body').html(new EmployeeView(employee).render().$el);
			});
		});
		router.start();
    });

    /* --------------------------------- Event Registration -------------------------------- */
   /* $('.search-key-fname').on('keyup', findByName);
    $('.search-key-lname').on('keyup', findByName);
    $('.help-btn').on('click', function() {
       alert("Employee Directory v3.4");
    });/*

    /* ---------------------------------- Local Functions ---------------------------------- */
    
}());