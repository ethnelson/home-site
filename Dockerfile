#STAGE 1 - Initial build image
FROM node:16-alpine AS build
WORKDIR /app/client

# Copy and install dependencies
COPY client/package.json ./
COPY client/package-lock.json ./
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install --production

# copy remaining source files
COPY . .

# build and minify code
RUN npm run build
# remove client directory
RUN rm -rf client
# ---------------------------------------------------------------------------- #
# STAGE 3 - Final image build
FROM node:16-alpine

# copy minified source code
WORKDIR /app
COPY --from=build /app/ .

EXPOSE 3001
CMD ["npm", "run", "start"]