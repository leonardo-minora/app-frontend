"use client";

// function Home() {
//   return <button>Clique aqui</button>;
// }

// const Botao = (props: any) => {
const Botao = ({valor}: any) => {
  const handle = () => {
    console.log("clicou");
    console.info("clicou");
    console.error("clicou");
  }

  const titulo_do_botao = valor ? valor : "?";
  // const titulo_do_botao = props.valor ? props.valor : "?";
  // const titulo_do_botao = props.valor ?? props.valor;
  
  return (<button onClick={handle}>{titulo_do_botao}</button>)
};

const Home = () => {
  return (
    <>
      <div>
        <Botao valor="1" />
        <Botao valor="2" />
        <Botao />
      </div>
      <div>
        <Botao />
        <Botao />
        <Botao />
      </div>
      <div>
        <Botao />
        <Botao />
        <Botao />
      </div>
    </>
  );
}

export default Home;
