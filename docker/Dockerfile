# Dockerfile for Compass Web
FROM nginx:alpine
MAINTAINER Igor Masen <igor.masen@sbb.ch>

ENV ARTIFACT_GROUPID ch.sbb
ENV REPO_ID hosted.mwe-wzu.snapshots
ENV ARTIFACT_ID compass-web
ENV ARTIFACT_VERSION LATEST
ENV ARTIFACT_URL http://repo.sbb.ch/service/local/artifact/maven/content?r=${REPO_ID}&g=${ARTIFACT_GROUPID}&a=${ARTIFACT_ID}&v=LATEST&p=tar.gz
ENV BACKEND_URL http://localhost:8080

# Install curl
RUN apk add --update curl && \
        rm -rf /var/cache/apk/*

# Get the app
RUN curl $ARTIFACT_URL -o ${ARTIFACT_ID}-${ARTIFACT_VERSION}.tar.gz

# Extract and move to nginx html folder
RUN tar -xzf ${ARTIFACT_ID}-${ARTIFACT_VERSION}.tar.gz
RUN mv build/* /usr/share/nginx/html

CMD sed -i "s#http://localhost:8080#${BACKEND_URL}#g" /usr/share/nginx/html/app.*.js && nginx -g 'daemon off;'