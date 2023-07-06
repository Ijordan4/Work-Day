$(function () {
  
  $(".saveBtn").on("click", function () {
    var key = $(this).parent().attr("id");
    var value = $(this).siblings(".description").val();
    localStorage.setItem(key, value);
  });

  
  var currentHour = dayjs().format("H");
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  
  $(".time-block").each(function () {
    var key = $(this).attr("id");
    var value = localStorage.getItem(key);
    $(this).find(".description").val(value);
  });

  var currentDate = dayjs().format("dddd, MMMM D, YYYY");
  $("#currentDay").text(currentDate);
});
