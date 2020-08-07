FROM node:10 as builder

WORKDIR /app
COPY package*.json src/public ./
RUN npm install
COPY . .
RUN npm run build

FROM node:10
WORKDIR /app
COPY package*.json ./
RUN npm install

COPY --from=builder /app/dist ./dist
CMD node dist/index.js