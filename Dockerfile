FROM node:18-alpine
WORKDIR /home/node/app
COPY --chown=node:node . .
RUN yarn install --immutable --immutable-cache --check-cache --production=true

EXPOSE 3000
RUN yarn run build

# remove development dependencies
RUN npm prune --omit=dev

ENTRYPOINT ["yarn", "run", "serve"]
