import * as cp from 'child_process';

export function exec(command: string) : Promise<Standard> {
  return new Promise((resolve, reject) => {
    cp.exec(command, (error, stdout, stderr) => {
      if (error) {
        return reject(error);
      }

      resolve(new Standard(stdout, stderr));
    });
  });
}

export function execFile(file: string, options?: string[]) : Promise<Standard> {
  return new Promise((resolve, reject) => {
    cp.execFile(file, options, (error, stdout, stderr) => {
      if (error) {
        return reject(error);
      }

      resolve(new Standard(stdout, stderr));
    });
  });
}

export class Standard {
  constructor(public out: string, public err: string) {}
}
