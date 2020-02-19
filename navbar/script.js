/*
* Copyright (c) 2011-2020 Asif Zaman
*
* This program is free software; you can redistribute it and/or
* modify it under the terms of the GNU General Public
* License as published by the Free Software Foundation; either
* version 2 of the License, or (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
* General Public License for more details.
*
* You should have received a copy of the GNU General Public
* License along with this program; if not, write to the
* Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor,
* Boston, MA 02110-1301 USA
*
* Authored by: Asif Zaman <zero362001@gmail.com>
*/

function expandMenu() {
	var nav = document.getElementById("topnav");
	var button = document.getElementById("menu-button-text");
	if (nav.classList.contains("horizontal")) {
		nav.classList.replace("horizontal", "vertical");
		button.style.transform = "rotateZ(0.5turn)";
	} else if (nav.classList.contains("vertical")) {
		nav.classList.replace("vertical", "horizontal");
		button.style.transform = "rotateZ(0turn)";
	} else {
		console.error("nav doesn't have a class!");
	}
}