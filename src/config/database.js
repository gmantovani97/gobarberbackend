module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  port: 25432,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
