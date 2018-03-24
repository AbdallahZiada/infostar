var a = 0;
$(window).scroll(function() {
  var oTop = $(".perfor").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $(".count").each(function() {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({countNum: $this.text()}).animate({countNum: countTo},{duration: 2000,easing: "swing",step: function() {$this.text(Math.floor(this.countNum));},complete: function() {$this.text(this.countNum);}});});a = 1;}});

$('form div .input').on('focus', function() {
    if ($(this).val() === "") {
        $(this).prev('label').animate({
            fontSize: 12,
            top: -16,
            fontWeight: 'normal'
        }, 350);
    }

});
$('form div .input').on('blur', function() {
    if ($(this).val() === "") {
        $(this).prev('label').animate({
            fontSize: 17,
            top: 0,
            fontWeight: 'bold'
        }, 350);
    }
});

// Date => 1-2018
// Update By => Em An
// Source => https://bootsnipp.com/snippets/6X8yM