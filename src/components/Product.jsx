import { useContext, useEffect, useState } from "react";
import { CartContext } from "../App";

export default function Product() {
  const { keranjang, setKeranjang } = useContext(CartContext);

  const saveProduct = localStorage.getItem("products");
  const [products, setProducts] = useState(
    saveProduct ? JSON.parse(saveProduct) : []
  );

  useEffect(() => {
    if (!saveProduct) {
      fetch("/products.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Gagal mengambil data dari products.json");
          }
          return response.json();
          
        })
        .then((data) => {
          setProducts(data);
          localStorage.setItem("products", JSON.stringify(data));
        })
        .catch((error) =>
          console.error("Error saat mengambil data:", error)
        );
    }
  }, [saveProduct]);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const [formData, setformData] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  function handleAdd() {
    const newId =
      products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;
    setProducts([...products, { ...formData, id: newId }]);
    setformData(null);
  }

  function handleUpdate() {
    setProducts(products.map((p) => (p.id === formData.id ? formData : p)));
    setformData(null);
    setIsEdit(false);
  }
  return (
    <>
      <h1 className="title">BagInstyle</h1>
      <button
        className="add-button"
        onClick={() => {
          setformData({ productName: "", price: "", image: "" });
          setIsEdit(false);
        }}
      >
        Add
      </button>
      <div className="product-container">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <img src={p.image} alt={p.productName} className="product-image" />
            <p className="product-name">{p.productName}</p>
            <p className="product-price">{p.price}</p>
            <button
              className="update-button"
              onClick={() => {
                setformData(p);
                setIsEdit(true);
              }}
            >
              Update
            </button>
            <button
              className="delete-button"
              onClick={() => {
                if (
                  window.confirm("Apakah Anda yakin ingin menghapus item ini?")
                ) {
                  setProducts(products.filter((item) => item.id !== p.id));
                }
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                setKeranjang([...keranjang, p]);
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {formData && (
        <div className="form-container">
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              isEdit ? handleUpdate() : handleAdd();
            }}
          >
            <label>
              Product Name
              <input
                className="form-input"
                type="text"
                value={formData.productName}
                onChange={(e) =>
                  setformData({ ...formData, productName: e.target.value })
                }
              />
            </label>
            <label>
              Price
              <input
                className="form-input"
                type="number"
                value={formData.price}
                onChange={(e) =>
                  setformData({
                    ...formData,
                    price: parseFloat(e.target.value) || 0,
                  })
                }
              />
            </label>
            <label>
              Image Url
              <input
                className="form-input"
                type="text"
                value={formData.image}
                onChange={(e) =>
                  setformData({ ...formData, image: e.target.value })
                }
              />
            </label>
            <button type="submit" className="submit-button">
              {isEdit ? "Update" : "Add"}
            </button>
            <button
              type="button"
              className="cancel-button"
              onClick={() => setformData(null)}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </>
  );
}
