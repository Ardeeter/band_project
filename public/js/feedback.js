$(() => {

    
    $('.feedback-form').submit(e => {
        e.preventDefault();

        let date = new Date(Date.now()).toLocaleString();

        $.post('/api', {
            name: $('#feedback-form-name').val(),
            title: $('#feedback-form-title').val(),
            message: $('#feedback-form-message').val(),
            date: date
        }, updateFeedback)
        // $.post(1, 2, 3)

    })

    const updateFeedback = ((data) => {
        let output = '';
            // [{}, {}, {}]

            // loop
            // concatenate output

            data.forEach((item, key) => {
                output += '     <div class="feedback-item item-list media-list">';
                output += '       <div class="feedback-item media">';
                output += '       <div class="media-left"><span id="' + key + '" class="glyphicon glyphicon-remove"></span></button></div>';
                output += '         <div class="feedback-info media-body">';
                output += '           <div class="feedback-head">';
                output += '             <div class="feedback-title"> RE: ' + item.title + '<small class="feedback-name label label-info"> From: ' + item.name + '</small></div>';
                output += '           </div>';
                output += '           <div class="feedback-message"> '+ item.date + ' -- ' + item.message + '</div>';
                output += '         </div>'; 
                output += '       </div>';
                output += '     </div>';
            })

            $('.feedback-messages').html(output)
    })

    $.getJSON('/api', updateFeedback) // $.getJSON(1, funct)
})