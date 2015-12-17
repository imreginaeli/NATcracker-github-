$(document).ready(function(){
				$('#footerinfo').hide(500);
		
				$('#footerglyph').click(function(){
					$('#footerinfo').slideToggle(500);
				});
				
				// Show or hide the sticky footer button
				$(window).scroll(function() {
					if ($(this).scrollTop() > 200) {
						$('.go-top').fadeIn(200);
					} else {
						$('.go-top').fadeOut(200);
					}
				});
				
				// Animate the scroll to top
				$('.go-top').click(function(event) {
					event.preventDefault();
					
					$('html, body').animate({scrollTop: 0}, 300);
				});
				
				$(function() {
				  $('a[href*=#]:not([href=#])').click(function() {
					if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
					  var target = $(this.hash);
					  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
					  if (target.length) {
						$('html,body').animate({
						  scrollTop: target.offset().top
						}, 1000);
						return false;
					  }
					}
				  });
				});	
				
				function newpage() {
					window.location = newLocation;
				}
				
				$('#btnHome').click(function(){
					event.preventDefault();
					newLocation = 'main.html';
					$('body').fadeOut(500, newpage);
				});
				
				$('#goeng').click(function(){
					event.preventDefault();
					newLocation = 'english.html';
					$('body').fadeOut(500, newpage);
				});
				
				$('#goguide').click(function(){
					event.preventDefault();
					newLocation = 'guide.html';
					$('body').fadeOut(500, newpage);
				});
				
				$('#gofil').click(function(){
					event.preventDefault();
					newLocation = 'filipino.html';
					$('body').fadeOut(500, newpage);
				});
			});