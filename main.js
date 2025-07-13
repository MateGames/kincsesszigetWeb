const items = [
    "Hűtőmágnes", "Strand Játék", "Gyerek Játék", "Ékszer, karkötő", "Üditő","Kártya","Plüss", "Könyv", "Névre szóló ajándék","Díszbor, Pálinka", "Fürdőruha", "Egzotikus ajándék", "Magyaros ajándék", "Pénztárca", "Levendulás termék", "Napszemüveg","Vicces ajándék", "Gyerek ruha", "Képeslap"/*, "Parfüm, Körömlakk", "Sapka, Kalap", "Kulcstartó",*/
];

const container = document.getElementById("cards-container");

items.forEach((name) => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = `img/def/${name}.jpg`;
    img.alt = name;
    img.loading = "lazy";

    const label = document.createElement("span");
    label.textContent = name;
    card.appendChild(label);
    card.appendChild(img);

    card.addEventListener("mouseover", () => {
        img.src = `img/alt/${name}.jpg`;
    });
    card.addEventListener("mouseout", () => {
        img.src = `img/def/${name}.jpg`;
    });

    container.appendChild(card);
});