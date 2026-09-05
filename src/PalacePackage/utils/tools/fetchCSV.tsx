
import Papa from "papaparse";
import readXlsxFile from "read-excel-file/browser";
import type { FetchPayload, EXELFetchPayload } from "@/PalacePackage/utils/interfaces/payload";


export async function fetchCSV<T>(payload: FetchPayload<T>) {
  const { file, setObject } = payload;
  const response = await fetch(file);
  const reader = response.body?.getReader();
  const result = await reader?.read();
  const decoder = new TextDecoder('utf-8');
  const csv = decoder.decode(result?.value);
  const results: Papa.ParseResult<T> = Papa.parse(csv, { header: true, skipEmptyLines: true });
  setObject(results.data);
}

export async function fetchEXCEL<T>(payload: EXELFetchPayload<T>) {
  const { file, setObject, excelToObjectPayload } = payload;
  const response = await fetch(file);
  const blob = await response.blob();
  const rows = await (readXlsxFile)(blob);
  const { objectPayload } = excelToObjectPayload<T>(rows);
  setObject(objectPayload);
}