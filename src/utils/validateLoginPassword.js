export default function validateLoginPassword(value){
  if(value === ""){
    return "Completa este campo";
  }
  return "";
}