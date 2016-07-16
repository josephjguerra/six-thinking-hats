$(document).ready(function() {
  //make smooth scrolling affect to section links
  // $('a').click(function(scroll) {
  // 	scroll.preventDefault();
  // 	var link = $(this).attr('href');
  // 	$('html, body').animate({
  // 		scrollTop: $(link).offset().top
  // 	}, 500);
  // });
  //function for adding key points in guided session
  function addBlue() {
    var point = $('input[name=blueKeyPoint]').val();
    $('.blueList').append('<div class="point">' + point + '</div>');
    $('.blueKeyPoint').val('');
    $('#blueCount').text('80');
  }
  $('.addBlue').on('click', function() {
    addBlue();
  });
  $(document).on('keypress', function(event) {
    if (event.which == 13) {
      event.preventDefault();
      addBlue();
    }
  });

  function addWhite() {
    var point = $('input[name=whiteKeyPoint]').val();
    $('.whiteList').append('<div class="point">' + point + '</div>');
    $('.whiteKeyPoint').val('');
    $('#whiteCount').text('80');
  }
  $('.addWhite').on('click', function() {
    addWhite();
  });
  $(document).on('keypress', function(event) {
    if (event.which == 13) {
      event.preventDefault();
      addWhite();
    }
  });

  function addRed() {
    var point = $('input[name=redKeyPoint]').val();
    $('.redList').append('<div class="point">' + point + '</div>');
    $('.redKeyPoint').val('');
    $('#redCount').text('80');
  }
  $('.addRed').on('click', function() {
    addRed();
  });
  $(document).on('keypress', function(event) {
    if (event.which == 13) {
      event.preventDefault();
      addRed();
    }
  });

  function addYellow() {
    var point = $('input[name=yellowKeyPoint]').val();
    $('.yellowList').append('<div class="point">' + point + '</div>');
    $('.yellowKeyPoint').val('');
    $('#yellowCount').text('80');
  }
  $('.addYellow').on('click', function() {
    addYellow();
  });
  $(document).on('keypress', function(event) {
    if (event.which == 13) {
      event.preventDefault();
      addYellow();
    }
  });

  function addBlack() {
    var point = $('input[name=blackKeyPoint]').val();
    $('.blackList').append('<div class="point">' + point + '</div>');
    $('.blackKeyPoint').val('');
    $('#blackCount').text('80');
  }
  $('.addBlack').on('click', function() {
    addBlack();
  });
  $(document).on('keypress', function(event) {
    if (event.which == 13) {
      event.preventDefault();
      addBlack();
    }
  });

  function addGreen() {
    var point = $('input[name=greenKeyPoint]').val();
    $('.greenList').append('<div class="point">' + point + '</div>');
    $('.greenKeyPoint').val('');
    $('#greenCount').text('80');
  }
  $('.addGreen').on('click', function() {
    addGreen();
  });
  $(document).on('keypress', function(event) {
    if (event.which == 13) {
      event.preventDefault();
      addGreen();
    }
  });

  // counts
  function text_counter(input_text, target) {
    var max = input_text.attr("maxlength");
    input_text.keyup(function() {
      target.text(max - this.value.length)
    });
  }
  text_counter($("#problemInput"), $("#problemCount"));
  text_counter($("#blueInput"), $("#blueCount"));
  text_counter($("#whiteInput"), $("#whiteCount"));
  text_counter($("#redInput"), $("#redCount"));
  text_counter($("#yellowInput"), $("#yellowCount"));
  text_counter($("#blackInput"), $("#blackCount"));
  text_counter($("#greenInput"), $("#greenCount"));
});
