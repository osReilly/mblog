module.exports = {
  apps : [{
    name: 'mblog',
    script: './bin/www',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'root',
      host : '47.107.171.82',
      ref  : 'origin/master',
      repo : 'git@github.com:osReilly/mblog.git',
      path : '/opt/work',
      'post-deploy' : 'git pull origin master && npm install && pm2 startOrRestart ecosystem.config.js --env production'
    }
  }
};
