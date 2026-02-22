import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/axios';

export default function Dashboard() {
  const [stats, setStats] = useState({ total: 0, categories: 0, lowStock: 0 });
  const [recent, setRecent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get('/products');
        const categories = new Set(data.map((p) => p.category)).size;
        const lowStock = data.filter((p) => p.stock <= 5).length;
        setStats({ total: data.length, categories, lowStock });
        setRecent(data.slice(0, 5));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="loader">Loading dashboard...</div>;

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Dashboard</h1>
          <p className="page-subtitle">Welcome back, here's what's going on.</p>
        </div>
        <Link to="/products/new" className="btn btn-primary">+ Add Product</Link>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Total Products</div>
          <div className="stat-val">{stats.total}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Categories</div>
          <div className="stat-val">{stats.categories}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Low Stock</div>
          <div className="stat-val" style={{ color: stats.lowStock > 0 ? '#f87171' : 'var(--accent-light)' }}>
            {stats.lowStock}
          </div>
        </div>
      </div>

      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700 }}>Recent Products</h2>
          <Link to="/products" style={{ color: 'var(--accent-light)', fontSize: 13 }}>View all →</Link>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Image</th><th>Name</th><th>Category</th><th>Price</th><th>Stock</th>
              </tr>
            </thead>
            <tbody>
              {recent.map((p) => (
                <tr key={p._id}>
                  <td>
                    {p.image?.url
                      ? <img src={p.image.url} alt={p.name} className="product-img" />
                      : <div className="product-img-placeholder">📦</div>
                    }
                  </td>
                  <td style={{ fontWeight: 600 }}>{p.name}</td>
                  <td><span className="badge badge-gray">{p.category}</span></td>
                  <td>${p.price.toFixed(2)}</td>
                  <td>
                    <span className={`badge ${p.stock > 5 ? 'badge-green' : 'badge-gray'}`}>
                      {p.stock} units
                    </span>
                  </td>
                </tr>
              ))}
              {recent.length === 0 && (
                <tr>
                  <td colSpan={5} style={{ textAlign: 'center', color: 'var(--muted)', padding: 32 }}>
                    No products yet.
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
