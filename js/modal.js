 $(document).ready(function() {
  $(".modal-button").click(function() {
    var target = $(this).data("target");
    $("html").addClass("is-clipped");
    $(target).addClass("is-active");
  });
  $(".delete").click(function() {
    $("html").removeClass("is-clipped");
    var target = "#"+$(this).parent().parent().parent().attr('id');
    $(target).removeClass("is-active");
  });
  $(".modal-background").click(function() {
    $("html").removeClass("is-clipped");
    var target = "#" + $(this).parent().attr('id');
    $(target).removeClass("is-active");
  });
});