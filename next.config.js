const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: 'blog-admin',
        mongodb_password: 'CPoxeVvGNaR38WoV',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'next-blog',
      },
    };
  }

  return {
    reactStrictMode: true,
    env: {
      mongodb_username: 'blog-admin',
      mongodb_password: 'CPoxeVvGNaR38WoV',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'next-blog-prod',
    },
  };
};
