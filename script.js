const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está aprendendo sobre o papel das empresas de energia no Brasil e descobre que a Copel é uma das principais fornecedoras de energia do estado do Paraná. Qual o primeiro pensamento que lhe vem à mente?",
        alternativas: [
            {
                texto: "É interessante ver como empresas locais têm um grande impacto na economia.",
                afirmacao: "afirmação"
            },
            {
                texto: "A dependência de uma única empresa para energia pode ser preocupante.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você está realizando uma pesquisa sobre como a Copel investe em energia renovável. A sua tarefa é escrever um relatório sobre isso. Qual abordagem você escolheria?",
        alternativas: [
            {
                texto: "Utiliza informações disponíveis no site da Copel e em relatórios de sustentabilidade da empresa.",
                afirmacao: "afirmação"
            },
            {
                texto: "Baseia o relatório em entrevistas com pessoas que trabalham na empresa e em artigos acadêmicos sobre energia renovável.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Durante uma palestra sobre o futuro da energia no Paraná, o palestrante menciona que a Copel está investindo em tecnologias de smart grid. Como você reage a essa informação?",
        alternativas: [
            {
                texto: "Fico entusiasmado com as inovações tecnológicas que podem melhorar a eficiência da rede elétrica.",
                afirmacao: "afirmação"
            },
            {
                texto: "Preocupo-me com a implementação e os custos associados a essas novas tecnologias.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você foi desafiado a criar uma apresentação sobre o impacto das iniciativas da Copel no desenvolvimento sustentável da região. Qual ferramenta você usaria para criar essa apresentação?",
        alternativas: [
            {
                texto: "Usaria um software de apresentação como o PowerPoint para criar gráficos e slides detalhados.",
                afirmacao: "afirmação"
            },
            {
                texto: "Utilizaria uma ferramenta de design gráfico para criar imagens e infográficos visualmente atraentes.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Seu grupo está desenvolvendo um projeto de pesquisa sobre a eficiência energética e decidiu usar alguns dados fornecidos pela Copel. Ao revisar o projeto, você percebe que as informações estão muito semelhantes aos dados oficiais da empresa. O que você faz?",
        alternativas: [
            {
                texto: "Utiliza os dados fornecidos sem alterações, pois são informações oficiais e confiáveis.",
                afirmacao: "afirmação"
            },
            {
                texto: "Analisa os dados, compara com outras fontes e adiciona insights próprios para garantir a originalidade do projeto.",
                afirmacao: "afirmação"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPrincipal.style.display = "none";
    caixaResultado.style.display = "block";
    textoResultado.textContent = `Sua jornada: ${historiaFinal.trim()}`;
}

mostraPergunta();
