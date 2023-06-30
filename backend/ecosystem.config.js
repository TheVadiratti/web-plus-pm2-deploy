require('dotenv').config({ path: '.env.deploy' });

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF = 'origin/master',
} = process.env;

module.exports = {
  apps: [{
    name: 'mesto-backend',
    script: 'dist/app.js',
  }],
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: 'git@github.com:TheVadiratti/web-plus-pm2-deploy.git',
      path: DEPLOY_PATH,
      'pre-deploy-local': `scp ./.env ./.env.deploy ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}`,
      'post-deploy': `cd ${DEPLOY_PATH}/current && npm install && npm run build && pm2 start dist/app.js`,
    },
  },
};
