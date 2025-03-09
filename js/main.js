$(document).ready( function() {
    
// Logo
var $logo = $('#logo');
$logo.show();

// Show logo on tab click
$('#tab-container .tab a').click(function() {
    $logo.slideDown('slow');
});

// Hide logo on about tab click
$('#tab-about').click(function() {
    $logo.slideDown('slow');
});
function animMeter(){
    $(".meter > span").each(function() {
                $(this)
                    .data("origWidth", $(this).width())
                    .width(0)
                    .animate({
                        width: $(this).data("origWidth")
                    }, 1200);
            });
}
animMeter();

      $('#tab-container').easytabs({
        animate			: true,
        updateHash		: true,
        transitionIn	: 'slideDown',
        transitionOut	: 'slideUp',
        animationSpeed	: 800,
        tabActiveClass	: 'active'}).bind('easytabs:midTransition', function(event, $clicked, $targetPanel){
            if($targetPanel.selector=='#resume'){
                    animMeter();
            }
        });
    });
