class FileWriter {
  write(data: string): void {
    console.log("Writing to file:", data);
  }
}

class ReportGenerator {
  private writer: FileWriter;

  constructor() {
    this.writer = new FileWriter();
  }
saveReport(reportData: string): void {
    this.writer.write(reportData); 
  }
}


let report :ReportGenerator =new ReportGenerator() ;
report.saveReport('md5 : sldslfknsdfksdfkdsnf')
