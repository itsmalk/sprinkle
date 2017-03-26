FROM node:7.7-alpine

RUN addgroup -S app && adduser -S -g app app 

ENV PATH /root/.yarn/bin:$PATH

RUN apk update \
  && apk add curl bash binutils tar \
  && rm -rf /var/cache/apk/* \
  && /bin/bash \
  && touch ~/.bashrc \
  && curl -o- -L https://yarnpkg.com/install.sh | bash \
  && apk del curl tar binutils

RUN npm install nodemon -g

ENV HOME=/home/app

USER root
RUN chown -R app:app $HOME
RUN apk --no-cache add curl
RUN chown -R app:app /bin
USER app
