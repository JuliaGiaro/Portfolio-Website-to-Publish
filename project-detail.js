const params = new URLSearchParams(location.search);
const project = PROJECTS.find(function (p) { return p.id === params.get("id"); });
const root = document.getElementById("project-root");

if (!project) {
    root.innerHTML = "<h1 class=\"title\">Project not found</h1><p class=\"section__text__p1\"><a href=\"all_graphic_projects.html\">Back to all projects</a></p>";
} else {
    const backLink = document.createElement("a");
    backLink.className = "back-link";
    backLink.href = "all_graphic_projects.html#" + project.category;
    backLink.textContent = "← Back";
    root.appendChild(backLink);

    const title = document.createElement("h1");
    title.className = "title";
    title.textContent = project.title;
    root.appendChild(title);

    const description = document.createElement("p");
    description.className = "project-detail__description";
    description.textContent = project.description;
    root.appendChild(description);

    const gallery = document.createElement("div");
    gallery.className = "project-detail__gallery";
    if (project.images.length === 1) {
        gallery.classList.add("project-detail__gallery--single");
    }
    project.images.forEach(function (src) {
        const img = document.createElement("img");
        img.src = src;
        img.alt = project.title;
        gallery.appendChild(img);
    });
    root.appendChild(gallery);
}
