/*! 구현중 */


// var headerFix= function() {
//     $(window).scroll(function() {
//         var scroll=$(window).scrollTop();
//         console.log(scroll);

//         if(scroll > 0) {
//             $("header").css({position:'fixed' });
//         }else {
//             $("header").css({position:'static'});
//         }
//     });
// }





   var headerFix= function() {
        $(window).scroll(function() {
            var scroll=$(window).scrollTop();
            console.log(scroll);

            if(scroll > 0) {
                // $("header").css({position:'fixed',height:'100px' });
                $("header").addClass('on');
            }else {
                // $("header").css({position:'static'});
                $("header").removeClass('on');
            }
        });
   }