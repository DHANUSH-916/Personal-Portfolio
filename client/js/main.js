const projectContainer = document.getElementById("project-container");

async function loadProjects() {

    try {

        const response = await fetch("https://personal-portfolio-u64y.onrender.com/api/projects");

        const projects = await response.json();

        projectContainer.innerHTML = "";

        projects.forEach(project => {

            projectContainer.innerHTML += `

            <div class="project-card">

                <img src="images/TaskManager.png"
                    class="project-image"
                    alt="${project.title}">

                <div class="project-content">

                    <h2>${project.title}</h2>

                    <p>${project.description}</p>

                    <div class="tech-list">

                        ${project.technologies
                            .map(tech => `<span>${tech}</span>`)
                            .join("")}

                    </div>

                <div class="project-buttons">

                   <a href="${project.github}" target="_blank" class="github-btn">
                      GitHub
                    </a>

                    <a href="${project.demo}" class="demo-link" target="_blank" style="display:none;"></a>


                    <button class="demo-btn details-btn">
                      View Details
                    </button>

                </div>
</div>

`;
});

    } catch (error) {

        projectContainer.innerHTML =
            "<h2>Unable to load projects.</h2>";

        console.error(error);

    }

}

loadProjects();
/* ========================= */
/* DARK MODE */
/* ========================= */

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const icon = themeToggle.querySelector("i");

    if(document.body.classList.contains("dark")){

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

    }else{

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");

    }

});
/* ========================= */
/* SCROLL ANIMATION */
/* ========================= */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

sections.forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});
const modal = document.getElementById("projectModal");

const closeBtn = document.querySelector(".close");

document.addEventListener("click",(e)=>{

    if(e.target.classList.contains("details-btn")){

        const card=e.target.closest(".project-card");

        document.getElementById("modalImage").src=
        card.querySelector(".project-image").src;

        document.getElementById("modalTitle").textContent=
        card.querySelector("h2").textContent;

        document.getElementById("modalDescription").textContent=
        card.querySelector("p").textContent;

        document.getElementById("modalTech").innerHTML=
        card.querySelector(".tech-list").innerHTML;

        document.getElementById("modalGithub").href=
        card.querySelector(".github-btn").href;

        const demoButton = document.getElementById("modalDemo");

        const liveDemo = card.querySelector(".demo-link");

        if (liveDemo) {
          demoButton.href = liveDemo.href;
          demoButton.style.display = "inline-block";
        } else {
          demoButton.style.display = "none";
       }

        modal.style.display="flex";

    }

});

closeBtn.onclick=()=>{

    modal.style.display="none";

}

window.onclick=(e)=>{

    if(e.target===modal){

        modal.style.display="none";

    }

}
/* ========================= */
/* MOBILE MENU */
/* ========================= */

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
/*
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }
});
*/