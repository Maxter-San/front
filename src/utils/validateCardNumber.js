export default function validateCardNumber(value){
  if(value == "") {
    return "Completa este campo\n"
  }

  if(!/[0-9]/g.test(value)) {
    return "El texto solo puede contener números\n"
  }

  if(!/^\d{16}$/g.test(value)) {
    return "El texto tiene que contener 16 dígitos numéricos\n"
  }

  if(/(\s)/g.test(value)) {
    return "El texto no puede tener espacios\n"
  }

  return "";
}
