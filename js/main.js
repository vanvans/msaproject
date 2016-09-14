$(function(){
    var $quote = $('#quote');
    $.ajax({
        type: 'GET',
        url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
        success: function(quote){
            $.each(quote, function(i, item){
                $quote.html(item.content + item.title);
        
            });
        }

    });
});


$("#btn-wrapper").click(function() {
    alert( "Handler for .click() called." );
    });

