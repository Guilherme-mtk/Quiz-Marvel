import React from "react";
import Radio from "./Form/Radio";

const perguntas = [
  {
    pergunta:
      "Quem foi o primeiro personagem a testar o escudo do capitão américa?",
    options: [
      "Guardas da Hidra",
      "Doutor Zola",
      "Caveira Vermelha",
      "Peggy Carter",
    ],
    resposta: "Peggy Carter",
    id: "p1",
  },
  {
    pergunta: "Qual é a origem dos podores da Capitã Marvel?",
    options: [
      "Nasceu com poderes",
      "Presente como forma de agredecimento do Eternos",
      "Explosão de um dispositivo extraterrestre",
      "Ganhou os poderes por uma joia do infinito",
    ],
    resposta: "explosão de um dispositivo extraterrestre",
    id: "p2",
  },
  {
    pergunta: "Em Homem de ferro quem ajudou na fuga de Tony Stark",
    options: [
      "Máquina de Combate",
      "Agentes da S.H.I.E.L.D.",
      "Ho Yinsen",
      "Pepper Potts",
    ],
    resposta: "Ho Yinsen",
    id: "p3",
  },
  {
    pergunta:
      "No filme Capitão América o personagem Steve Rogers é recusado a entrada ao exército, qual foi o motivo?",
    options: [
      "Por ficha criminal",
      "Por falta de Documentos",
      "Por doença crônica",
      "Por Documentos ilegítimo",
    ],
    resposta: "Por doença crônica",
    id: "p4",
  },
  {
    pergunta: "Quem foi o responsável pela destruição do Mjolnir?",
    options: ["Odin", "Loki", "Hela", "Frigga"],
    resposta: "Hella",
    id: "p5",
  },
  {
    pergunta: "Qual Joia do infinito a personagem Capitã Marvel resgata?",
    options: [
      "Joia da Alma",
      "Joia da Mente",
      "Joia do espaço",
      "Joia do Tempo",
    ],
    resposta: "Joia do espaço",
    id: "p6",
  },
  {
    pergunta: "Qual o nome da filha do Tony Stark?",
    options: ["Abigail Stark", "Morgan Stark", "Merry Stark", "Jene Stark"],
    resposta: "Morgan Stark",
    id: "p7",
  },
  {
    pergunta: "Qual foi o custo da derrota de Hela em thor ragnarok?",
    options: [
      "Centenas de mortes de diversos povos",
      "Morte das Valquírias",
      "A perda dos olhos de Thor",
      "Destruição de toda Asgard",
    ],
    resposta: "Destruição de toda Asgard",
    id: "p8",
  },
  {
    pergunta: "Qual membro da realeza Asgardiana foi primeiro a morrer?",
    options: ["Frigga", "Thor", "Hela", "Loki"],
    resposta: "Frigga",
    id: "p9",
  },
  {
    pergunta:
      "Qual Objeto utilizado em vingadores deu inicio ao ataque de Nova York?",
    options: [
      "Uma joia do infinito",
      "Os 10 aneis",
      "Incursão dimensional",
      "As Joais do infinito",
    ],
    resposta: "Uma joia do infinito",
    id: "p10",
  },
];

function App() {
  const [respostas, setRespostas] = React.useState({
    p1: "",
    p2: "",
    p3: "",
    p4: "",
    p5: "",
    p6: "",
    p7: "",
    p8: "",
    p9: "",
    p10: "",
  });

  const [slide, setSlide] = React.useState(0);
  const [resultado, setResultado] = React.useState(null);

  function handleChange({ target }) {
    setRespostas({ ...respostas, [target.id]: target.value });
  }

  function resultadoFinal() {
    const corretas = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta
    );
    setResultado(`Você acertou: ${corretas.length} de ${perguntas.length}`);
  }

  function handleClick() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      resultadoFinal();
    }
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      {perguntas.map((pergunta, index) => (
        <Radio
          active={slide === index}
          key={pergunta.id}
          value={respostas[pergunta.id]}
          onchange={handleChange}
          {...pergunta}
        />
      ))}
      {resultado ? (
        <p>{resultado}</p>
      ) : (
        <button onClick={handleClick}>Próxima</button>
      )}
    </form>
  );
}

export default App;
