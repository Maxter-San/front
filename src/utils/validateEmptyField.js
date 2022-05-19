export default function validateEmptyField(value){
  if(value == "") {
    return "Completa este campo\n"
  }

  return "";
}
