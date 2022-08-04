# base image (all dockerfiles should have this)
FROM node:alpine
 
# set working directory
WORKDIR /backend
 
### install and cache app dependencies
 
# copy package.json & package-lock.json to ./ inside the Docker image
COPY ./backend/package*.json ./
 
# install dependencies of the app
RUN npm install
 
# copy the source code to the Docker image
COPY ./backend .
 
# expose the port where the app will listen to
EXPOSE 19093
 
# start the server
# CMD ["npm", "start"]