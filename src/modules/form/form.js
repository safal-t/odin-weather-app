const loadForm = function () {
    const form = document.createElement("form");
    form.classList.add("location-form")
    form.innerHTML = `
        <label for="location">Location:</label>
        <input type="text" id="location" name="location" required />
    `
    document.querySelector("body").append(form)
}

export default loadForm



