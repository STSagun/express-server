export default function validateEmail(email: string): boolean {
  let regex = /^([A-Za-z0-9 \-\.])+\@(successive.tech)$/;
  return regex.test(email);
}
