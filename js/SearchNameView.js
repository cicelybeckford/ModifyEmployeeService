var SearchNameView = function (service) {
    var employeeListView;
    this.initialize = function () {
        // Define a div wrapper for the view (used to attach events)
        this.$el = $('<div/>');
        this.$el.on('keyup', '.search-key', findByName);
        employeeListView = new EmployeeListView();
    };
    this.initialize();
    this.render = function() {
        this.$el.html(this.template());
        $('.content', this.$el).html(employeeListView.$el);
        return this;
    };
    function findByName() {
    	var fnamevalue = $('.search-key-fname').val().trim();
    	var lnamevalue = $('.search-key-lname').val().trim();
    	if (fnamevalue.length >= 2 || lnamevalue.length >= 2 )
    	{
        service.findByName(fnamevalue, lnamevalue).done(function (employees) {
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