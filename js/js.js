$(".cog").on("click", function () {
	$(".menu").stop().fadeToggle("0.5");
});

$(".menu-link").on("click", function () {
	$(".menu").stop().fadeOut("fast");
});
$("header, .section-zallium").on("click", function () {
	$(".menu").fadeOut("fast");
});

$(document).ready(function () {
	function filterPath(string) {
		return string
			.replace(/^\//, '')
			.replace(/(index|default).[a-zA-Z]{3,4}$/, '')
			.replace(/\/$/, '');
	}
	$('.menu-link a[href*=#]').each(function () {
		if (filterPath(location.pathname) == filterPath(this.pathname)
			&& location.hostname == this.hostname
			&& this.hash.replace(/#/, '')) {
			var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) + ']');
			var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
			if ($target) {
				var targetOffset = $target.offset().top;
				$(this).click(function () {
					if ($(window).width() > 200) {
						$('html, body').animate({ scrollTop: targetOffset }, 800);
						return false;
					}
				});
			}
		}
	});
});



$(document).ready(function () {
	$('[data-toggle="tooltip"]').tooltip();
});

AOS.init({
	duration: 1200
});

//made by vipul mirajkar thevipulm.appspot.com
var TxtType = function (el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 2000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
};

TxtType.prototype.tick = function () {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];

	if (this.isDeleting) {
		this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
		this.txt = fullTxt.substring(0, this.txt.length + 1);
	}

	this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

	var that = this;
	var delta = 200 - Math.random() * 100;

	if (this.isDeleting) { delta /= 2; }

	if (!this.isDeleting && this.txt === fullTxt) {
		delta = this.period;
		this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
		this.isDeleting = false;
		this.loopNum++;
		delta = 500;
	}

	setTimeout(function () {
		that.tick();
	}, delta);
};

window.onload = function () {
	var elements = document.getElementsByClassName('typewrite');
	for (var i = 0; i < elements.length; i++) {
		var toRotate = elements[i].getAttribute('data-type');
		var period = elements[i].getAttribute('data-period');
		if (toRotate) {
			new TxtType(elements[i], JSON.parse(toRotate), period);
		}
	}
	// INJECT CSS
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
	document.body.appendChild(css);
};