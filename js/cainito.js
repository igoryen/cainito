jQuery(document).ready(function($){ 
	console.log("loaded");
	$("#about_performance_lead_singer").change(function () {
    	$('.singer_profile_overview').removeClass('visible');
       	$('#' + $(this).val().toLowerCase()).addClass('visible');  
    });



	// $('.grid').masonry({
	//   itemSelector: '.grid-item',
	//   columnWidth: 160
	// });

	$('.grid').masonry({
	  itemSelector: '.grid-item',
	  columnWidth: '.grid-sizer',
	  percentPosition: true
	});


});

