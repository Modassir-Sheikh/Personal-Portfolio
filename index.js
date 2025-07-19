const dropdown = document.getElementById("dropdown-menu");
    const hamburgIcon = document.getElementById("hamburg-icon");
    const cancelIcon = document.getElementById("cancel-icon");
    const nav = document.querySelector("nav");
    const backToTopBtn = document.getElementById("back-to-top");

    hamburgIcon.addEventListener("click", () => {
      dropdown.style.transform = "translateY(0)";
      cancelIcon.style.display = "block";
      hamburgIcon.style.display = "none";
    });

    cancelIcon.addEventListener("click", () => {
      dropdown.style.transform = "translateY(-500px)";
      cancelIcon.style.display = "none";
      hamburgIcon.style.display = "block";
    });

    window.addEventListener("scroll", () => {
      const currentScroll = window.scrollY;

      if (currentScroll > 100) {
        backToTopBtn.style.opacity = "1";
        backToTopBtn.style.visibility = "visible";
      } else {
        backToTopBtn.style.opacity = "0";
        backToTopBtn.style.visibility = "hidden";
      }

      if (currentScroll > 100) {
        nav.classList.add("hide-nav");
      } else {
        nav.classList.remove("hide-nav");
      }

      if (window.innerWidth <= 768 && dropdown.style.transform === "translateY(0px)") {
        dropdown.style.transform = "translateY(-500px)";
        cancelIcon.style.display = "none";
        hamburgIcon.style.display = "block";
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        dropdown.style.transform = "translateY(-500px)";
        hamburgIcon.style.display = "none";
        cancelIcon.style.display = "none";
      } else {
        hamburgIcon.style.display = "block";
      }
    });