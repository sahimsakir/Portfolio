'use strict';

			var $window = $(window);

			function run()
			{
				var fName = arguments[0],
					aArgs = Array.prototype.slice.call(arguments, 1);
				try {
					fName.apply(window, aArgs);
				} catch(err) {
					 
				}
			};
			 
			/* chart
			================================================== */
			function _chart ()
			{
				$('.skill-item').appear(function() {
					setTimeout(function() {
						$('.chart').easyPieChart({
							easing: 'easeOutElastic',
							delay: 3000,
							barColor: '#369670',
							trackColor: '#fff',
							scaleColor: false,
							lineWidth: 21,
							trackWidth: 21,
							size: 250,
							lineCap: 'round',
							onStep: function(from, to, percent) {
								this.el.children[0].innerHTML = Math.round(percent);
							}
						});
					}, 150);
				});
			};
			 

			$(document).ready(function() {
			  
				run(_chart);
			  
			    
			});

			window.addEventListener("scroll",function(){
				var navBar = document.getElementById("nav");
					navBar.classList.toggle("sticky",window.scrollY > 0);
					if(this.scrollY > 500){
	            $('.scroll-up-btn').addClass("show");
	        }else{
	            $('.scroll-up-btn').removeClass("show");
	        }
			});
			
			$('.scroll-up-btn').click(function(){
		        $('html').animate({scrollTop: 0});
		        // removing smooth scroll on slide-up button click
		        $('html').css("scrollBehavior", "auto");
		    });

			function dropdownMenu() {
				var x = document.getElementById("dropdownClick");

				if(x.className === "nav-menu")
				{
					x.className += " responsive";
				
				}
				else 
				{
					x.className = "nav-menu";
				}

			}