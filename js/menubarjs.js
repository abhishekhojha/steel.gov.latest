
function openNav() {
	document.getElementById("mySidenav").style.width = "280px !important";
	setTimeout(() => {
		document.addEventListener("click", closeNavOutside);
	}, 100);
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.removeEventListener("click", closeNavOutside);
}

function closeNavOutside(event) {
	let sidebar = document.getElementById("mySidenav");
	let button = document.querySelector(".mobile-btn");
	if (!sidebar.contains(event.target) && event.target !== button) {
		closeNav();
	}
}

function toggleSubmenu(id) {
	var submenu = document.getElementById(id);
	
	if (submenu.style.display === "block") {
		submenu.style.display = "none";
	} else {
		// Close only submenus within the same level
		let parentMenu = submenu.closest(".submenu");
		if (parentMenu) {
			parentMenu.querySelectorAll(".submenu").forEach(sub => {
				if (sub.id !== id) {
					sub.style.display = "none";
				}
			});
		}
		
		submenu.style.display = "block";
	}
}


function toggleSubmenu(id) {
	var submenu = document.getElementById(id);
	
	if (submenu.style.display === "block") {
		submenu.style.display = "none";
	} else {
		let sameLevel = getSiblingsSubmenus(submenu);
		
		sameLevel.forEach(sub => {
			if (sub.id !== id) {
				sub.style.display = "none";
				sub.querySelectorAll(".submenu").forEach(nested => {
					nested.style.display = "none";
				});
			}
		});
		
		submenu.style.display = "block";
	}
}

function getSiblingsSubmenus(element) {
	let parent = element.parentElement;
	
	if (parent.classList.contains("sidenav")) {
		return Array.from(parent.querySelectorAll(".sidenav > .submenu"));
	} 
	else {
		let parentSubmenu = element.closest(".submenu");
		return Array.from(parentSubmenu.querySelectorAll(":scope > .submenu"));
	}
}