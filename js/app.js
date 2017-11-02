// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    var service = new EmployeeService();
    service.initialize().done(function () {
        console.log("Service initialized");
    });

    /* --------------------------------- Event Registration -------------------------------- */
    $('.search-key-fname').on('keyup', findByName);
    $('.search-key-lname').on('keyup', findByName);
    $('.help-btn').on('click', function() {
       alert("Employee Directory v3.4");
    });
    /*document.addEventListener('deviceready', 
    function () {
    	if (device.platform != "browser") {
    		window.alert = function (message) {
    		navigator.notification.alert(
    		message,
    		null,
    		"Workshop on Android",
    		'OK'
    		);
    	};
    }
  }, false);*/

    /* ---------------------------------- Local Functions ---------------------------------- */
    function findByName() {
    	var fnamevalue = $('.search-key-fname').val()
    	var lnamevalue = $('.search-key-lname').val()
    	//console.log(searchvalue.length)
    	if (fnamevalue.length >= 2 && lnamevalue.length >= 2 )
    	{
    		var fullname = fnamevalue + ' ' + lnamevalue
        service.findByName(fullname).done(function (employees) {
            var l = employees.length;
            var e;
            console.log (fullname)
            $('.employee-list').empty();
            for (var i = 0; i < l; i++) {
                e = employees[i];
                $('.employee-list').append('<li><a href="#employees/' + e.id + '">' + e.firstName + ' ' + e.lastName + '</a></li>');
            }
        });
      }
      else 
      	$('.employee-list').empty();
    }

}());