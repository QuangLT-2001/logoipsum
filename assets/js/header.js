document.addEventListener("DOMContentLoaded", () => {
     const headerBootstrap = document.querySelector(".header__bootstrap");
     const scrollHeaderFixed = (headerBootstrap) => {
          window.addEventListener("scroll", () => {
               if (scrollY > 100) {
                    headerBootstrap.classList.add("fixed-top")
               } else {
                    headerBootstrap.classList.remove("fixed-top")
               }
          })
     }
     scrollHeaderFixed(headerBootstrap)
}, false)