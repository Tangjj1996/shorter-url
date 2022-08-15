FROM node:14-alpine

ADD ./ /app

RUN npm install -g pnpm

RUN npm install pm2 -g

RUN cd /app && pnpm install

RUN cd /app && pnpm build


EXPOSE 3001

CMD ["pm2-runtime", "process.json"]