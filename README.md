# A Gente Vai de Turma — A Lenda do Dragão 🐉

Gincana em formato de RPG para a reunião da gerência, abordando o pilar
**"A Gente Vai de Turma"** (trabalho em grupo, confiança, colaboração e
pedir/dar ajuda).

## Como funciona

- **5 equipes**, cada uma controla um herói: Bardo Anão, Arqueiro Elfo,
  Mago Ancião, Bárbaro Orc e Paladino Humano.
- O jogo roda em **um único PC** (o do apresentador); as equipes assistem
  na tela e decidem juntas.
- São **3 rodadas**. Em cada rodada, cada equipe enfrenta **uma decisão**
  com 3 opções — apenas uma está alinhada ao pilar.
  - Rodada 1 → ação 1 de todas as equipes
  - Rodada 2 → ação 2 de todas as equipes
  - Rodada 3 → ação 3 de todas as equipes
- Cada acerto vale **20 Pontos de Heroísmo**. Há um cronômetro de discussão
  (apenas guia; o apresentador clica quando a equipe decide).
- Total possível: **300 pontos**. Para **derrotar o Dragão** na batalha
  final, a turma precisa somar **pelo menos 200**.

## Como usar na apresentação

1. Abra o arquivo `index.html` em um navegador (Chrome/Edge/Firefox).
2. Clique no botão **⛶** (canto superior direito) para entrar em **tela cheia**.
3. Conduza pelas telas com os botões. Dê tempo para as equipes discutirem,
   depois clique na opção escolhida por cada equipe.

> Não requer internet nem instalação (as fontes vêm do Google Fonts; se
> estiver offline, o jogo funciona com fontes padrão do sistema).

## Estrutura

```
index.html          # estrutura e telas
css/styles.css      # visual, animações, responsivo, tela cheia
js/data.js          # personagens, cenários e configurações (fácil de editar)
js/characters.js    # pixel art (SVG gerado a partir de mapas de grade)
js/game.js          # lógica do jogo / máquina de estados
assets/itau-logo.svg
```

### Ajustes rápidos

Tudo que normalmente se quer mudar está em `js/data.js`:
- `CONFIG.limiteParaVencer` — meta para derrotar o Dragão (padrão 200)
- `CONFIG.pontosPorAcerto` — pontos por acerto (padrão 20)
- `CONFIG.tempoDiscussao` — segundos do cronômetro (padrão 60)
- `CENARIOS` — textos das situações, opções e feedbacks
