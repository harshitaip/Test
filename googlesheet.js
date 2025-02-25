const scriptURL = 'https://script.google.com/macros/s/AKfycbwE0gB__qE6drbrmLcHyOsxyEcu17u-D2iG6hBqY-ieRt2s1R5f9o9c4lW8-oxTVj5c/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
