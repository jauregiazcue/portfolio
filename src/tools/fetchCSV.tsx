
import Papa from "papaparse";

export default async function fetchCSV<T>(csvFile: string, setObject: React.Dispatch<React.SetStateAction<T[]>>) {
  const response = await fetch(csvFile);
  const reader = response.body?.getReader();
  const result = await reader?.read();
  const decoder = new TextDecoder('utf-8');
  const csv = await decoder.decode(result?.value);
  const results: Papa.ParseResult<T> = Papa.parse(csv, { header: true, skipEmptyLines: true });
  setObject(results.data);
}

