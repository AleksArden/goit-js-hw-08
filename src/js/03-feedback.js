import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector(".feedback-form"),
    input: document.querySelector(".feedback-form input"),
    textarea: document.querySelector(".feedback-form textarea"),
}

refs.form.addEventListener('input', throttle(saveData, 500));
refs.form.addEventListener('submit', onClickSubmit);

let formData = {};
const STORAGE_KEY = "feedback-form-state";
updateData()

function onClickSubmit(event) {
    event.preventDefault();
    console.log(formData = {
        email: refs.input.value,
        message: refs.textarea.value
    });
    localStorage.removeItem(STORAGE_KEY);
    event.currentTarget.reset();
}

function saveData(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}

function updateData() {
    try {
        const saveFormData = localStorage.getItem(STORAGE_KEY);
        const parseSaveData = JSON.parse(saveFormData);

        if (parseSaveData) {
            refs.input.value = parseSaveData.email;
            refs.textarea.value = parseSaveData.message;
        }
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
    }
}

