/*********************************/
/*         INDEX                 */
/*================================
 *     01.  Loader               *
 *     02.  Toggle Menus         *
 *     03.  Active Menu          *
 *     04.  Clickable Menu       *
 *     05.  Back to top          *
 *     06.  Feather icon         *
 *     06.  DD Menu              *
 *     06.  Active Sidebar Menu  *
 *     07.  Contact us           *
 *     08.  Wow Animation JS     *
 ================================*/

//Menu
/*********************/
/* Toggle Menu */
/*********************/
const menuOpenBtn = document.getElementById("menu_open_btn");
const menuCloseBtn = document.getElementById("menu_close_btn");
const navMenu = document.getElementById("nav-menu");
// show nav menu
menuOpenBtn.addEventListener("click", () => {
  navMenu.classList.add("active");
});
// close nav menu
menuCloseBtn.addEventListener("click", () => {
  navMenu.classList.remove("active");
});

/*********************/
/*   Menu Sticky     */
/*********************/
