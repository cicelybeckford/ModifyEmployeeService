// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    var homeTpl = Handlebars.compile($("#home-tpl").html());
		var employeeListTpl = Handlebars.compile($("#employee-list-tpl").html());
	
		function renderHomeView() {
			$('body').html(homeTpl());
			$('.search-key-fname').on('keyup', findByName);
      $('.search-key-lname').on('keyup', findByName); }
			
    /* ---------------------------------- Local Variables ---------------------------------- */
    var service = new EmployeeService();
    service.initialize().done(function () {
        renderHomeView();
    });

    /* --------------------------------- Event Registration -------------------------------- */
   /* $('.search-key-fname').on('keyup', findByName);
    $('.search-key-lname').on('keyup', findByName);
    $('.help-btn').on('click', function() {
       alert("Employee Directory v3.4");
    });/*

    /* ---------------------------------- Local Functions ---------------------------------- */
    function findByName() {
    	var fnamevalue = $('.search-key-fname').val().trim();
    	var lnamevalue = $('.search-key-lname').val().trim();
    	if (fnamevalue.length >= 2 || lnamevalue.length >= 2 )
    	{
        service.findByName(fnamevalue, lnamevalue).done(function (employees) {
            $('.content').html(employeeListTpl(employees));
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
}());