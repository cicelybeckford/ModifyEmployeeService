var SearchDepView = function (service) {
    var employeeListView;
    this.initialize = function () {
        // Define a div wrapper for the view (used to attach events)
        this.$el = $('<div/>');
        this.$el.on('keyup', '.search-key', findByDep);
        employeeListView = new EmployeeListView();
    };
    this.initialize();
    this.render = function() {
        this.$el.html(this.template());
        $('.content', this.$el).html(employeeListView.$el);
        return this;
    };
    function findByDep() {
    	var depvalue = $('.search-key-dep').val().trim();
    	var titlevalue = $('.search-key-title').val().trim();
    	if (depvalue.length >= 2 || titlevalue.length >= 2 )
    	{
        service.findByDep(depvalue, titlevalue).done(function (employees) {
            employeeListView.setEmployees(employees);
            var tableLength = $('#table tr').length - 1;
            if (tableLength == 0)
            {
            	$('.search-message').text("No employees were found");
            	$('#table').empty();
            }
            else if (tableLength == 1)
            	$('.search-message').text(tableLength + " employee was found");
            else
            	$('.search-message').text(tableLength + " employees were found");
        });
      }
      else 
      	 $('.content').empty();
    }
}