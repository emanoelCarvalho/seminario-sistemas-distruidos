#!/bin/bash

# Iniciar o servidor backend (Express)
echo "Starting the server backend..."
cd /home/ehcs/Documentos/seminario-sistemas-distruidos/api/src/  
npm install  
npm start &  

# Iniciar o servidor frontend (usando PHP)
echo "Starting the client frontend..."
cd /home/ehcs/Documentos/seminario-sistemas-distruidos/client/  
php -S localhost:8000 & 
echo "Server started!"

wait 