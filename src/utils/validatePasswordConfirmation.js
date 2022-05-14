export default function validatePasswordConfirmation(original, confirmation){
  if (original == "") {
    return "Completa este campo";
  }
  if (original != confirmation) {
    return "La contraseña debe coincidir";
  }

  return '';
}
