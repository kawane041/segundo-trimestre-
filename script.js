const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está se preparando para o ENEM e se depara com uma nova abordagem na educação que utiliza tecnologia para personalizar o aprendizado. Qual o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é inovador!",
                afirmacao: "Você está animado com a possibilidade de usar novas tecnologias para melhorar o aprendizado."
            },
            {
                texto: "Isso é preocupante!",
                afirmacao: "Você está preocupado com a dependência excessiva da tecnologia no processo educativo."
            }
        ]
    },
    {
        enunciado: "Durante um estudo sobre as mudanças no mercado de trabalho, você é solicitado a elaborar um trabalho sobre como a automação e a inteligência artificial estão moldando o futuro do emprego. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza fontes confiáveis online para pesquisar sobre as tendências atuais e como elas impactam o mercado de trabalho.",
                afirmacao: "Você conseguiu reunir informações úteis e relevantes para seu trabalho."
            },
            {
                texto: "Baseia-se em debates e discussões que teve com colegas e nas suas próprias observações sobre o mercado de trabalho.",
                afirmacao: "Você valorizou suas próprias análises e experiências na elaboração do trabalho."
            }
        ]
    },
    {
        enunciado: "Em uma discussão sobre os impactos das mudanças climáticas, você é convidado a compartilhar sua visão sobre as soluções possíveis. Qual é a sua posição?",
        alternativas: [
            {
                texto: "Acredita que a inovação tecnológica pode oferecer soluções eficazes para mitigar os efeitos das mudanças climáticas.",
                afirmacao: "Você vê a tecnologia como um aliado importante na luta contra as mudanças climáticas."
            },
            {
                texto: "Preocupa-se com a eficácia das soluções tecnológicas e defende a necessidade de ações mais imediatas e práticas.",
                afirmacao: "Você acredita que soluções práticas e rápidas são essenciais para enfrentar os desafios climáticos."
            }
        ]
    },
    {
        enunciado: "Ao final de um projeto sobre inclusão social, você precisa criar uma apresentação visual que represente seu ponto de vista. Como você procede?",
        alternativas: [
            {
                texto: "Cria uma apresentação utilizando ferramentas de design gráfico tradicionais, como PowerPoint.",
                afirmacao: "Você percebeu que muitos ainda não dominam as ferramentas digitais e decidiu compartilhar seus conhecimentos sobre design gráfico."
            },
            {
                texto: "Utiliza uma ferramenta online de criação de apresentações que facilita a criação rápida e visualmente atraente.",
                afirmacao: "Você encontrou uma maneira eficiente de criar conteúdo visual e decidiu ensinar outros a usar essas ferramentas digitais."
            }
        ]
    },
    {
        enunciado: "Você está trabalhando em grupo para uma atividade sobre políticas públicas. Um dos integrantes do grupo utilizou uma ferramenta online para gerar um texto completo. O que você faz?",
        alternativas: [
            {
                texto: "Aceita o texto gerado pela ferramenta como está, considerando que isso ajuda a economizar tempo.",
                afirmacao: "Você percebe que a dependência excessiva de ferramentas pode reduzir a sua capacidade crítica e de criação pessoal."
            },
            {
                texto: "Revisa o texto gerado, adiciona suas próprias análises e contribuições para garantir que o trabalho reflita suas ideias.",
                afirmacao: "Você entende a importância de manter um equilíbrio entre o uso de ferramentas e a contribuição pessoal para a qualidade do trabalho."
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
    caixaPerguntas.textContent = "Seu futuro em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
