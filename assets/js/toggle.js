document.addEventListener("DOMContentLoaded", () => {
     const nameFaq = document.querySelectorAll(".name__faq");
     const toggle = (nameFaq) => {
          nameFaq.forEach(item => {
               item.addEventListener("click", () => {
                    if (item.classList[3] == "dropdown__toggle") {
                         item.classList.remove("dropdown__toggle")
                    } else {
                         nameFaq.forEach(item => {
                              item.classList.remove("dropdown__toggle")
                         })
                         item.classList.toggle("dropdown__toggle");
                    }

               })
          })
     }
     toggle(nameFaq);
}, false)