const items = [
    "img", "img", "item03", "item04", "img", "item06", "item07", "item08",
    "item09", "item10", "item11", "item12", "item13", "item14", "item15",
    "item16", "item17", "item18", "item19", "item20", "item21",
];

const container = document.getElementById("cards-container");

items.forEach((name) => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = `img/def/${name}.jpeg`;
    img.alt = name;
    img.loading = "lazy";

    const label = document.createElement("span");
    label.textContent = name;
    card.appendChild(label);
    card.appendChild(img);

    card.addEventListener("mouseover", () => {
        img.src = `img/alt/${name}.jpeg`;
    });
    card.addEventListener("mouseout", () => {
        img.src = `img/def/${name}.jpeg`;
    });

    container.appendChild(card);
});