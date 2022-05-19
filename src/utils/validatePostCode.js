export default function validatePostCode(value){
  if(value == "") {
    return "Completa este campo\n"
  }

  if(!/[0-9]/g.test(value)) {
    return "El texto solo puede contener números\n"
  }

  if(!/^\d{5}$/g.test(value)) {
    return "El texto tiene que contener 5 dígitos numéricos\n"
  }

  if(/(\s)/g.test(value)) {
    return "El texto no puede tener espacios\n"
  }

  return "";
}
