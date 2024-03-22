# Node version
FROM node:18

# directory for repo
WORKDIR /retroPortfolio

# Copy everything from root to /retroPortfolio directory in container
COPY . .

# Install dependencies from package.json
RUN npm install

# Build your Next.js application
RUN npm run build

# Expose the port 3000
EXPOSE 3000

# run npm 
CMD ["npm", "start"]


# ****** Dockerfile instructions ******
# docker build -t nextjs-retroportfolio-docker .
# docker run -p 3000:3000 nextjs-retroportfolio-docker
