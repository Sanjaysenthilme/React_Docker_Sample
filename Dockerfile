# FROM node:15.13-alpine

# WORKDIR /sample

# ENV PATH="./node_modules/.bin:$PATH"

# COPY . .

# RUN npm run build
# CMD ["npm","start"]


FROM node:alpine
WORKDIR '/app'

COPY package.json .
RUN npm install 


COPY . .
CMD [ "npm","start" ]
