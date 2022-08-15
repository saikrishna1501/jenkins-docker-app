pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                withAWS(credentials: 'aws-credentials', region: 'us-east-1') {
                    sh 'aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 711439543033.dkr.ecr.us-east-1.amazonaws.com'
                    sh 'docker build -t mywebapp .'
                    sh 'docker tag mywebapp:latest 711439543033.dkr.ecr.us-east-1.amazonaws.com/mywebapp:latest'
                    sh 'docker push 711439543033.dkr.ecr.us-east-1.amazonaws.com/mywebapp:latest'
                }
            }
        }
    }
}