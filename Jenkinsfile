pipeline {
  agent any
  stages {
    stage ('Git') {
      git 'https://github.com/mohitmilindthakur/jyotish_front-end'
    }
    stage ('npm install') {
      sh 'npm install'
    }
    stage ('npm build') {
      sh 'npm run build'
    }
  }
}
