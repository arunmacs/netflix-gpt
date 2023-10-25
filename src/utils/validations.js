export const validateFormData = (email, password) => {
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const validEmail = emailRegex.test(email);
  const validPassword = passwordRegex.test(password);

  if (!validEmail) return "Email ID is not valid";
  if (!validPassword) return "Password is not valid";

  return null;
};
