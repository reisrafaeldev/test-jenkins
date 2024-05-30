pipeline {
    agent any
     tools { 
        nodejs "node 18.20.3" 
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], userRemoteConfigs: [[url: 'https://github.com/reisrafaeldev/test-jenkins.git']]])
            }
        }
        
        stage('Build') {
            steps {
                bat "node -v"
                bat 'npm install'
                bat 'npm run build'
            }
        }
        
        stage('Run Unit Tests') {
            steps {
                bat 'npm run test'
            }
        }
    }
}