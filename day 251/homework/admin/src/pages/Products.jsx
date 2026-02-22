import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import api from '../api/axios';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);

  const fetchProducts = async () => {
    try {
      const { data } = await api.get('/products');
      setProducts(data);
    } catch (err) {
      toast.error('Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchProducts(); }, []);

  const handleDelete = async (id, name) => {
    if (!window.confirm(`Delete "${name}"? This cannot be undone.`)) return;
    setDeleting(id);
    try {
      await api.delete(`/products/${id}`);
      toast.success('Product deleted');
      setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      toast.error('Delete failed');
    } finally {
      setDeleting(null);
    }
  };

  if (loading) return <div className="loader">Loading products...</div>;

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Products</h1>
          <p className="page-subtitle">{products.length} products in the database</p>
        </div>
        <Link to="/products/new" className="btn btn-primary">+ Add Product</Link>
      </div>

      <div className="card">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p._id}>
                  <td>
                    {p.image?.url
                      ? <img src={p.image.url} alt={p.name} className="product-img" />
                      : <div className="product-img-placeholder">📦</div>
                    }
                  </td>
                  <td>
                    <span style={{ fontWeight: 600 }}>{p.name}</span>
                    <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>
                      {p.description.slice(0, 40)}...
                    </div>
                  </td>
                  <td><span className="badge badge-gray">{p.category}</span></td>
                  <td style={{ fontWeight: 700 }}>${p.price.toFixed(2)}</td>
                  <td>
                    <span className={`badge ${p.stock > 5 ? 'badge-green' : 'badge-gray'}`}>
                      {p.stock} units
                    </span>
                  </td>
                  <td>
                    <div className="actions-cell">
                      <Link to={`/products/edit/${p._id}`} className="btn btn-ghost btn-sm">
                        ✏️ Edit
                      </Link>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(p._id, p.name)}
                        disabled={deleting === p._id}
                      >
                        {deleting === p._id ? '...' : '🗑️ Delete'}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan={6} style={{ textAlign: 'center', color: 'var(--muted)', padding: 40 }}>
                    No products yet.{' '}
                    <Link to="/products/new" style={{ color: 'var(--accent-light)' }}>
                      Add your first one →
                    </Link>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
