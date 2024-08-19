# Using official Node.js runtime as image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the project files (?)
COPY . .

#expose the port Vite uses
EXPOSE 5173

# Start the Vite development server
CMD ["npm", "run", "dev", "--", "--host"]