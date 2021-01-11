$(() => {
    const client = new WebSocket('ws://localhost:3000');
    client.onopen = function(event) {
        console.log('connection open')
    }

    client.onmessage = function(event) {
        updateChat(event.data)
    }
    
    $('.chat-form').submit(e => {
        client.send(JSON.stringify({name: $('#chat-form-name').val(), message: $('#chat-form-message').val()}))
        e.preventDefault();

        // $.post('/api', {
        //     name: $('#chat-form-name').val(),
        //     message: $('#chat-form-message').val()
        // }, updateChat)
        // $.post(1, 2, 3)

    })

    const updateChat = ((data) => {
        const parsedData = JSON.parse(data)
        let date = new Date(Date.now()).toLocaleString();
        let output = '';
            // [{}, {}, {}]

            // loop
            // concatenate output

            // data.forEach((item, key) => {
                output += '     <div class="chat-item item-list media-list">';
                output += '       <div class="chat-item media">';
                // output += '       <div class="media-left"><button class="chat-delete btn btn-xs btn-danger"><span id="' + key + '" class="glyphicon glyphicon-remove"></span></button></div>';
                output += '         <div class="chat-info media-body">';
                output += '           <div class="chat-head d-flex row">';
                output += '             <div class="chat-name label label-info col-2">' + parsedData.name + ': </div>'; 
                // output += '           </div>';
                output += '             <div class="chat-message col-7">' + parsedData.message + '</div>';
                output += '             <div class="chat-message col-3 justify-content-end">' + date + '</div>';
                output += '           </div>';
                output += '         </div>'; 
                output += '       </div>';
                output += '     </div>';
            // })

            $('.chat-messages').html(output)
    })

    // $.getJSON('/api', updateChat) // $.getJSON(1, funct)
})