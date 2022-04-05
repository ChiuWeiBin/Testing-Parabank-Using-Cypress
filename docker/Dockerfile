
# use Cypress provided image with all dependencies included
FROM cypress/included:9.5.3 
RUN node --version
RUN npm --version

USER root

# Install OpenJDK-11
RUN apt-get update && \
  apt-get install -y openjdk-11-jdk && \
  apt-get install -y ant && \
  apt-get clean;

# Fix certificate issues
RUN apt-get update && \
  apt-get install ca-certificates-java && \
  apt-get clean && \
  update-ca-certificates -f;

# Setup JAVA_HOME -- useful for docker commandline
ENV JAVA_HOME /usr/lib/jvm/java-11-openjdk-amd64/
RUN export JAVA_HOME
RUN java -version


WORKDIR /home/node/app

# avoid many lines of progress bars during install
ENV CI=1

ENV HOME=/tmp
