import { sendFormData } from './request-utils.js'

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', async (event) => {
        event.preventDefault()
        event.stopPropagation()
        if (form.checkValidity()) {       
          event.preventDefault()
          event.stopPropagation()
          const sendForm = await sendFormData(form)
          if(sendForm.ok){
            window.location.href = '/viewer'
          }
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
  