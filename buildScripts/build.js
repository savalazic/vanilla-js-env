/* eslint-disable */
import webpack from 'webpack';
import chalk from 'chalk';
import config from './webpack.config.prod';

process.env.NODE_ENV = 'production';
console.log(chalk.blue('Generating minified bundle for production'));

webpack(config).run((err, stats) => {
  if (err) {
    console.log(chalk.red(err));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.forEach(error => console.log(chalk.red(error)));
  }

  if (jsonStats.hasWarning) {
    console.log(chalk.yellow('Webpack generated the following warnings'));
    jsonStats.warnings.forEach(warning => console.log(chalk.yellow(warning)));
  }

  console.log(chalk.cyan(`Webpack stats ${stats}`));

  console.log(
    chalk.green(
      `Your app has been built for production and written to ${
        config.output.path
      }`,
    ),
  );

  return 0;
});
