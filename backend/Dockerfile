# Use the official Node.js 14 image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Copy the entire backend source code to the container
COPY . .

# Expose the backend application port (adjust if not 5000)
EXPOSE 5000

# Start the backend server
CMD ["npm", "start"]
