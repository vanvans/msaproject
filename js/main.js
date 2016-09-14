
$('#click').on('click', function(e) {
    e.preventDefault();
    var $quote = $('#quote');
    $.ajax({
        type: 'GET',
        url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",
        timeout: 3000,
        success: function(data){
            var post = data.shift();
            
            $('#quote').html(post.content);
            $('#author').html(post.title);

            },

        cache: false,
        

    });




});




