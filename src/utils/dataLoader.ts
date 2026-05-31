import * as XLSX from 'xlsx';
import { parse } from 'csv-parse/sync';
import fs from 'fs';

export function loadExcel(filePath: string) {
  const workbook = XLSX.readFile(filePath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  return XLSX.utils.sheet_to_json(sheet);
}

export function loadCSV(filePath: string) {
  const content = fs.readFileSync(filePath);
  return parse(content, { columns: true });
}