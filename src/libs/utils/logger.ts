// import {  }

export enum LoggerType {
  Console,
  File
};

export class Logger {
  private mType: LoggerType;
  constructor(type: LoggerType) {
    this.mType = type;
  }

  
}
