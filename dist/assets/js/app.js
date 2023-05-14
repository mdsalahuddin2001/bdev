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
  // document.body.classList.add("hide-scroll");
  navMenu.classList.add("active");
});
// close nav menu
menuCloseBtn.addEventListener("click", () => {
  // document.body.classList.remove("hide-scroll");
  navMenu.classList.remove("active");
});

// handle dropdown things
// get all dropdown item
const dropdownItems = document.querySelectorAll(".dropdown-item");
dropdownItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    //  remove active class from all dropdown items
    // dropdownItems.forEach((item) => {
    //   item.classList.remove("active-menu");
    // });

    const currentIsActive = e.target.classList.contains("active-menu");
    if (currentIsActive) {
      e.target.classList.remove("active-menu");
      e.target.parentNode.style.marginRight = "0px";
      return;
    }
    dropdownItems.forEach((item) => {
      item.classList.remove("active-menu");
      item.style.marginRight = "0px";
    });
    e.target.classList.add("active-menu");
    e.target.parentNode.style.transition = "margin 300ms";
    e.target.parentNode.style.marginRight = "200px";
  });
});

/*********************/
/*   Menu Sticky     */
/*********************/
