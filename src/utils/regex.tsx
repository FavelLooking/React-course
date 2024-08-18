export const numberRegex = /[0-9]/;
export const uppercaseRegex = /[A-Z]/;
export const lowercaseRegex = /[a-z]/;
export const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;

export const checkStrongPassword = (password: string): string => {
  const hasNumber = numberRegex.test(password);
  const hasUppercase = uppercaseRegex.test(password);
  const hasLowercase = lowercaseRegex.test(password);
  const hasSymbol = symbolRegex.test(password);
  const strength = +hasNumber + +hasUppercase + +hasLowercase + +hasSymbol;

  switch (strength) {
    case 1:
      return 'Weak password';
    case 2:
      return 'Average password';
    case 3:
      return 'Strong password';
    case 4:
      return 'Superb password';
    default:
      return '';
  }
};
