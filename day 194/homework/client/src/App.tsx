import React, { useState, useEffect } from 'react';
import { Briefcase, Plus, Edit2, Trash2, X, Mail, Github, Linkedin } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tech_stack: string;
  image_url: string;
}

export default function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tech_stack: '',
    image_url: ''
  });

  const API_URL = 'http://localhost:8000/api/projects';

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (editingProject) {
        await fetch(`${API_URL}/${editingProject.id}/`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
      } else {
        await fetch(`${API_URL}/`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
      }
      
      fetchProjects();
      closeModal();
    } catch (error) {
      console.error('Error saving project:', error);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Delete this project?')) return;
    
    try {
      await fetch(`${API_URL}/${id}/`, { method: 'DELETE' });
      fetchProjects();
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const openModal = (project?: Project) => {
    if (project) {
      setEditingProject(project);
      setFormData({
        title: project.title,
        description: project.description,
        tech_stack: project.tech_stack,
        image_url: project.image_url
      });
    } else {
      setEditingProject(null);
      setFormData({ title: '', description: '', tech_stack: '', image_url: '' });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingProject(null);
    setFormData({ title: '', description: '', tech_stack: '', image_url: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-sm border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Briefcase className="w-8 h-8 text-purple-400" />
              <h1 className="text-2xl font-bold text-white">My Portfolio</h1>
            </div>
            <button
              onClick={() => openModal()}
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Plus className="w-5 h-5" />
              Add Project
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-4xl font-bold">
            JD
          </div>
          <h2 className="text-5xl font-bold text-white mb-4">John Doe</h2>
          <p className="text-xl text-purple-200 mb-8">
            Full Stack Developer | Building amazing web experiences
          </p>
          <div className="flex justify-center gap-4">
            <a href="mailto:john@example.com" className="text-purple-300 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://github.com" className="text-purple-300 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" className="text-purple-300 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-12">
        <h3 className="text-3xl font-bold text-white mb-8 text-center">My Projects</h3>
        
        {projects.length === 0 ? (
          <div className="text-center text-purple-300 py-12">
            No projects yet. Click "Add Project" to get started!
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all"
              >
                <img
                  src={project.image_url || 'https://via.placeholder.com/400x200'}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                  <p className="text-purple-200 mb-3 text-sm">{project.description}</p>
                  <p className="text-purple-400 text-xs mb-4">{project.tech_stack}</p>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => openModal(project)}
                      className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors"
                    >
                      <Edit2 className="w-4 h-4" />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(project.id)}
                      className="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 rounded-lg p-6 max-w-md w-full border border-purple-500/30">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-white">
                {editingProject ? 'Edit Project' : 'Add Project'}
              </h3>
              <button onClick={closeModal} className="text-purple-300 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-purple-200 mb-1 text-sm">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full bg-slate-700 text-white border border-purple-500/30 rounded px-3 py-2 focus:outline-none focus:border-purple-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-purple-200 mb-1 text-sm">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-slate-700 text-white border border-purple-500/30 rounded px-3 py-2 focus:outline-none focus:border-purple-500"
                  rows={3}
                  required
                />
              </div>
              
              <div>
                <label className="block text-purple-200 mb-1 text-sm">Tech Stack</label>
                <input
                  type="text"
                  value={formData.tech_stack}
                  onChange={(e) => setFormData({ ...formData, tech_stack: e.target.value })}
                  className="w-full bg-slate-700 text-white border border-purple-500/30 rounded px-3 py-2 focus:outline-none focus:border-purple-500"
                  placeholder="React, Node.js, MongoDB"
                  required
                />
              </div>
              
              <div>
                <label className="block text-purple-200 mb-1 text-sm">Image URL</label>
                <input
                  type="url"
                  value={formData.image_url}
                  onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                  className="w-full bg-slate-700 text-white border border-purple-500/30 rounded px-3 py-2 focus:outline-none focus:border-purple-500"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              
              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded transition-colors font-medium"
                >
                  {editingProject ? 'Update' : 'Create'}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 rounded transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black/30 border-t border-purple-500/20 py-6 mt-16">
        <div className="container mx-auto px-4 text-center text-purple-300">
        </div>
      </footer>
    </div>
  );
}