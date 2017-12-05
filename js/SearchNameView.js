var SearchNameView = function (service) {
    var employeeListView;
    this.initialize = function () {
        // Define a div wrapper for the view (used to attach events)
        this.$el = $('<div/>');
        this.$el.on('keyup', '.search-key-fname', findByName);
		this.$el.on('keyup', '.search-key-lname', findByName)
        employeeListView = new EmployeeListView();
    };
    this.initialize();
    this.render = function() {
        this.$el.html(this.template());
        $('.content', this.$el).html();
        return this;
    };
    function findByName() {
    	var fnamevalue = $('.search-key-fname').val().trim();
    	var lnamevalue = $('.search-key-lname').val().trim();
    	if (fnamevalue.length >= 2 || lnamevalue.length >= 2 )
    	{
        service.findByName(fnamevalue, lnamevalue).done(function (employees) {
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