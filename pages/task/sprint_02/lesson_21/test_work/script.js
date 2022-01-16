window.addEventListener("load", function(event) {
    var lang_list = document.querySelectorAll('.lang a');

	lang_list.forEach((lang) => {
		lang.addEventListener('click', event => {
  			if (!lang.classList.contains("active")){
  				lang_list.forEach((el) => {
  					el.classList.remove("active");
  				});
  				lang.classList.add("active");
  			}
		});
	});

	var mobile_menu_ico = document.querySelector('.mobile_menu_ico');
	var mobile_menu_content = document.querySelector('.mobile_menu_content');
	var mobile_menu_item = document.querySelectorAll('.mobile_menu_item');

	mobile_menu_ico.addEventListener('click', event => {
		if (window.getComputedStyle(mobile_menu_content, null).display == 'none'){
			mobile_menu_content.style.display = 'block';
		}
	})

	mobile_menu_item.forEach((item) => {
		item.addEventListener('click', event => {
			mobile_menu_content.style.display = 'none';
		});
	});
});

