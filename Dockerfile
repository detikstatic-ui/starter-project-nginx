# Stage 1: Build the Static app
FROM node:20.11-alpine3.18 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
# Stage 2: Create the production image
FROM nginx:latest AS production
COPY --from=builder /app/dist /usr/share/nginx/html/starter-project
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]