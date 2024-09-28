$(document).ready(function() {
  // Handle toggling of action menu
  $('#action_menu_btn').click(function() {
      $('.action_menu').toggle();
  });

  // Dynamically adjust chat height
  function adjustChatHeight() {
      let windowHeight = $(window).height();
      let headerHeight = $('.msg_head').outerHeight();
      let footerHeight = $('.card-footer').outerHeight();
      let contactsHeaderHeight = $('.contacts_card .card-header').outerHeight();
      let contactsFooterHeight = $('.contacts_card .card-footer').outerHeight();

      // Adjust height for the chat section
      let chatHeight = windowHeight - headerHeight - footerHeight;
      $('.msg_card_body').css('height', chatHeight + 'px');

      // Adjust height for the contacts section
      let contactsHeight = windowHeight - contactsHeaderHeight - contactsFooterHeight;
      $('.contacts_body').css('height', contactsHeight + 'px');
  }

  adjustChatHeight(); // Initial call
  $(window).resize(adjustChatHeight); // Adjust on window resize

  // Scroll to the bottom of the chat automatically
  function scrollToBottom() {
      $('.msg_card_body').scrollTop($('.msg_card_body')[0].scrollHeight);
  }

  scrollToBottom();

  // Switch between contacts and update chat content
  $('.contacts li').click(function() {
      $('.contacts li').removeClass('active');
      $(this).addClass('active');

      let userName = $(this).find('.user_info span').text();
      let userStatus = $(this).find('.user_info p').text();
      let userImg = $(this).find('.user_img').attr('src');

      // Update chat header with selected contact's info
      $('.msg_head .user_info span').text(userName);
      $('.msg_head .user_info p').text(userStatus);
      $('.msg_head .user_img').attr('src', userImg);

      // Clear current messages and load new messages for the selected contact (in real-world, you'd load from server)
      $('.msg_card_body').html(''); // Clear messages
      $('.msg_card_body').append(`
          <div class="d-flex justify-content-start mb-4">
              <div class="img_cont_msg">
                  <img src="${userImg}" class="rounded-circle user_img_msg">
              </div>
              <div class="msg_cotainer">
                  Hi ${userName}, how can I help you?
                  <span class="msg_time">10:00 AM, Today</span>
              </div>
          </div>
      `);
      scrollToBottom();
  });

  // Send new message
  $('.send_btn').click(function() {
      sendMessage();
  });

  // Press 'Enter' key to send message
  $('.type_msg').keypress(function(e) {
      if (e.which === 13) {
          e.preventDefault(); // Prevent newline
          sendMessage();
      }
  });

  // Function to send a new message
  function sendMessage() {
      let message = $('.type_msg').val();
      if (message.trim() === '') return; // Ignore empty messages

      let currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      // Append message to the chat body
      $('.msg_card_body').append(`
          <div class="d-flex justify-content-end mb-4">
              <div class="msg_cotainer_send">
                  ${message}
                  <span class="msg_time_send">${currentTime}</span>
              </div>
              <div class="img_cont_msg">
                  <img src="https://avatars.hsoubcdn.com/ed57f9e6329993084a436b89498b6088?s=256" class="rounded-circle user_img_msg">
              </div>
          </div>
      `);

      // Clear the input field
      $('.type_msg').val('');

      scrollToBottom();
  }
});
$(document).ready(function() {
  // Event handler for video call button
  $('.fa-video').click(function() {
      alert("Starting video call...");
      // Simulate starting video call
      // Here you would integrate WebRTC or other video call APIs
      startVideoCall();
  });

  // Event handler for voice call button
  $('.fa-phone').click(function() {
      alert("Starting voice call...");
      // Simulate starting voice call
      // Here you would integrate Twilio or other voice call APIs
      startVoiceCall();
  });

  // Function to simulate starting a video call
  function startVideoCall() {
      console.log("Video call started.");
      // Actual video call logic goes here
  }

  // Function to simulate starting a voice call
  function startVoiceCall() {
      console.log("Voice call started.");
      // Actual voice call logic goes here
  }
});
