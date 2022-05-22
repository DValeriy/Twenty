const form = document.querySelector(".form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { name, tel, email },
  } = event.currentTarget;
  alert(
    `Form with user data send:name- ${name.value},tel- ${tel.value},email- ${email.value}`
  );
  event.currentTarget.reset();
}
