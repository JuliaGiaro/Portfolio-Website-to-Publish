document.querySelectorAll(".project-grid").forEach(function (grid) {
    const category = grid.dataset.category;
    const projects = PROJECTS.filter(function (p) { return p.category === category; });

    projects.forEach(function (project) {
        const card = document.createElement("a");
        card.className = "project-card";
        card.href = "project.html?id=" + encodeURIComponent(project.id);

        const thumb = document.createElement("img");
        thumb.src = project.images[0];
        thumb.alt = project.title;
        card.appendChild(thumb);

        const caption = document.createElement("p");
        caption.className = "project-card__title";
        caption.textContent = project.title;
        card.appendChild(caption);

        grid.appendChild(card);
    });
});
