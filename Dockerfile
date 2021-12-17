#STAGE 1 - Initial build image
FROM node:16-alpine AS build
WORKDIR /app/client

# Copy and install dependencies
COPY client/package.json ./
COPY package-lock.json ./
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install --production

# copy remaining source files
COPY . .

# build and minify code
RUN npm run build

# ---------------------------------------------------------------------------- #
# STAGE 2 - setup minified directory layout
FROM node:16-alpine AS stage-two

# copy over app source code
COPY --from=build /app/ /app
WORKDIR /app/client

# remove unnecessary files and directories
RUN ls | grep -v "package-lock.json\|package.json\|build" | xargs rm -rf 

# ---------------------------------------------------------------------------- #
# STAGE 3 - Final image build
FROM node:16-alpine

# copy minified source code
WORKDIR /app
COPY --from=stage-two /app/ .

EXPOSE 3001
CMD ["npm", "run", "start"]