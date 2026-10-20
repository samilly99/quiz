// ==================== 20 PERGUNTAS ====================

const perguntas = [
    // ========== FRONT-END ==========
    {
        pergunta: "Qual propriedade CSS cria um layout flexível e permite alinhar itens num container?",
        alternativas: ["display: grid", "display: flex", "position: relative", "float: left"],
        correta: 1,
        materia: "Front-end"
    },
    {
        pergunta: "Qual elemento HTML representa semanticamente o conteúdo principal de uma página?",
        alternativas: ["<section>", "<article>", "<main>", "<div>"],
        correta: 2,
        materia: "Front-end"
    },
    {
        pergunta: "O que Array.prototype.map() devolve?",
        alternativas: [
            "O array original sem alterações",
            "Um novo array com os resultados da função aplicada a cada elemento",
            "Um array apenas com os elementos verdadeiros",
            "O primeiro elemento do array"
        ],
        correta: 1,
        materia: "JavaScript"
    },
    {
        pergunta: "Qual é a diferença entre let e const em JavaScript?",
        alternativas: [
            "let só funciona em funções",
            "const não permite reatribuir a variável; let permite",
            "const só pode guardar números",
            "let não pode ser alterado"
        ],
        correta: 1,
        materia: "JavaScript"
    },
    {
        pergunta: "Qual seletor CSS seleciona apenas elementos p que sejam filhos diretos de div?",
        alternativas: ["div p", "div > p", "div + p", "div ~ p"],
        correta: 1,
        materia: "CSS"
    },
    {
        pergunta: "Qual é o resultado de typeof null em JavaScript?",
        alternativas: ["null", "undefined", "object", "boolean"],
        correta: 2,
        materia: "JavaScript"
    },

    // ========== BACK-END ==========
    {
        pergunta: "Qual método HTTP é normalmente usado para criar um novo recurso numa API REST?",
        alternativas: ["GET", "PUT", "POST", "DELETE"],
        correta: 2,
        materia: "Back-end"
    },
    {
        pergunta: "Qual é a diferença entre autenticação e autorização?",
        alternativas: [
            "São exatamente a mesma coisa",
            "Autenticação verifica a identidade; autorização verifica as permissões",
            "Autorização verifica a identidade; autenticação verifica permissões",
            "Autenticação serve apenas para administradores"
        ],
        correta: 1,
        materia: "Segurança"
    },
    {
        pergunta: "Em JavaScript, o que acontece quando uma Promise é rejeitada e não existe um tratamento para essa rejeição?",
        alternativas: [
            "A Promise transforma-se automaticamente em null",
            "O JavaScript repete a operação até ter sucesso",
            "Pode ocorrer uma rejeição não tratada",
            "A Promise converte-se numa função síncrona"
        ],
        correta: 2,
        materia: "Back-end"
    },
    {
        pergunta: "O que significa o código HTTP 401?",
        alternativas: [
            "Erro interno do servidor",
            "Falta de autenticação válida",
            "Recurso não encontrado",
            "Pedido executado com sucesso"
        ],
        correta: 1,
        materia: "HTTP"
    },
    {
        pergunta: "Qual é a finalidade principal do CORS?",
        alternativas: [
            "Encriptar todas as comunicações",
            "Controlar, através de políticas do servidor, quais origens podem aceder a recursos",
            "Impedir todas as requisições POST",
            "Substituir a autenticação de utilizadores"
        ],
        correta: 1,
        materia: "Segurança"
    },

    // ========== BASE DE DADOS ==========
    {
        pergunta: "Qual cláusula SQL filtra os grupos depois de serem agregados?",
        alternativas: ["WHERE", "ORDER BY", "HAVING", "LIMIT"],
        correta: 2,
        materia: "SQL"
    },
    {
        pergunta: "Qual JOIN devolve apenas os registos que têm correspondência nas duas tabelas?",
        alternativas: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "CROSS JOIN"],
        correta: 2,
        materia: "SQL"
    },
    {
        pergunta: "O que significa a propriedade Atomicity no modelo ACID?",
        alternativas: [
            "Uma transação é executada por completo ou não produz os seus efeitos",
            "Os dados ficam sempre ordenados",
            "Cada utilizador tem uma base de dados independente",
            "As consultas nunca podem falhar"
        ],
        correta: 0,
        materia: "Bases de dados"
    },
    {
        pergunta: "Qual é a principal finalidade de um índice numa base de dados?",
        alternativas: [
            "Eliminar automaticamente todos os duplicados",
            "Acelerar determinadas consultas, com custos adicionais de armazenamento e escrita",
            "Substituir as chaves primárias",
            "Encriptar as colunas da tabela"
        ],
        correta: 1,
        materia: "Bases de dados"
    },

    // ========== RACIOCÍNIO / DESAFIOS ESTILO QI ==========
    {
        pergunta: "Descobre o próximo número: 2, 6, 12, 20, 30, ...",
        alternativas: ["36", "40", "42", "44"],
        correta: 2,
        materia: "Raciocínio · Difícil"
    },
    {
        pergunta: "Todos os zargs são blins. Nenhum blin é um torp. Sabe-se que existe pelo menos um zarg. Qual conclusão é necessariamente verdadeira?",
        alternativas: [
            "Todos os torps são zargs",
            "Alguns zargs são torps",
            "Nenhum zarg é torp",
            "Nenhum blin é zarg"
        ],
        correta: 2,
        materia: "Lógica · Difícil"
    },
    {
        pergunta: "Cinco máquinas idênticas produzem cinco peças em cinco minutos. Ao mesmo ritmo, quanto tempo demoram 100 máquinas a produzir 100 peças?",
        alternativas: ["5 minutos", "20 minutos", "100 minutos", "500 minutos"],
        correta: 0,
        materia: "Raciocínio · Difícil"
    },
    {
        pergunta: "Qual é o próximo número da sequência: 1, 2, 6, 15, 31, 56, ...?",
        alternativas: ["81", "87", "92", "96"],
        correta: 2,
        materia: "Padrões · Difícil"
    },
    {
        pergunta: "Tens 8 bolas aparentemente iguais, mas uma é mais pesada. Usando uma balança de dois pratos, qual estratégia garante encontrar a bola mais pesada em apenas duas pesagens?",
        alternativas: [
            "Pesar 4 contra 4 e depois pesar duas bolas do grupo mais pesado",
            "Pesar 3 contra 3; se equilibrar, pesar as 2 restantes entre si; caso contrário, pesar 1 contra 1 do grupo mais pesado",
            "Pesar 2 contra 2 e escolher uma das bolas restantes ao acaso",
            "Pesar 7 bolas contra 1 e repetir a mesma pesagem"
        ],
        correta: 1,
        materia: "Desafio final · Estilo QI"
    }
];

// ==================== PRÉMIOS: 20 PERGUNTAS ====================

const premios = [
    1000, 2000, 3000, 5000, 10000,
    15000, 20000, 30000, 50000, 75000,
    100000, 150000, 200000, 300000, 400000,
    500000, 600000, 750000, 1000000, 1500000
];

// ==================== ESTADO DO JOGO ====================

let perguntaAtual = 0;
let premioAtual = 0;
let respondeu = false;
let eliminouUsado = false;
let riscoAtivo = false;
let jogoFinalizado = false;

// ==================== ELEMENTOS HTML ====================

const perguntaE = document.getElementById("pergunta");
const alternativasE = document.getElementById("alternativas");
const mensagemE = document.getElementById("mensagem");
const numeroPerguntaE = document.getElementById("numero-pergunta");
const premioE = document.getElementById("premio");
const proximaE = document.getElementById("proxima");
const materiaE = document.getElementById("materia");
const progressoE = document.getElementById("progresso");

const btnParar = document.getElementById("parar");
const btnEliminar = document.getElementById("eliminar");
const btnReiniciar = document.getElementById("reiniciar");
const btnRisco = document.getElementById("risco");

// ==================== FUNÇÕES AUXILIARES ====================

function formatarDinheiro(valor) {
    return `R$ ${valor.toLocaleString("pt-BR")}`;
}

function atualizarPremio() {
    premioE.textContent = `💰 ${formatarDinheiro(premioAtual)}`;
}

function bloquearControlos() {
    btnParar.disabled = true;
    btnEliminar.disabled = true;
    btnRisco.disabled = true;
}

function limparMensagem() {
    mensagemE.textContent = "";
    mensagemE.className = "";
}

// ==================== CARREGAR PERGUNTA ====================

function carregarPergunta() {
    if (perguntaAtual >= perguntas.length) {
        finalizarJogo();
        return;
    }

    respondeu = false;
    eliminouUsado = false;
    riscoAtivo = false;
    jogoFinalizado = false;

    proximaE.disabled = true;
    proximaE.textContent = "Próxima Pergunta";

    btnParar.disabled = false;
    btnEliminar.disabled = false;
    btnRisco.disabled = false;
    btnRisco.textContent = "🔥 Arriscar (Dobrar)";

    limparMensagem();
    alternativasE.innerHTML = "";

    const item = perguntas[perguntaAtual];

    perguntaE.textContent = item.pergunta;
    numeroPerguntaE.textContent =
        `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;

    materiaE.textContent = `📚 ${item.materia}`;

    atualizarPremio();

    progressoE.style.width =
        `${(perguntaAtual / perguntas.length) * 100}%`;

    item.alternativas.forEach((texto, indice) => {
        const botao = document.createElement("button");

        botao.type = "button";
        botao.classList.add("alternativa");
        botao.textContent =
            `${String.fromCharCode(65 + indice)}) ${texto}`;

        botao.dataset.indice = indice;

        botao.addEventListener("click", () => {
            verificarResposta(indice, botao);
        });

        alternativasE.appendChild(botao);
    });
}

// ==================== VERIFICAR RESPOSTA ====================

function verificarResposta(indiceEscolhido, botaoEscolhido) {
    if (respondeu || jogoFinalizado) return;

    respondeu = true;

    const item = perguntas[perguntaAtual];
    const botoes = alternativasE.querySelectorAll(".alternativa");
    const acertou = indiceEscolhido === item.correta;

    botoes.forEach(botao => {
        botao.disabled = true;
    });

    bloquearControlos();

    if (acertou) {
        botaoEscolhido.classList.add("correta");

        const premioPergunta = premios[perguntaAtual];

        if (riscoAtivo) {
            premioAtual = premioPergunta * 2;

            mensagemE.textContent =
                `🔥 RISCO CERTO! Ganhaste ${formatarDinheiro(premioAtual)}!`;
        } else {
            premioAtual = premioPergunta;

            mensagemE.textContent = "🎉 Resposta correta!";
        }

        mensagemE.className = "acerto";
    } else {
        botaoEscolhido.classList.add("errada");

        botoes[item.correta].classList.add("correta");

        if (riscoAtivo) {
            premioAtual = 0;

            mensagemE.textContent =
                `💥 RISCO ERRADO! Perdeste tudo. A resposta correta era: ${item.alternativas[item.correta]}`;
        } else {
            mensagemE.textContent =
                `❌ Resposta errada! A resposta correta era: ${item.alternativas[item.correta]}`;
        }

        mensagemE.className = "erro";
    }

    atualizarPremio();

    progressoE.style.width =
        `${((perguntaAtual + 1) / perguntas.length) * 100}%`;

    proximaE.disabled = false;

    if (perguntaAtual === perguntas.length - 1) {
        proximaE.textContent = "Ver resultado final";
    }
}

// ==================== PARAR O JOGO ====================

btnParar.addEventListener("click", () => {
    if (respondeu || jogoFinalizado) return;

    jogoFinalizado = true;
    respondeu = true;

    perguntaE.textContent = "🛑 Decidiste parar!";
    alternativasE.innerHTML = "";

    numeroPerguntaE.textContent = "Jogo terminado";
    materiaE.textContent = "🎓 Resultado";

    mensagemE.textContent =
        `Saíste com ${formatarDinheiro(premioAtual)}.`;

    mensagemE.className = "acerto";

    progressoE.style.width =
        `${(perguntaAtual / perguntas.length) * 100}%`;

    bloquearControlos();

    proximaE.textContent = "🔄 Jogar novamente";
    proximaE.disabled = false;
});

// ==================== ELIMINAR DUAS ALTERNATIVAS ====================

btnEliminar.addEventListener("click", () => {
    if (respondeu || eliminouUsado || jogoFinalizado) return;

    if (premioAtual < 1000) {
        mensagemE.textContent =
            "⚠️ Precisas de pelo menos R$ 1.000 para usar esta ajuda.";

        mensagemE.className = "erro";
        return;
    }

    const custo = Math.floor(premioAtual * 0.3);

    const confirmar = confirm(
        `Eliminar duas alternativas erradas custa ${formatarDinheiro(custo)}. Confirmas?`
    );

    if (!confirmar) return;

    const item = perguntas[perguntaAtual];

    const botoes = Array.from(
        alternativasE.querySelectorAll(".alternativa")
    );

    const indicesErrados = item.alternativas
        .map((_, indice) => indice)
        .filter(indice => indice !== item.correta);

    // Embaralhar as alternativas erradas.
    for (let i = indicesErrados.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [indicesErrados[i], indicesErrados[j]] =
            [indicesErrados[j], indicesErrados[i]];
    }

    const paraEliminar = indicesErrados.slice(0, 2);

    paraEliminar.forEach(indice => {
        botoes[indice].disabled = true;
        botoes[indice].classList.add("eliminada");
    });

    premioAtual = Math.max(0, premioAtual - custo);
    eliminouUsado = true;

    atualizarPremio();

    btnEliminar.disabled = true;

    mensagemE.textContent =
        `✂️ Duas alternativas eliminadas. Custo: ${formatarDinheiro(custo)}.`;

    mensagemE.className = "";
});

// ==================== MODO RISCO ====================

btnRisco.addEventListener("click", () => {
    if (respondeu || riscoAtivo || jogoFinalizado) return;

    riscoAtivo = true;

    btnRisco.disabled = true;
    btnEliminar.disabled = true;
    btnRisco.textContent = "🔥 RISCO ATIVO!";

    mensagemE.textContent =
        "🔥 Se acertares, ganhas o dobro do prémio desta pergunta. Se errares, perdes tudo!";

    mensagemE.className = "risco";
});

// ==================== AVANÇAR / MOSTRAR RESULTADO ====================

proximaE.addEventListener("click", () => {
    // O botão passa a reiniciar quando o jogo termina.
    if (jogoFinalizado) {
        reiniciarJogo();
        return;
    }

    if (!respondeu) return;

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {
        carregarPergunta();
    } else {
        finalizarJogo();
    }
});

// ==================== FINALIZAR JOGO ====================

function finalizarJogo() {
    jogoFinalizado = true;
    respondeu = true;

    perguntaE.textContent = "🏆 Quiz concluído!";
    alternativasE.innerHTML = "";

    numeroPerguntaE.textContent =
        `${perguntas.length} de ${perguntas.length} perguntas`;

    materiaE.textContent = "🎓 Resultado final";

    mensagemE.textContent =
        `Terminaste o quiz com ${formatarDinheiro(premioAtual)}!`;

    mensagemE.className = "acerto";

    progressoE.style.width = "100%";

    proximaE.textContent = "🔄 Jogar novamente";
    proximaE.disabled = false;

    bloquearControlos();
}

// ==================== REINICIAR JOGO ====================

function reiniciarJogo() {
    perguntaAtual = 0;
    premioAtual = 0;
    respondeu = false;
    eliminouUsado = false;
    riscoAtivo = false;
    jogoFinalizado = false;

    carregarPergunta();
}

btnReiniciar.addEventListener("click", () => {
    if (confirm("Tens a certeza de que queres reiniciar? O progresso será perdido.")) {
        reiniciarJogo();
    }
});

// ==================== INICIAR ====================

carregarPergunta();