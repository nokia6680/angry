var menuText = document.querySelector(".nav");
var menuHead = document.querySelector(".header");
var menuOpen = document.querySelector(".header__btn--open");
var menuClose = document.querySelector(".header__btn--close");

if (menuText) {
  menuOpen.addEventListener("click", function(event) {
    event.preventDefault();
    menuText.classList.add("nav--active");
    menuOpen.classList.add("hidden");
    menuClose.classList.remove("hidden");
		menuHead.classList.add("header--active");
  });

  menuText.addEventListener("click", function(event) {
    event.stopPropagation();
  });

  menuClose.addEventListener("click", function() {
    menuText.classList.remove("nav--active");
    menuOpen.classList.remove("hidden");
    menuClose.classList.add("hidden");
		menuHead.classList.remove("header--active");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      menuText.classList.remove("nav--active");
      menuOpen.classList.remove("hidden");
      menuClose.classList.add("hidden");
			menuHead.classList.remove("header--active");
    }
  });
}

/*Слайдер персонажей*/
$(document).ready(function() {
  $('.stars-slider').slick({
    infinite: true,
    initialSlide: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    fade: true,
    arrows: true,
    prevArrow: '<div class="prev"></div>',
    nextArrow: '<div class="next"></div>'
  });
});

// Select
$('.select').each(function() {
  // Variables
  var $this = $(this),
    selectOption = $this.find('option'),
    selectOptionLength = selectOption.length,
    selectedOption = selectOption.filter(':selected'),
    dur = 500;

  $this.hide();
  // Wrap all in select box
  $this.wrap('<div class="select"></div>');
  // Style box
  $('<div>', {
    class: 'select__gap',
    text: 'Выбери персонажа'
  }).insertAfter($this);

  var selectGap = $this.next('.select__gap'),
    caret = selectGap.find('.caret');
  // Add ul list
  $('<ul>', {
    class: 'select__list'
  }).insertAfter(selectGap);

  var selectList = selectGap.next('.select__list');
  // Add li - option items
  for (var i = 0; i < selectOptionLength; i++) {
    $('<li>', {
        class: 'select__item',
        html: $('<span>', {
          text: selectOption.eq(i).text()
        })
      })
      .attr('data-value', selectOption.eq(i).val())
      .appendTo(selectList);
  }
  // Find all items
  var selectItem = selectList.find('li');

  selectList.slideUp(0);
  selectGap.on('click', function() {
    if (!$(this).hasClass('on')) {
      $(this).addClass('on');
      selectList.slideDown(dur);

      selectItem.on('click', function() {
        var chooseItem = $(this).data('value');

        $('select').val(chooseItem).attr('selected', 'selected');
        selectGap.text($(this).find('span').text());

        selectList.slideUp(dur);
        selectGap.removeClass('on');
      });

    } else {
      $(this).removeClass('on');
      selectList.slideUp(dur);
    }
  });

});
