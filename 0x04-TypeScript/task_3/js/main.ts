/// <reference path="../js/crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from '../js/crud';

// Step 1: Create an object of type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Step 2: Insert a new row and save the RowID
const newRowID: RowID = CRUD.insertRow(row);
console.log(`Inserted row with ID: ${newRowID}`);

// Step 3: Create an updated row with the age field
const updatedRow: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 23
};

// Step 4: Update the row with the new age field
CRUD.updateRow(newRowID, updatedRow);

// Step 5: Delete the row by its ID
CRUD.deleteRow(newRowID);
