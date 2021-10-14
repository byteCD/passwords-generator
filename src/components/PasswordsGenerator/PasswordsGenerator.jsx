import React, { useEffect, useState } from "react";
import passwordService from "../../services/PasswordsService";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./PasswordsGenerator.css";

const PasswordsGenerator = () => {
  const [passwords, setPasswords] = useState([]);
  const [isUpperCase, setIsUpperCase] = useState(true);
  const [isLowerCase, setIsLowerCase] = useState(true);
  const [isNumbers, setIsNumbers] = useState(true);
  const [isSpecialSymbols, setIsSpecialSymbols] = useState(true);
  const [passwordLength, setPasswordLength] = useState(10);
  const [passwordsAmount, setPasswordsAmount] = useState(1);
  const [error, setError] = useState("");

  const generatePasswords = () => {
    const passwords = passwordService.generatePasswords(
      isUpperCase,
      isLowerCase,
      isNumbers,
      isSpecialSymbols,
      passwordLength,
      passwordsAmount
    );

    if (!Array.isArray(passwords)) {
      setError(passwords.error);
    } else {
      setError("");
    }

    setPasswords(passwords);
  };

  useEffect(() => {
    generatePasswords();
  }, []);

  return (
    <div className="PasswordsGenerator">
      {!error && (
        <div className="PasswordsGenerator__passwords">
          {passwords?.map((password, index) => (
            <p key={index}>{password}</p>
          ))}
        </div>
      )}
      {error && (
        <div className="PasswordsGenerator_error">
          <p>{error}</p>
        </div>
      )}
      <div className="PasswordsGenerator__settings">
        <h2>Настройки пароля</h2>
        <div className="PasswordsGenerator__setting">
          <input
            type="checkbox"
            id="uppercase"
            checked={isUpperCase}
            onChange={() => setIsUpperCase((prevState) => !prevState)}
          />
          <label htmlFor="uppercase">Заглавные буквы</label>
        </div>
        <div className="PasswordsGenerator__setting">
          <input
            type="checkbox"
            id="lowercase"
            checked={isLowerCase}
            onChange={() => setIsLowerCase((prevState) => !prevState)}
          />
          <label htmlFor="lowercase">Строчные буквы</label>
        </div>
        <div className="PasswordsGenerator__setting">
          <input
            type="checkbox"
            id="numbers"
            checked={isNumbers}
            onChange={() => setIsNumbers((prevState) => !prevState)}
          />
          <label htmlFor="numbers">Цифры</label>
        </div>
        <div className="PasswordsGenerator__setting">
          <input
            type="checkbox"
            id="symbols"
            checked={isSpecialSymbols}
            onChange={() => setIsSpecialSymbols((prevState) => !prevState)}
          />
          <label htmlFor="symbols">Специальные символы</label>
        </div>
        <div className="PasswordsGenerator__length">
          <label htmlFor="length">Длина (макс. 50)</label>
          <Input
            type="text"
            id="length"
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
          />
        </div>
        <div className="PasswordsGenerator__amount">
          <label htmlFor="length">Количество (макс. 5)</label>
          <Input
            type="text"
            id="length"
            value={passwordsAmount}
            onChange={(e) => setPasswordsAmount(e.target.value)}
          />
        </div>
      </div>
      <Button onClick={generatePasswords}>Сгенерировать</Button>
    </div>
  );
};

export default PasswordsGenerator;
