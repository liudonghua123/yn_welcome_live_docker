FROM node

MAINTAINER liudonghua123 <liudonghua123@gmail.com>

# install some required packages
RUN apt-get update
RUN apt-get install -y libaio1

# install and config oracle instant client
ADD instantclient.tgz /opt/oracle/
ENV LD_LIBRARY_PATH /opt/oracle/instantclient:$LD_LIBRARY_PATH
ENV OCI_LIB_DIR /opt/oracle/instantclient
ENV OCI_INC_DIR /opt/oracle/instantclient/sdk/include

# add the code to /app
ADD app /app
# change work directory
WORKDIR /app
# install the dependencies of the node application
RUN npm install

# main entry point
CMD node main.js

EXPOSE 9000
