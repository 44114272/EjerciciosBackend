import { Command } from "commander";

const program = new Command();

program.option('-d', 'Variable para debug', false)
    .option('-p <port>', 'Puerto servidor', 8080)
    .option('--mode <mode>', 'Modo de trabajo', 'production')
    .requiredOption('-u <user>', 'Usuario del sistema')

program.parse();

console.log('Options: ', program.opts());
console.log('Arguments: ', program.args);