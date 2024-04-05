import { ref, child, get } from "firebase/database";
import database from "../firebase-config";
import { CellSite } from "../models/cellsite";

const dbRef = ref(database)

export const getCellSites = (): CellSite[] => {
    get(child(dbRef, 'cellsites')).then((snapshot) => {
        if (snapshot.exists()) {
          return snapshot.val();
        }
      }).catch((error) => {
        console.error(error);
        return []
      })
    return []
}