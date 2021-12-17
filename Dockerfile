FROM node:alpine as build
COPY . .
RUN npm install
RUN npm run build
CMD ["npm", "run", "start"]
