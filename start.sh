#!/bin/bash

# Iniciar o servidor backend (Express)
echo "Starting the server backend..."
cd /home/ehcs/Documentos/seminario-sistemas-distruidos/api/src/  # Substitua pelo diretório correto onde está o package.json do seu backend
npm install  # (opcional) se necessário instalar as dependências
npm start &  # Executa o servidor Express em segundo plano

# Iniciar o servidor frontend (usando PHP)
echo "Starting the client frontend..."
cd /home/ehcs/Documentos/seminario-sistemas-distruidos/client/  # Substitua pelo diretório onde está o index.html
php -S localhost:8000 &  # Inicia um servidor PHP simples para servir o frontend

echo "Server started!"

# Manter o script ativo
wait  # Isso mantém o script ativo até que os processos sejam encerrados
