def COLOR_MAP = [ 'SUCCESS': 'good', 'FAILURE': 'danger' ]

pipeline {
    agent any

    tools {
        maven "Maven3"
    }
    
    environment {
        NEXUS_CREDENTIAL = 'nexuslogin'
        NEXUS_URL = '192.168.10.102'
        NEXUS_PORT = '8081'
        NEXUS_SNAPSHOT = 'jenkins-springrest-snapshot'
        NEXUS_RELEASE = 'jenkins-springrest'
        NEXUS_CENTRAL = 'jenkins-nexus-central'
        NEXUS_GROUP = 'jenkins-nexus-group'
        SONAR_SERVER = 'SonarQube Server'
        SONAR_SCANNER = 'SonarQubeScanner'
    }
    
    stages {
        
        stage('Fetch') {
            steps {
                git branch: '2.SpringRest', url: 'https://github.com/swotino/Microservices.git', credentialsId: 'GitHub Jenkins'
            }
        }
        
        stage('Build') {
            steps {
                sh 'mvn -s SpringRest/settings.xml -f SpringRest/pom.xml clean install -DskipTests'
            }
        }
        
        stage('Test') {
            steps {
                sh 'mvn -s SpringRest/settings.xml -f SpringRest/pom.xml verify -DskipTests'
                sh 'mvn -s SpringRest/settings.xml -f SpringRest/pom.xml checkstyle:checkstyle'
            }
        }
        
        stage('SonarQube Analysis') {
            environment { 
                scannerHome = tool "${SONAR_SCANNER}"
            }
            steps {
                withSonarQubeEnv("${SONAR_SERVER}") {
                    sh '''${scannerHome}/bin/sonar-scanner  \
                    -Dsonar.projectKey=SpringRest  \
                    -Dsonar.projectName=SpringRest \
                    -Dsonar.projectVersion=1.0 \
                    -Dsonar.sources=SpringRest/src/ \
                    -Dsonar.java.binaries=SpringRest/target/test-classes/com/microservices/rest/springrest/ \
                    -Dsonar.java.checkstyle.reportPaths=SpringRest/target/checkstyle-result.xml'''
                }

                timeout(time: 1, unit: 'HOURS') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }
        
        stage('Artifact') {
            
            steps {
                sh 'mkdir -p versions'
                sh "cp SpringRest/target/SpringRest-0.0.1-SNAPSHOT.jar versions/springrest-v${env.BUILD_ID}.jar"
            }
            
            post {
                success {
                    echo "Archiving artifact"
                    archiveArtifacts artifacts: 'versions/*.jar'
                }
            }
        }

        stage('Upload to Nexus') {

            steps {
                nexusArtifactUploader (
                    nexusVersion: 'nexus3',
                    protocol: 'http',
                    nexusUrl: "${NEXUS_URL}:${NEXUS_PORT}",
                    groupId: NEXUS_GROUP,
                    version: "${env.BUILD_ID}_${env.BUILD_TIMESTAMP}",
                    repository: NEXUS_RELEASE,
                    credentialsId: NEXUS_CREDENTIAL,
                    artifacts: [
                        [ artifactId: 'springrest', classifier: '', file: 'SpringRest/target/SpringRest-0.0.1-SNAPSHOT.jar', type: 'jar' ]
                    ]
                )
            }
        }
    }

    post {
        always {
            echo "Slack Notifications"
            slackSend channel: '#springrest', color: COLOR_MAP[currentBuild.currentResult],
                message: "* ${currentBuild.currentResult}: * Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}.\n More info at: ${env.BUILD_URL}"

        }
    }
}