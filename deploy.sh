#!/bin/bash                                       
echo "🚀 Iniciando Deploy..."                                                                       # 1. Força a limpeza de qualquer mudança local (e>
git fetch --all                                   git reset --hard origin/main
                                                  # 2. Instala novas dependências (caso você tenha >npm install

# 3. Reinicia o bot no PM2
# Se for a primeira vez, ele inicia. Se já estive>
pm2 restart winder-bot || pm2 start index.js --na>

echo "✅ Deploy finalizado com sucesso!"