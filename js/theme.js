$(document).ready(function(){

   

    $("input.floatlabel, textarea.floatlabel").focus(function() {
        $(this).next('label').addClass("active")
    });
    $("input.floatlabel, textarea.floatlabel").focusout(function() {
            var inputContent = $(this).val();
            if ( inputContent !== '' ) {
            $(this).next('label').addClass('has-content');
        } else {
            $(this).next('label').removeClass('has-content');
        }
        $(this).next('label').removeClass("active")

    });
});