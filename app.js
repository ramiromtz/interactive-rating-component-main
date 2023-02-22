// Variables and constants declaratiosn
const btn = document.querySelectorAll('.rating button'),
card_rating = document.querySelector('.card__rating'),
congrats_card = document.querySelector('.congrats__card'),
rating_selected = document.querySelector('.rating-selected'),
btnSubmit = document.querySelector('.btn-submit');

let rating = null;

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', () => {
        rating = btn[i].value;
        btn[i].classList.add("active");
        for (let j = 0; j < btn.length; j++) {
            btn[j].addEventListener("click", () => {
                btn[j].classList.add("active");
                if (btn[i].classList.contains("active")) {
                    btn[i].classList.remove("active");
                } 
            });
        }
    });
}

btnSubmit.addEventListener("click", () => {
    if (rating === null) {
        alert("Please select any rating");
        return;
    } 
    card_rating.classList.add("hide");
    congrats_card.classList.add("show");
    rating_selected.innerText = `You selected ${rating} out of 5`;
});
