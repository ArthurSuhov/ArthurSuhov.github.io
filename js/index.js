

$(function() {
	$(".handler span").on("click", function() {
		$(this).addClass("choosen").siblings().removeClass("choosen");
		$(".slide")
			.eq($(this).index())
			.addClass("show")
			.siblings()
			.removeClass("show");
	});


var image = document.getElementsByClassName('description__img');
new simpleParallax(image);

var image = document.getElementsByClassName('services__img');
new simpleParallax(image);

var imageLeft = document.querySelector('.house__img');
new simpleParallax(imageLeft, {
  orientation: 'left'
});


	$(document).keydown(function(e) {
		var code = e.keyCode || e.which;
		if (code === 40 || code === 39) {
			if ($(".handler span:last-child").hasClass("choosen")) {
				$(".handler span")
					.eq(0)
					.addClass("choosen")
					.siblings()
					.removeClass("choosen");
			} else {
				$(".choosen").removeClass("choosen").next().addClass("choosen");
			}
			$(".slide")
				.eq($(".choosen").index())
				.addClass("show")
				.siblings()
				.removeClass("show");
		} else {
			if (code === 38 || code === 37) {
				if ($(".handler span:first-child").hasClass("choosen")) {
					$(".handler span:last-child")
						.addClass("choosen")
						.siblings()
						.removeClass("choosen");
				} else {
					$(".choosen").removeClass("choosen").prev().addClass("choosen");
				}
				$(".slide")
					.eq($(".choosen").index())
					.addClass("show")
					.siblings()
					.removeClass("show");
			}
		}
	});
});



