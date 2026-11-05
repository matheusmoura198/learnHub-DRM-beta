const prompt = require("prompt-sync")()

let nome = prompt("Digite seu nome: ")
let continuar = "s"

do {
    let pontos = 0
    let vidas = 3
    let acertos = 0

    console.log(`
=== DESAFIO DAS QUADRAS ===
Bem-vindo, ${nome}!

1 - Jogar
2 - Ver regras
3 - Sair
`)

    let opcao = Number(prompt("Escolha uma opção: "))

    switch (opcao) {
        case 1: {
            console.log(`
Escolha a dificuldade:

1 - Fácil
2 - Médio
3 - Difícil
`)

            let dificuldade = Number(prompt("Dificuldade: "))

            let perguntas = []

            switch (dificuldade) {
                case 1:
                    perguntas = [
                        {
                            pergunta: "Quantos jogadores de cada equipe ficam em quadra?",
                            alternativas: ["4", "5", "6", "7"],
                            resposta: 2
                        },
                        {
                            pergunta: "Quantos pontos vale um lance livre convertido?",
                            alternativas: ["1", "2", "3", "4"],
                            resposta: 1
                        }
                    ]
                   break

                case 2:
                    perguntas = [
                        {
                            pergunta: "Quantos pontos vale uma cesta de trás da linha de três?",
                            alternativas: ["1", "2", "3", "4"],
                            resposta: 3
                        },
                        {
                            pergunta: "Quantos períodos tem uma partida da NBA?",
                            alternativas: ["2", "3", "4", "5"],
                            resposta: 3
                        }
                    ]
                    break

                case 3:
                    perguntas = [
                        {
                            pergunta: "Na NBA, quantas faltas pessoais eliminam um jogador da partida?",
                            alternativas: ["4", "5", "6", "7"],
                            resposta: 3
                        },
                        {
                            pergunta: "Quantos segundos uma equipe tem para realizar um arremesso na NBA?",
                            alternativas: ["14", "20", "24", "30"],
                            resposta: 3
                        }
                    ]
                    break

                default:
                    console.log("Dificuldade inválida")
                    break
            }

            if (perguntas.length > 0) {
                for (
                    let i = 0;
                    i < perguntas.length && vidas > 0;
                    i++
                ) {
                    console.log(`
Pergunta ${i + 1}
${perguntas[i].pergunta}
`)

                    for (
                        let j = 0;
                        j < perguntas[i].alternativas.length;
                        j++
                    ) {
                        console.log(
                            `${j + 1} - ${perguntas[i].alternativas[j]}`
                        )
                    }

                    let resposta = Number(prompt("Sua resposta: "))

                    if (
                        resposta >= 1 &&
                        resposta <= perguntas[i].alternativas.length
                    ) {
                        if (resposta === perguntas[i].resposta) {
                            console.log("Resposta correta!")
                            pontos += 10
                            acertos++
                        } else {
                            console.log("Resposta errada!")
                            vidas--
                        }
                    } else {
                        console.log("Alternativa inválida! Você perdeu uma vida.")
                        vidas--
                    }

                    console.log(`
Pontos: ${pontos}
Vidas: ${vidas}
`)

                    while (vidas <= 0) {
                        console.log("Fim de jogo! Suas vidas acabaram.")
                        break
                    }
                }

                let classificacao =
                    pontos >= 20 ? "Lenda das Quadras" :
                    pontos >= 10 ? "Craque" :
                    "Novato"

                let situacao = acertos >= 1
                    ? "Você marcou pontos no desafio!"
                    : "Você precisa treinar mais!"

                console.log(`
=== RESULTADO FINAL ===
Jogador: ${nome}
Acertos: ${acertos}
Pontuação: ${pontos}
Vidas restantes: ${vidas}
Classificação: ${classificacao}
${situacao}
`)
            }

            break
        }

        case 2:
            console.log(`
=== REGRAS ===
Cada resposta correta vale 10 pontos.
Você começa com 3 vidas.
Cada resposta errada custa uma vida.
`)
            break

        case 3:
            console.log(`Até a próxima, ${nome}!`)
            continuar = "n"
            break

        default:
            console.log("Opção inválida!")
            break
    }

    if (continuar === "s") {
        continuar = prompt("Deseja voltar ao menu? (s/n): ").toLowerCase()
    }

} while (continuar === "s")

console.log(`\nObrigado por jogar, ${nome}!`)
