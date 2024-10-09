// Import RowID and RowElement from the interface.ts
import { RowID, RowElement } from '../src/interface';

// Declare the type definitions for the crud.js functions
declare module './crud' {
  export function insertRow(row: RowElement): RowID;
  export function deleteRow(rowId: RowID): void;
  export function updateRow(rowId: RowID, row: RowElement): RowID;
}
