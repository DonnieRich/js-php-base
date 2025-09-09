class MiaClasse {
  volume = 1;
  metodoConArrow = () => {
    console.log(this.volume);
  };
}

const miaClasse = new MiaClasse();
miaClasse.metodoConArrow(); // 1
const { metodoConArrow } = miaClasse;
metodoConArrow(); // 1
