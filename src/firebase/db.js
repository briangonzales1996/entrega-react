import { app } from "./config";
import { getFirestore, collection, getDocs, query, where, doc ,getDoc,addDoc} from "firebase/firestore";


const db = getFirestore(app);

export const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const datos = [];
    querySnapshot.forEach((doc) => {
        datos.push({ ...doc.data(), id: doc.id })
    });
    return datos
}

export const getProductsCategory = async (category) => {

    const q = query(collection(db, "products"), where("category", "==", category));
    const datos = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        datos.push({ ...doc.data(), id: doc.id })
    });
    return datos
}

export const getProductsId = async (id) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    let product = {}
    if (docSnap.exists()) {
        product = {...docSnap.data(),id:docSnap.id}
    } else {
        console.log("No such document!");
    }
    return product
}
//createOrder
export const addTicket = async (datos)=>{
    const docRef = await addDoc(collection(db, "ticket"), datos);
        console.log("Document written with ID: ", docRef.id);
}








