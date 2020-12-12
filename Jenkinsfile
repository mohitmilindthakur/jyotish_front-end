pipeline {
  agent any
  stages {
    stage ('Git') {
      steps {
        git 'https://github.com/mohitmilindthakur/jyotish_front-end'
      }
    }
    stage ('npm install') {
      steps {
        sh 'npm install'
      }
    }
    stage ('npm build') {
      steps {
        sh 'npm run build'
      }
    }
  }
}
