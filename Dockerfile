FROM node:alpine
COPY . .
RUN npm run build