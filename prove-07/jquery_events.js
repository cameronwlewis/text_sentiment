/**
 * Created by cameronlewis on 2/17/17.
 */
// jQuery event listener. Gives answer to "What is this?" on hover.
$(document).on('mouseenter', '#what_is_this', function(e){
    e.preventDefault();

    var explain = document.getElementById('explain_text');
    var what_is_this = document.getElementById('what_is_this');
    what_is_this.style.color = "gray";

    explain.innerHTML =
        'Ever had a hard time trying ' +
        'to understand if a text message was ' +
        'positive or negative? How about a tweet? Hundreds of computers ' +
        'linked together have been fed millions of pages of text to teach ' +
        'them what humans really mean when they say something. ' +
        'It\'s called machine learning, the same technology used by Siri ' +
        'and Google Assistant to make sense of the things humans tell them.';

}).on('mouseleave','#what_is_this',  function(){
    var remove_explain = document.getElementById('explain_text');
    var what_is_this = document.getElementById('what_is_this');
    what_is_this.style.color = "white";
    remove_explain.innerHTML = '';
});

function loadingGIF(x) {
    var loading = document.getElementById('loading');
    loading.style.display = x;
}

$(document).on('submit', '#submit_hashtag', function(e){
    e.preventDefault();
    var text = document.getElementById('validation').innerHTML;
    if(text =="") {
        loadingGIF('block');

        var hashtag = $('#input_hashtag').val();

        // Use AJAX to send data via POST and obtain the results of 'echo' in PHP script
        $.ajax({

            type: "POST",
            url: 'searchTweets.php',
            data: {input_hashtag: hashtag},

            success: function (response) {
                console.log('it was clicked!');
                $('#result').html(response);
            },
            error: function () {
                alert('error. sorry pal');
                console.log('there was an error, pal');
            },
            complete: function () {
                loadingGIF('none');
            }
        });
    }
    else{
        alert('Please remove the invalid characters to submit.');
    }
});

/*$(document).on("click", '#mySearches', function (e) {
    e.preventDefault();

    loadingGIF('block');

    // Use AJAX to send data via POST and obtain the results of 'echo' in PHP script
    $.ajax({

        url: 'mySearches.php',

        success: function (response) {
            console.log('it was clicked!');
            //loading.innerHTML = '';
            $('#result').html(response);
            //$('#result')
        },
        error: function () {
            alert('error. sorry pal');
            console.log('there was an error, pal');
        },
        complete: function() {
            // no matter the result, complete will fire, so it's a good place
            // to do the non-conditional stuff, like hiding a loading image.

            loadingGIF('none');
        }
    });
});
*/
