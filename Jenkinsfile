pipeline {
    agent any
     tools { 
        nodejs "v18.20.3"  
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], userRemoteConfigs: [[url: 'https://github.com/reisrafaeldev/test-jenkins.git']]])
            }
        }
        
        stage('Build') {
            steps {
                sh "node -v"
                sh 'npm install'
                sh 'npm run build'
            }
        }
        
        stage('Run Unit Tests') {
            steps {
                sh 'npm run test'
            }
        }
    }
}
