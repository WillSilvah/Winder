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
