import { useEffect, useState } from "react";
import { Info, CirclePlusIcon, Search } from "lucide-react";


export default function Product() {
  // const { keranjang, setKeranjang } = useContext(CartContext);

  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [infoProduct, setInfoProduct] = useState(null);

  // State untuk pengurutan
  const [sortOrder, setSortOrder] = useState("asc");

  // State untuk pencarian produk
  const [searchQuery, setSearchQuery] = useState("");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // State untuk rating produk
  const [ratings, setRatings] = useState({});

  const loadProducts = () => {
    const localProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(localProducts);

    fetch("/products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Gagal mengambil data dari products.json");
        }
        return response.json();
      })
      .then((data) => {
        const mergedProducts = [
          ...localProducts,
          ...data.filter(
            (jsonProduct) =>
              !localProducts.some((localProduct) => localProduct.id === jsonProduct.id)
          ),
        ];
        setProducts(mergedProducts);
        localStorage.setItem("products", JSON.stringify(mergedProducts));
      })
      .catch((error) => console.error("Error saat mengambil data:", error));
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleAdd = () => {
    if (!formData.productName || !formData.price || !formData.image || !formData.category || !formData.bahan) {
      alert("Semua kolom harus diisi!");
      return;
    }

    const newId = products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;
    const newProduct = { ...formData, id: newId };
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setFormData(null);
  };

  const handleUpdate = () => {
    if (!formData.productName || !formData.price || !formData.image || !formData.category || !formData.bahan) {
      alert("Semua kolom harus diisi!");
      return;
    }

    const updatedProducts = products.map((p) => (p.id === formData.id ? formData : p));
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setFormData(null);
    setIsEdit(false);
  };

  // Pengurutan produk berdasarkan abjad
  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.productName.localeCompare(b.productName);
    } else if (sortOrder === "desc") {
      return b.productName.localeCompare(a.productName);
    } else if (sortOrder === "price-high") {
      return b.price - a.price; // Harga mahal ke murah
    } else if (sortOrder === "price-low") {
      return a.price - b.price; // Harga murah ke mahal
    }
    return 0;
  });

  // Filter produk berdasarkan pencarian
  const filteredProducts = sortedProducts.filter((product) =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Reset pagination ketika pencarian berubah
  useEffect(() => {
    setCurrentPage(1); // Reset halaman saat query pencarian berubah
  }, [searchQuery]);

  // Fungsi untuk mengatur rating produk
  const handleRating = (productId, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [productId]: rating,
    }));
  };

  return (
    <>
      {/* Pencarian Produk */}
      <div className="search-bar">
        <Search />
        <input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <button
        className="add-button"
        onClick={() => {
          setFormData({ productName: "", price: "", image: "", category: "",bahan :"" });
          setIsEdit(false);
        }}
      >
        Add Product <CirclePlusIcon />
      </button>

      <div className="sort-filter">
      <label htmlFor="sortOrder"></label>
        <label htmlFor="sortOrder">Pencarian:</label>
        <select
          id="sortOrder"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">A-Z </option>
          <option value="desc">Z-A </option>
          <option value="price-high">Harga: Mahal ke Murah</option>
          <option value="price-low">Harga: Murah ke Mahal</option>

        </select>
      </div>

      <div className="product-container">
        {currentProducts.length > 0 ? (
          currentProducts.map((p) => (
            <div key={p.id} className="product-card">
              <img src={p.image} alt={p.productName} className="product-image" />
              <p className="product-name">{p.productName}</p>
              <p className="product-price">Rp {p.price?.toLocaleString() || "0"}</p>
              <p className="product-category">Category: {p.category}</p>
              <p className="product-bahan">Bahan: {p.bahan}</p>

              {/* Rating Section */}
              <div className="rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`star ${ratings[p.id] >= star ? "filled" : ""}`}
                    onClick={() => handleRating(p.id, star)}
                  >
                    ★
                  </span>
                ))}
              </div>

              <button
                className="update-button"
                onClick={() => {
                  setFormData(p);
                  setIsEdit(true);
                }}
              >
                Update
              </button>
              <button
                className="delete-button"
                onClick={() => {
                  if (window.confirm("Apakah Anda yakin ingin menghapus item ini?")) {
                    const updatedProducts = products.filter((item) => item.id !== p.id);
                    setProducts(updatedProducts);
                    localStorage.setItem("products", JSON.stringify(updatedProducts));
                  }
                }}
              >
                Delete
              </button>

              <button className="info-button" onClick={() => setInfoProduct(p)}>
                <Info className="info-icon" />
                <span className="info-label"></span>
              </button>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(filteredProducts.length / itemsPerPage)}
        >
          Next
        </button>
      </div>

      {infoProduct && (
        <div className="info-modal">
          <div className="info-content">
            <h2>Product Information</h2>
            <img src={infoProduct.image} alt={infoProduct.productName} className="info-image" />
            <p>Name: {infoProduct.productName}</p>
            <p>Price: Rp {infoProduct.price?.toLocaleString()}</p>
            <p>Category: {infoProduct.category}</p>
            <p>Bahan: {infoProduct.bahan}</p>
            <button className="close-button" onClick={() => setInfoProduct(null)}>
              Close
            </button>
          </div>
        </div>
      )}

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
                  setFormData({ ...formData, productName: e.target.value })
                }
              />
            </label>
            <label>
              Price
              <br />
              <input
                className="form-input"
                type="number"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
              />
            </label>
            <label>
              Image URL
              <br />
              <input
                className="form-input"
                type="text"
                value={formData.image}
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
              />
            </label>
            <label>
              Category
              <br />
              <input
                className="form-input"
                type="text"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              />
            </label>
            <label>
              Bahan
              <br />
              <input
                className="form-input"
                type="text"
                value={formData.bahan}
                onChange={(e) =>
                  setFormData({ ...formData, bahan: e.target.value })
                }
              />
            </label>
            <button className="submit-button" type="submit">
              {isEdit ? "Update Product" : "Add Product"}
            </button>
            <button
              className="cancel-button"
              type="button"
              onClick={() => setFormData(null)}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </>
  );
}
