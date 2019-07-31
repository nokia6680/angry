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

/*Скрипт выезжающей штуки "Как участвовать"*/
var modalSearch = document.querySelector(".top-panel");
var closeButton = document.querySelector(".top-panel__close");
var openButton = document.querySelectorAll(".open-btn");

if (modalSearch) {
  for (var i = 0; i < openButton.length; i++) openButton[i].addEventListener("click", function(event) {
    event.preventDefault();
    modalSearch.classList.add("top-panel--active");
  });

  modalSearch.addEventListener("click", function() {
    modalSearch.classList.remove("top-panel--active");
  });

  modalSearch.addEventListener("click", function(event) {
    event.stopPropagation();
  });

  closeButton.addEventListener("click", function() {
    modalSearch.classList.remove("top-panel--active");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      modalSearch.classList.remove("top-panel--active");
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

/*Слайдер персонажей*/
$(document).ready(function() {
  $('.prize-slider').slick({
    infinite: true,
    initialSlide: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    fade: true,
    arrows: true,
    prevArrow: '<div class="prev-1"></div>',
    nextArrow: '<div class="next-1"></div>'
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

$(".prize-single").hide();
$(".prize-single:first").show();
/* в режиме вкладок */
$(".prize-controls__item").click(function () {
    $(".prize-single").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();
    $(".prize-controls__item").removeClass("prize-controls__item--active");
    $(this).addClass("prize-controls__item--active");
});
