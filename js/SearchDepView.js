var SearchDepView = function (service) {
    var employeeListView;
    this.initialize = function () {
        // Define a div wrapper for the view (used to attach events)
        this.$el = $('<div/>');
        this.$el.on('keyup', '.search-key-dep', findByDep);
		this.$el.on('keyup', '.search-key-title', findByDep);
        employeeListView = new EmployeeListView();
    };
    this.initialize();
    this.render = function() {
        this.$el.html(this.template());
        $('.content', this.$el).html();
        return this;
    };
    function findByDep() {
    	var depvalue = $('.search-key-dep').val().trim();
    	var titlevalue = $('.search-key-title').val().trim();
    	if (depvalue.length >= 2 || titlevalue.length >= 2 )
    	{
        	service.findByDep(depvalue, titlevalue).done(function (employees) {
			$('.content', this.$el).html(employeeListView.$el);
            employeeListView.setEmployees(employees);
            var listLength = $('#list li').length;
            if (listLength == 0)
            {
				console.log(listLength);
            	$('.search-message').text("No employees were found");
            	$('#list').empty();
            }
            else if (listLength == 1)
            	$('.search-message').text(listLength + " employee was found");
            else
            	$('.search-message').text(listLength + " employees were found");
        });
      }
      else 
      	$('.content', this.$el).empty();
    }
}