FROM node:14.17.0-slim

WORKDIR /usr/src/app

RUN apt update && \
    apt install -y wget netcat && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for

COPY . .

RUN sed -i 's/\r$//' ./start.sh  && \  
    chmod +x ./start.sh

CMD ["node","index.js"]