FROM node:12.15.0-slim
LABEL maintainer="Ajay Nair"

LABEL version="8.0.0"
LABEL description="Docker file for SCC Broker Server"

RUN mkdir -p /usr/src/
WORKDIR /usr/src/
COPY . /usr/src/

RUN npm install .
# RUN sed -i 's/\r$//' ./start.sh && \  
#         chmod +x ./start.sh
RUN node ./startup.js
# EXPOSE 8888


CMD ["npm", "start"]
# CMD ['sh', "./start.sh"]

# CMD ["ls"]
