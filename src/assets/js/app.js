/*********************************/
/*         INDEX                 */
/*================================
 *     01.  Toggle Navbar        *
 *     02.  Toggle Menus         *
 *     03.  Service Modal        *
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
  document.body.classList.add("hide-scroll");
  navMenu.classList.add("active");
});
// close nav menu
menuCloseBtn.addEventListener("click", () => {
  document.body.classList.remove("hide-scroll");
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
    // e.target.parentNode.style.marginRight = "200px";
  });
});

/*********************/
/*   Service Modal     */
/*********************/
const services = [...document.querySelectorAll(".service-item")];
const serviceModalEl = document.querySelector("#service-modal");
var serviceModal = new ldCover({ root: "#service-modal" });
// when modal is open
function whenModalOpen() {
  document.body.classList.add("hide-scroll");
}
serviceModal.on("toggle.on", whenModalOpen);
// when modal is close
function whenModalClose() {
  document.body.classList.remove("hide-scroll");
}
serviceModal.on("toggle.off", whenModalClose);

services.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    // all items except current item, and we know th "item" is the current one
    const filtered = services.filter((item, i) => i !== index);

    serviceModalEl.querySelector(".inner").innerHTML = `
      <div class="service-close-container">
      <button onclick="serviceModal.toggle()" class="service-close-btn">Close</button>
    </div>
    <h2 class="section-title container">
    Services
  </h2>
  <div class="services-info container">
    <p class="max-w-[64rem]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.</p>
    <div class="btn">See All Services</div>
  </div>
  <div class="container">
  <div class="service_details">
<!-- left -->
<div class="service_details_left">
  <img src="/assets/images/icons/qa.svg" alt="">
  <h4 class="title">Brotecs is the best</h4>
</div>
<!-- right -->
<div class="service_details_right">
  <p >Brotecs specialises in software solutions for your business. Our team of experts is passionate about the latest technology to create innovative solutions that help businesses grow and become efficient. Clients from industries like FinTech, healthcare, aviation and manufacturing are among our clients.</p>
  <a class="go_link" href="#"> <span> Go to this page </span><img src="/assets/images/icons/arrow_right_small.svg" alt=""></a>
</div>
</div>
  </div>
    <div class="service-items container">
    ${[item, ...filtered]
      .map((item) => {
        return `
    <div class="service-item">
    ${item.innerHTML}
    </div>`;
      })
      .join("")}
    </div>
    </div>
   `;
    serviceModal.toggle();
  });
});
