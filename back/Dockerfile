FROM node:12-alpine
# RUN npm install -g yarn
WORKDIR /dist/back
RUN mkdir -p /dist/back
COPY package.json /dist/back
COPY yarn.lock /dist/back
RUN yarn
COPY . /dist/back
CMD ["yarn", "start"]

