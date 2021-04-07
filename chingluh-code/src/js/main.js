/*==================== LOAD FUNCTION ====================*/
$(document).ready(function () {
	// navSlide();
	// mappingMenu();
	initSwiper();
	setBackgroundElement();
	headerScroll();
	scrollTop();
	toggleMenu();
	toggleSearch();
	dropdownMenu();
	checkLayoutBanner();
	containerOffset();
	$(window).resize(containerOffset);
	scrollToDiv();
	// stickyNav();
	// crollToDiv();
	// accordianTable()
	// tabPanel();
	// moveBtn();
});
/*==================== INIT SWIPER ====================*/
const initSwiper = () => {
	let myswiper = new Swiper(".home-banner .swiper-container", {
		loop: false,
		speed: 2000,
		effect: "fade",
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		fadeEffect: {
			crossFade: true,
		},
	});
	let home_4 = new Swiper(".home-4 .swiper-partner .swiper-container", {
		loop: false,
		speed: 2000,
		loop: true,
		slidesPerView: 2,
		spaceBetween: 10,
		autoplay: {
			deplay: 3000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.home-4 .swiper-pagination',
			type: 'progressbar',
		},
		breakpoints: {
			580: {
				slidesPerView: 2.8,
				spaceBetween: 25,
			},
			1280: {
				slidesPerView: 3.8,
				spaceBetween: 30,
			},
		},
		});
	let newsRelated = new Swiper(".swiper-news-related .swiper-container", {
		loop: false,
		speed: 2000,
		loop: true,
		slidesPerView: 2,
		spaceBetween: 10,
		autoplay: {
			deplay: 3000,
			disableOnInteraction: false,
		},
		// pagination: {
		// 	el: '.home-4 .swiper-pagination',
		// },
		breakpoints: {
			580: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			1280: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		},
	});
};
/*==================== SET BACKGROUND BANNER ====================*/
const setBackgroundElement = () => {
	$("[setBackground]").each(function () {
		let background = $(this).attr("setBackground");
		$(this).css({
			"background-image": "url(" + background + ")",
			"background-size": "cover",
			"background-position": "center center",
		});
	});
	$("[setBackgroundRepeat]").each(function () {
		let background = $(this).attr("setBackgroundRepeat");
		$(this).css({
			"background-image": "url(" + background + ")",
			"background-repeat": "repeat",
		});
	});
};
/*==================== SHOW SCROLL TOP ====================*/
const scrollTop = () => {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$("#scroll-top").slideDown().show(500);
		} else {
			$("#scroll-top").slideUp().hide(500);
		}
	});

	$("#scroll-top").on("click", function (e) {
		e.preventDefault();
		$("html,body").animate({
			scrollTop: 0,
		});
	});
}

/*==================== MAIN MENU SCROLL ====================*/
const headerScroll = () => {
	$(".header").clone().addClass("header-2").insertAfter(".header");
	$(window).scroll(function() {
		if($(this).scrollTop() > 50 ) {
			$("header").addClass("active")
			$("header .header:first-child").addClass("header-1")
		} else {
			$("header").removeClass("active")
		}
	})
}
/*==================== TOGGLE MENU ====================*/
const toggleMenu = () => {
	let btnOpen = $("header .toggle-menu")
	let menu = $(".wrap-menu")
	let btnClose = $(".btn-close")
	let body = $("body")
	let html = $("html")
	// -----Open Menu-----
	btnOpen.on("click", function() {
		menu.addClass("active")
		body.addClass("overplay")
		html.css("overflow","hidden")
	})
	// -----Close Menu-----
	btnClose.on("click", function() {
		if (menu.hasClass("active")) {
			menu.removeClass("active")
			html.css("overflow","visible")
			body.removeClass("overplay")
		}
	})
	// Click OutSize to Close Popup
	$(window).click(function (e) {
		if (!btnOpen.is(e.target) && btnOpen.has(e.target).length === 0 &&
			!menu.is(e.target) && menu.has(e.target).length === 0)
			{
				menu.removeClass("active");
				body.removeClass("overplay")
			}
	})
}
/*==================== TOGGLE SEARCH ====================*/
const toggleSearch = () => {
	let btnSearch = $("header .search")
	let wrapSearch = $("header .wrap-search")
	let wrapSearchChild = $("header .wrap-search *")
	var heightHeader = $(".header").outerHeight();
	$("header .wrap-search").css("top", heightHeader )
	// -----Open Search-----
	btnSearch.on("click", function() {
		wrapSearch.toggleClass("active")
	})
	// Click OutSize to Close Popup
	$(window).click(function (e) {
		if (!btnSearch.is(e.target) && btnSearch.has(e.target).length === 0 &&
			!wrapSearch.is(e.target) && wrapSearch.has(e.target).length === 0)
		{
			wrapSearch.removeClass("active");
		}
	})
}
/*==================== MENU DROPDOWN ====================*/
const dropdownMenu = () => {
	let titleDropdown = $(".primary-menu li>.title>a")
	let subMenu = $(".sub-menu")
	titleDropdown.on("click", function(e) {
		e.preventDefault();
		var subMenu = $("this").closest("li").find(".sub-menu");
		$(this).parents(".dropdown").addClass("active").siblings().removeClass("active")
		$(this).parent().siblings(".sub-menu").slideDown()
		$(".primary-menu li .title a").not(this).parent().siblings(".sub-menu").slideUp();
	})
};
/*==================== 	CHECK LAYOUT BANNER ====================*/
const checkLayoutBanner = () => {
	let heightHeader = $(".header").outerHeight()
	$("main").css("padding-top", heightHeader)
};
/*==================== 	CONTAINER OFF LEFT OR RIGHT ====================*/
const containerOffset = () => {
	let containerLeft = $("body .container").css("margin-left");
	let container = $("body .container").css("margin-right");
	$(".home-4 .no-container").css("margin-left",containerLeft)
};
/*==================== 	SCROLL TO DIV ====================*/
const scrollToDiv = () => {
	$(".btn-scrolldown").click(function(e) {
		e.preventDefault();
		$('html,body').animate({
			scrollTop: $(".home-3").offset().top
		},"slow");
	});
}
/*==================== 	STICKY A NAV ====================*/
// const stickyNav = () => {
// 	let heightHeader = $(".header").outerHeight();
// 	$(document).ready(function(){
// 		$(".primary-nav").sticky({
// 			topSpacing: heightHeader,
// 			zIndex: 999
// 		});
// 	});
// };