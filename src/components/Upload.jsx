import { useEffect } from "react";
import { database } from "../firebase"; // adjust path as needed
import { ref, push } from "firebase/database";

const UploadDataOnce = () => {
  useEffect(() => {
    const itemsRef = ref(database, "items");

    const items = [
      {
        name: "Men Shirt",
        price: 120,
        category: "Short Sleeve",
        image: "https://your-storage-url.com/display1.jpg",
      },
      {
        name: "Women Dress",
        price: 300,
        category: "Women",
        image: "https://your-storage-url.com/display4.jpg",
      },
      {
        name: "Cloth Set",
        price: 250,
        category: "Cloth",
        image: "https://your-storage-url.com/06.png",
      },
    ];

    items.forEach((item) => {
      push(itemsRef, item);
    });

    console.log("Items uploaded");
  }, []);

  return null; // this component doesn't render anything
};

export default UploadDataOnce;
