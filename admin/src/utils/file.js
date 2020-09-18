export const readLocalFile = (file) => {
  const CsvParser = require("csv-parse/lib/sync");
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onload = (event) => {
      let result = event.target.result;
      if (file.type === 'application/json') {
        result = JSON.parse(result);
      } else if (file.type === 'text/csv') {
        result = CsvParser(result, { columns: true })
      }

      resolve(result);
    };
    reader.onerror = reject;
    reader.readAsText(file)
  });
};
