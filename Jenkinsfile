pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/mir-abdullah/BookStore--MERN.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build('sample-app')
                }
            }
        }
        stage('Run Application') {
            steps {
                script {
                    docker.image('sample-app').run('-p 3000:3000')
                }
            }
        }
    }
}
