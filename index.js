$(document).ready(function() {

    var nbAnim = 3;
    var anim = 1;
    
    setInterval(function() {

        anim++;
        anim %= nbAnim;
            
        $('#wire li').each(function(i) {
            $(this).css('animation-name', 'even-flash-' + anim);
        });

        $('#wire li:nth-child(odd)').each(function(i) {
            $(this).css('animation-name', 'odd-flash-' + anim);
        });

    }, 3000);

});