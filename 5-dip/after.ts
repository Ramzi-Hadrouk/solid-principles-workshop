interface DataWriter {
  write(data: string): void;
}

//------------
class FileWriter implements DataWriter {
  write(data: string): void {
    console.log("Writing to file:", data);
  }
}


//------------ 
class ReportGenerator {
  private writer: DataWriter;

  constructor(writer: DataWriter) {
    this.writer = writer;
  }

  saveReport(reportData: string): void {
    this.writer.write(reportData);
  }
}

//-------------- 
const fileWriter = new FileWriter();
const reportToFile = new ReportGenerator(fileWriter);
reportToFile.saveReport("File report");










//======================================================
/*

class DatabaseWriter implements DataWriter {
  write(data: string): void {
    console.log("Writing to database:", data);
  }
}

const dbWriter = new DatabaseWriter();
const reportToDb = new ReportGenerator(dbWriter);
reportToDb.saveReport("Database report");
*/
//====================================================

