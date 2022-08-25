const carouselElems = {
    testimonials: document.querySelector(".testimonials__carousel"),
    scroller: testimonials.querySelector(".testimonials__content"),
    buttonLeft: testimonials.querySelector(".button-left"),
    buttonRight: testimonials.querySelector(".button-right"),
};

carouselElems.buttonRight.addEventListener("click", () => {
    carouselElems.scroller.scrollBy({ left: 300, top: 0, behavior: "smooth" });
});

carouselElems.buttonLeft.addEventListener("click", () => {
    carouselElems.scroller.scrollBy({ left: -300, top: 0, behavior: "smooth" });
});

const formElems = {
    button: document.querySelector("#form-button"),
    agreementInput: document.querySelector("#agreement"),
    inputPhone: document.querySelector("#tel"),
    inputEmail: document.querySelector("#email"),
};

const requests = outputFromLocalStorage();

formElems.button.addEventListener("click", (e) => {
    e.preventDefault();
    if (
        formElems.agreementInput.checked &&
        formElems.inputPhone.value !== "" &&
        formElems.inputEmail.value !== ""
    )
        addRequest();
    alert("Your application has been received, please wait for a call!");
    clearForm();
});

function saveToLocalStorage() {
    localStorage.setItem("requests", JSON.stringify(requests));
}

function outputFromLocalStorage() {
    return localStorage.getItem("requests") ? JSON.parse(localStorage.getItem("requests")) : [];
}

const addRequest = () => {
    const request = {
        id: requests.length > 0 ? requests[requests.length - 1]["id"] + 1 : 1,
        phone: formElems.inputPhone.value,
        email: formElems.inputEmail.value,
        dateDay: new Date().toLocaleDateString(),
        dateTime: new Date().toLocaleTimeString(),
        status: "new",
    };
    requests.push(request);
    saveToLocalStorage();
};

const clearForm = () => {
    formElems.agreementInput.checked = false;
    formElems.inputPhone.value = "";
    formElems.inputEmail.value = "";
};
