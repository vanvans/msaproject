$('#click').on('click', function (e) {
    e.preventDefault();
    $.ajax({
        type: 'GET',
        url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",
        success: function (data) {
            var post = data.shift();
            //quote and author added to the page
            $('#quote').html(post.content);
            $('#author').html(post.title);
        },
        cache: false,
    });
});
