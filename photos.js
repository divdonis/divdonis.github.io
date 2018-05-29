$("img").click(function(){
	$(this).toggleClass("expand");
});

$(document).ready(function() {
    // Fix background image caching problem
    if (jQuery.browser.msie) {
        try { 
            document.execCommand("BackgroundImageCache", false, true); 
        } catch(err) {}
    }
};
// $(function() {
//     $('div').on("click", "img", function() {
//        // alert();
//          if($(this).hasClass("set"))
//         {
//            // alert();
//          $(this).fadeOut(1000, function() { 
//            $(this).toggleClass('expand');
//         });
          
//         } else {
            
//             //alert('no class');
//         $(this).fadeIn(1000, function() { 
//            $(this).addClass('set'); 
//         });
//         }

//     });
// });
