
FROM node:14.18.1 AS builder

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

FROM nginx:1.21.4-alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/dist/space-web .

EXPOSE 80/tcp

ENTRYPOINT ["nginx", "-g", "daemon off;"]
