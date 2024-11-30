# Use the official Node.js 14 image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install frontend dependencies
RUN npm install

# Copy the entire frontend source code to the container
COPY . .

# Build the frontend for production
RUN npm run build

# Use Nginx to serve the frontend build
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

# Expose the port Nginx will run on (adjust if not 80)
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

