ARG FROM_REPO=
FROM ${FROM_REPO}
MAINTAINER Piero Toffanin <pt@masseranolabs.com>

EXPOSE 3000

USER root

RUN mkdir /var/www

WORKDIR "/var/www"
COPY . /var/www

RUN bash install_deps.sh && \
    ln -s /code/SuperBuild/install/bin/untwine /usr/bin/untwine && \
    ln -s /code/SuperBuild/install/bin/entwine /usr/bin/entwine && \
    ln -s /code/SuperBuild/install/bin/pdal /usr/bin/pdal && \
    npm install --production && mkdir -p tmp && node index.js --powercycle

ENTRYPOINT ["/usr/bin/node", "/var/www/index.js"]
