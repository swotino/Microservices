pipeline {
    agent any
    
    environment {
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
                sh 'mvn -f SpringRest/pom.xml clean'
                sh 'mvn -f SpringRest/pom.xml install -DskipTest'
            }
        }
        
        stage('Test') {
            steps {
                sh 'mvn -f SpringRest/pom.xml test'
                sh 'mvn -f SpringRest/pom.xml checkstyle:checkstyle'
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
            }
        }
        
        stage('Quality Gate') {
            steps {
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
                    archiveArtifacts artifacts: 'SpringRest/target/*.jar'
                }
            }
        }

        stage('Upload to Nexus') {

            steps {
                nexusArtifactUploader {
                    nexusVersion: 'nexus3',
                    protocol: 'http',
                    nexusUrl: 'http://192.168.10.102:8081',
                    groupId: 'QA',
                    version: "${env.BUILD_ID}-${env.BUILD_TIMESTAMP}",
                    repository: 'jenkins-springrest',
                    credentials: 'nexus-login'
                    artifacts: [
                        [ artifactId: 'springrest', classifier: '', file: 'SpringRest/target/SpringRest-0.0.1-SNAPSHOT.jar', type: 'jar' ]
                    ]
                }
            }
        }
    }
}