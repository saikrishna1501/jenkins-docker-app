pipeline {
    agent any
    stages {
        stage('test') {
            steps {
                withAWS(credentials: 'aws-credentials', region: 'us-east-1') {
                    sh 'aws s3 ls'
                }
            }
        }
    }
}