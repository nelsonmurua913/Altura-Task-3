import chalk from "chalk";

export default class logger {
  // public static log = (args:any)=> this.info(args);
  public static log = (args: any): any => this.info(args);
  public static info = (args: any): any =>
    console.log(
      chalk.blue(`[${new Date().toLocaleString()}][INFO]`),
      typeof args === "string" ? chalk.blueBright(args) : args
    );

  public static warn = (args: any): any =>
    console.log(
      chalk.yellow(`[${new Date().toLocaleString()}][WARN]`),
      typeof args === "string" ? chalk.yellowBright(args) : args
    );

  public static error = (args: any): any =>
    console.log(
      chalk.red(`[${new Date().toLocaleString()}][ERROR]`),
      typeof args === "string" ? chalk.redBright(args) : args
    );
}
