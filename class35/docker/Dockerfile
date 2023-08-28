# Primero definir imagen a tomar de base
FROM node:16.17.1-alpine3.16

# Definir directorio de trabajo
WORKDIR /app

# Copiamos package.json
COPY package*.json ./

# Instalamos las dependencias en el contenedor
RUN npm install

# Copiamos el resto de archivos(nuestro código)
COPY . .

# De mi contenedor quiero exponer puerto 8080 para conectarme a mi app desde mi pc o otros contenedores
EXPOSE 8080

# Comando a ejecutar cuando se inicialize el contenedor
CMD [ "npm", "start" ]