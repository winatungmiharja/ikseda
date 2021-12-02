// !STARTERCONF Change the siteUrl
module.exports = {
  siteUrl: 'https://ikseda.vercel.app/',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
