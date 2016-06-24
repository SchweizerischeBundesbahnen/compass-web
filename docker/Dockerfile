# Dockerfile for ESTA WebJS
FROM registry.sbb.ch/kd_esta/nginx-openshift-base:0.0.11
MAINTAINER Reto Lehmann <reto.lehmann@sbb.ch>

ENV ARTIFACT_GROUPID ch.sbb
ENV REPO_ID snapshots
ENV ARTIFACT_ID compass-web
ENV ARTIFACT_VERSION LATEST
ENV ARTIFACT_URL http://repo.sbb.ch/service/local/artifact/maven/content?r=${REPO_ID}&g=${ARTIFACT_GROUPID}&a=${ARTIFACT_ID}&v=LATEST

RUN curl $ARTIFACT_URL -o ${ARTIFACT_ID}-${ARTIFACT_VERSION}.tar.gz

# Extract and move to nginx html folder
RUN tar -xzf ${ARTIFACT_ID}-${ARTIFACT_VERSION}.tar.gz
RUN mv build/* /usr/share/nginx/html

# Start nginx via script, which replaces static urls with environment variables
ADD start.sh /usr/share/nginx/start.sh
RUN chmod +x /usr/share/nginx/start.sh

CMD /usr/share/nginx/start.sh

