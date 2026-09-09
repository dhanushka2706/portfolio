```javascript
const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");


/* Mobile Menu */

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("show");

});


/* Close menu after clicking a link */

const links = document.querySelectorAll("#navLinks a");


links.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("show");

    });

});
```
