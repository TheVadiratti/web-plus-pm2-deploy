require('dotenv').config({ path: '.env.deploy' });

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF = 'origin/master',
} = process.env;

module.exports = {
  apps: [{
    name: 'mesto-frontend',
    script: 'app.js',
  }],
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: 'git@github.com:TheVadiratti/web-plus-pm2-deploy.git',
      path: DEPLOY_PATH,
      'post-deploy': `cd ${DEPLOY_PATH}/current/frontend && npm install && npm run build`,
    },
  },
};
