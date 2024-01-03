export const validate = (inputs) => {
    let errors = {}
  
    if (!/\S+@\S+\.\S{2,}/.test(inputs.email)) {
      errors.email = 'Please enter a valid email address'
    } else if (typeof inputs.email !== 'string') {
      errors.email = 'Email must be a string'
    } else if (typeof inputs.password !== 'string') {
      errors.password = 'Password must be a string'
    } else if (inputs.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long'
    } else if (inputs.password.length > 50) {
      errors.password = 'Password cannot exceed 50 characters'
    } else if (!/[A-Z]/.test(inputs.password) || !/[a-z]/.test(inputs.password) || !/\d/.test(inputs.password)) {
      errors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    }
  
    return errors
  }
// Validar en el onChange. para mejorar la Ux, esto hace saltar los errores 
// de manera inmediata

// validar({
//     ...inputs,
//     [event.target.name] : event.target.valuer
// })