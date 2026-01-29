FROM node:20-alpine

WORKDIR /app

# Install OpenSSL
RUN apk add --no-cache openssl

COPY package*.json ./
RUN npm install

COPY . .
RUN npx prisma generate  # Add this line!
RUN npm run build

EXPOSE 4004
CMD ["npm", "start"]