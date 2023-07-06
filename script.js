$(function () {
  // Click event listener for save button
  $('.saveBtn').on('click', function() {
    var timeBlockId = $(this).parent().attr('id');
    var userInput = $(this).siblings('.description').val();
    localStorage.setItem(timeBlockId, userInput);
  });
  
  // Apply past, present, or future class to each time block
  var currentHour = dayjs().hour();
  $('.time-block').each(function() {
    var blockHour = parseInt($(this).attr('id').split('-')[1]);
    if (blockHour < currentHour) {
      $(this).removeClass('present future').addClass('past');
    } else if (blockHour === currentHour) {
      $(this).removeClass('past future').addClass('present');
    } else {
      $(this).removeClass('past present').addClass('future');
    }
  });
  
 
  $('.time-block').each(function() {
    var timeBlockId = $(this).attr('id');
    var userInput = localStorage.getItem(timeBlockId);
    $(this).find('.description').val(userInput);
  });
  
  // Display current date in the header of the page
  var currentDate = dayjs().format('dddd, MMMM D, YYYY');
  $('#currentDay').text(currentDate);
});


$(window).on('load', function() {
  $('.time-block').each(function() {
    var timeBlockId = $(this).attr('id');
    var userInput = localStorage.getItem(timeBlockId);
    $(this).find('.description').val(userInput);
  });
});
