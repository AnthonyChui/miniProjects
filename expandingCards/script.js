const cards = document.querySelectorAll('.card');
cards.forEach((card) => {
    card.addEventListener("mouseover", () => {
        cards.forEach((card) =>{
            card.classList.remove("active");
        })
        card.classList.add("active");
    });
    card.addEventListener("mouseout", () => {
            card.classList.remove("active");
    });
});
