import { Outlet, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Layout() {
  const { admin, logout } = useAuth();

  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="sidebar-logo">
          <h1>ShopAdmin</h1>
          <span>Control Panel</span>
        </div>

        <nav className="sidebar-nav">
          <NavLink to="/" end className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}>
            📊 Dashboard
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}>
            📦 Products
          </NavLink>
        </nav>

        <div className="sidebar-footer">
          <div className="admin-info">
            <span className="admin-name">{admin?.name}</span>
            <span className="admin-role">Administrator</span>
          </div>
          <button className="btn btn-ghost" style={{ width: '100%' }} onClick={logout}>
            🚪 Logout
          </button>
        </div>
      </aside>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
