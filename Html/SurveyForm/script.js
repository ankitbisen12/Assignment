//selecting elements
const customerForm = document.getElementById("customerForm");
const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");
const details = document.getElementById("details");
const closePopupButton = document.getElementById("closePopupButton");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

//helping functions
function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function reset() {
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("dateOfBirth").value = "";
  document.getElementById("country").value = "";
  document.getElementById("profession").value = "";
  document.getElementById("mobile").value = "";
  const gender = document.querySelectorAll('input[name="gender"]');
  gender.forEach((radio) => (radio.checked = false));
}
function validateCustomerForm() {
  let isValid = true;

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const dob = document.getElementById("dateOfBirth").value;
  const country = document.getElementById("country").value;
  const gender = Array.from(
    document.querySelectorAll('input[name="gender"]:checked')
  )
    .map((input) => input.value)
    .join(", ");

  const profession = document.getElementById("profession").value;
  const mobile = document.getElementById("mobile").value;

  if (
    firstName === "" ||
    lastName === "" ||
    dob === "" ||
    country === "" ||
    gender === "" ||
    profession === "" ||
    email === "" ||
    mobile === ""
  ) {
    isValid = false;
    alert("Please fill all the fields");
  }

  if (isValid) {
    details.innerHTML = `<li><strong>First Name:</strong> ${firstName}${" "}${lastName}</li>
                           <li><strong>Date of Birth:</strong> ${dob}</li>
                           <li><strong>Email:</strong> ${email}</li>
                           <li><strong>Country:</strong> ${country}</li>
                           <li><strong>Gender:</strong> ${gender}</li>
                           <li><strong>Profession:</strong> ${profession}</li>
                           <li><strong>Mobile Number:</strong> ${mobile}</li>`;

    openModal();
    reset();
  }
}

//Attaching eventlisteners
customerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  validateCustomerForm();
});

resetBtn.addEventListener("click", function () {
  reset();
});

btnCloseModal.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
    reset();
  }
});
