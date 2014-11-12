$(document).bind("mobileinit", function () {
    $.mobile.pushStateEnabled = true;
});
var menuStatus;

$(function () {
    var show = function() {
        if(menuStatus) {
            return;
        }
        $('#menu').show();
        $.mobile.activePage.animate({
            marginLeft: "165px",
        }, 150, function () {
            menuStatus = true
        });
    };
    var hide = function() {
        if(!menuStatus) {
            return;
        }
        $.mobile.activePage.animate({
            marginLeft: "0px",
        }, 150, function () {
            menuStatus = false
            $('#menu').hide();
        });
    };
    var toggle = function() {
        if (!menuStatus) {
            show();
        } else {
            hide();
        }
        return false;
    };
 
    // Show/hide the menu
    /*
    $("a.showMenu").click(toggle);
    $('.pages').on("swipeleft", function(event) {
     	event.stopPropagation();
     	event.preventDefault();
     	hide();
    	});
	$('#uuu').on("swipeleft", function(event) {
	 	event.stopPropagation();
	 	event.preventDefault();
		});
    $('.pages').on("swiperight", function(event) {
     	event.stopPropagation();
     	event.preventDefault();
     	show();
    	});
	$('#uuu').on("swiperight", function(event) {
	 	event.stopPropagation();
	 	event.preventDefault();
		});
    */
    $("a.showMenu").click(toggle);

    
    $(document).on('swipeleft', '.pages', function(event) {
 	event.stopPropagation();
 	event.preventDefault();
 	hide();
	});
	
	$(document).on('swipeleft', '#uuu', function(event) {
 	event.stopPropagation();
 	event.preventDefault();
	});
	
    $(document).on('swiperight', '.pages', function(event) {
 	event.stopPropagation();
 	event.preventDefault();
 	show();
	});
	
	$(document).on('swiperight', '#uuu', function(event) {
 	event.stopPropagation();
 	event.preventDefault();
	});
	
	$(document).on('swiperight', '#myImage', function(event) {
 	event.stopPropagation();
 	event.preventDefault();
	});
	
	$(document).on('swipeleft', '#myImage', function(event) {
 	event.stopPropagation();
 	event.preventDefault();
	});
    
    
    /*
    $('#container').on("swipeleft", ".pages", hide);
    $('#container').on("swiperight", ".pages", show);
    */
    
    $('body').on("pagebeforeshow", 'div[data-role="page"]', function (event, ui) {
        menuStatus = false;
        $(".pages").css("margin-left", "0");
    });
 
    // Menu behaviour
    $("#menu li a").click(function () {
        var p = $(this).parent();
        p.siblings().removeClass('active');
        p.addClass('active');
        hide();
    });
});
