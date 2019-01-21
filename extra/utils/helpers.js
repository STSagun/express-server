export default function validateEmail(email) {
  let regex = /^([A-Za-z0-9 \-\.])+\@(successive.tech)$/;
  return regex.test(email);
}
