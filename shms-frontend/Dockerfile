FROM node:22.12.0 AS build
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy app source code and build it
COPY . .
RUN npm run build --prod


# Stage 2: Serve Angular app with Nginx
FROM nginx:alpine

# Copy built Angular files to nginx's default public directory
COPY --from=build /app/dist/shms-frontend/browser /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]

