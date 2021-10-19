class PasswordsService {
  lowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  upperCase = [...this.lowerCase.map((letter) => letter.toUpperCase())];

  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  specialSymbols = ["!", "@", "#", "$", "%", "&", "?", "-", "+", "=", "~"];

  generatePasswords(
    isUpperCase,
    isLowerCase,
    isNumbers,
    isSpecialSymbols,
    passwordLength,
    passwordsAmount
  ) {
    if (!isUpperCase && !isLowerCase && !isNumbers && !isSpecialSymbols) {
      return { error: "Настройте пароль" };
    }

    if (!+passwordLength) {
      return { error: "Введите длину пароля" };
    }

    if (+passwordLength > 50) {
      return { error: "Максимальная длина пароля - 50 символов" };
    }

    if (!+passwordsAmount) {
      return { error: "Введите количество паролей" };
    }

    if (+passwordsAmount > 5) {
      return { error: "Максимальная длина количества паролей - 5 штук" };
    }

    let passwords = [];
    let passwordsSettings = [];

    if (isUpperCase) {
      passwordsSettings.push(...this.upperCase);
    }

    if (isLowerCase) {
      passwordsSettings.push(...this.lowerCase);
    }

    if (isNumbers) {
      passwordsSettings.push(...this.numbers);
    }

    if (isSpecialSymbols) {
      passwordsSettings.push(...this.specialSymbols);
    }

    for (let i = 0; i < passwordsAmount; i++) {
      let password = "";

      for (let i = 0; i < passwordLength; i++) {
        password +=
          passwordsSettings[
            Math.floor(Math.random() * passwordsSettings.length)
          ];
      }

      passwords.push(password);
    }

    return passwords;
  }
}

export default new PasswordsService();
