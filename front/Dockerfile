FROM node:12-alpine
# RUN npm install -g yarn
WORKDIR /dist/front
RUN mkdir -p /dist/front
COPY package.json /dist/front
COPY yarn.lock /dist/front
RUN yarn
COPY . /dist/front
CMD ["yarn", "start"]

