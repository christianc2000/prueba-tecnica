# Usa la imagen de Node.js como base
FROM node:alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Construye la aplicación
RUN npm run build

# Exponer el puerto 3000
EXPOSE 3000

# Define el comando para ejecutar la aplicación
CMD ["npm", "start"]
