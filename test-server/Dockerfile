FROM node:alpine

LABEL maintainer="Ajay Nair"
LABEL version="16.0.3"
LABEL description="Docker file for SocketCluster with support for clustering."

RUN mkdir -p /usr/src/
WORKDIR /usr/src/
COPY . /usr/src/

RUN npm install .
# RUN sed -i 's/\r$//' ./start.sh && \  
#         chmod +x ./start.sh
RUN node ./startup.js

# EXPOSE 19000-24000
# EXPOSE 8000

# CMD ["npm", "run", "start:docker"]
CMD ["node","./dist/server.js"]
# CMD ['sh', "./start.sh"]
# CMD ["ls"]

