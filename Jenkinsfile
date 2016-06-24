node {
  stage 'Build'
  checkout scm
  def mvnHome = tool 'M3'
  sh "${mvnHome}/bin/mvn -B -f pom.xml clean deploy"
  build: 'docker-compass-web'
}