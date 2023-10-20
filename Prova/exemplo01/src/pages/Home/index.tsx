// Desafios:
// 1- Refatorar a UI da soma dos dois números de tal forma que não seja necessário o botão "Somar";
// 2- Adicionar na página um contador de palavras de forma análoga ao contador de caracteres;
// 3- Estilizar a página

import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const Home = () => {
  // Área do state
  const [sentence, setSentence] = useState("");
  const [numberOfChars, setNumberOfChars] = useState(0);
  const [numberOfWords, setNumberOfWords] = useState(0);

  // const sum = () => setResult(number1 + number2)

  useEffect(() => {
    const size = sentence.length;
    // let arr21 = sentence.replace(/\./g, '') Caso fosse ser removido todos os pontos
    // let arr22 = arr21.replace(/\s/g, ""); Caso fosse ignorar os pontos
    setNumberOfChars(size);
  }, [sentence]);

  useEffect(() => {
    let arr1 = sentence.trim();
    let arr2 = arr1.replace(/([^\w ]|_)/g, "");
    let arr3 = arr2.split(" ");
    setNumberOfWords(arr3.length); //- 1)
  }, [sentence]);

  //Área de rendericação
  return (
    <div className={styles.container}>
      <div className={styles.son}>
        <input type="text" value={sentence} onChange={(e) => setSentence(e.target.value)} />
        <br />
        <span>Quantidade de caracteres: {numberOfChars}</span>
        <br />
        <span>Quantidade de palavras: {numberOfWords}</span>
      </div>
    </div>
  );
};

export default Home;
