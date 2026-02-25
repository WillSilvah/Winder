## 🐱 Um simples gato laranja!

Meow! :3 Muito prazer, me chamo **Winder Windvane** (ou Wind para os íntimos 🤭). Sou o mascote da comunidade Patinhas, responsável por várias funcionalidades únicas e otimizadas.

O criador [WillSilvah](https://github.com/WillSilvah) deixou meu código aberto, então sinta-se à vontade para me ver por dentro. Sou desenvolvido utilizando [ForgeScript](https://docs.botforge.org/), substituindo o antigo Aoi.js.

---

## 📚 DOCUMENTAÇÃO

### 🛠️ AUTO HOSPEDAGEM
Eu não garanto o funcionamento perfeito em outros servidores, mas atente-se a estes pontos:

* **Sistema Operacional:** Deve ser **obrigatoriamente** Linux (Debian, Ubuntu, etc).
* **Configuração:** Altere as variáveis no arquivo `index.js` para as definições do seu servidor.
* **Suporte:** O desenvolvedor não oferece suporte para auto hospedagem, exceto para contribuições no desenvolvimento do Winder original.

---

### 💻 FUNÇÕES CUSTOMIZADAS
**Localizadas em:** `comandos/custom/`

#### `$punishmentlog[userID;staffID;reason;type]`
Envia uma mensagem no canal de log de punições.
- **userID:** Usuário punido.
- **staffID:** Moderador que aplicou a punição.
- **reason:** Motivo da punição.
- **type:** Tipo da punição (Ex: Banido, Silenciado, Avisado, Expulso).

#### `$sendDMPunishment[userID;staffID;reason;type]`
Envia o motivo da punição diretamente na DM do membro.
- **userID:** Usuário punido.
- **staffID:** Moderador que aplicou a punição.
- **reason:** Motivo da punição.
- **type:** Tipo da punição.

#### `$advancedTimeout[$esc[code];time;id;...data?]`
Uma versão avançada do `$setTimeout` que permite que continua funcionando mesmo após a reinicialização do bot e leva em consideração o tempo perdido.

- **código** - O código a ser executado.
- **tempo** - Quanto tempo esperar antes de executar este código.
- **id** - Um identificador único para este timeout.
- **...dados?** - Os dados a serem incluídos no código (opcional).

> $stopAdvancedTimeout[id] serve para parar o timeout avançado.

#### Explicação

Como podemos ver, a função `$esc[]` é usada dentro do primeiro argumento. Por quê? Funções personalizadas não podem atrasar a execução de funções passadas como argumentos. Todas as funções dentro dos argumentos são executadas imediatamente. A única maneira de "congelá-las" é usar a função `$esc[]`, que impede a execução das funções e permite salvá-las.
Sobre o argumento de dados adicional. O principal problema com o uso dessa função personalizada é que ela não consegue armazenar certos dados no código após uma reinicialização, incluindo: `$authorID`, `$channelID`, `$guildID`, `$get[]`, `$env[]` e outras funções que dependem de eventos ou qualquer outra coisa. Portanto, devemos substituir todas essas funções por marcadores (placeholders).

```js
$advancedTimeout[$esc[
  $sendMessage[{0};Hi]
];10s;hi_timeout;$channelID]
```
> Como podemos ver, usamos o marcador de posição {0}. 0 é o índice e os dados que incluímos são $channelID. Portanto, substituímos {0} por $channelID. Podemos incluir quantos dados quisermos.

Resumindo:

- {0} → primeiro valor de ...data
- {1} → segundo valor
e assim por diante

#### E se você ainda quiser declarar uma variável temporária? Vejamos:

```js
$let[num;67]

$advancedTimeout[$esc[
  $let[num;{0}]
  $sendMessage[{1};The number is: $get[num]]
];10s;hi_timeout;$get[num];$channelID]
```
- {0} → $get[num] (67), porque é o primeiro valor e tem índice 0
- {1} → $channelID, porque é o segundo valor e tem índice 1
> Também funciona com **$env[]**.

```js
$let[text;aa
bb
cc]

$advancedTimeout[$esc[
  $sendMessage[{1};{0}]
];10s;hi_timeout;$get[text];$channelID]
```
Os {Placeholders} podem ser usados ​​um número ilimitado de vezes, mas devem aparecer em ordem, da esquerda para a direita, como nos exemplos acima.
