import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Folder, FileText, Trash } from "lucide-react";

const initialFiles = [
  { name: "Resume.pdf", type: "file", id: 1 },
  { name: "Photos", type: "folder", id: 2 },
  { name: "Report.docx", type: "file", id: 3 },
  { name: "Projects", type: "folder", id: 4 },
];

export default function GoogleDriveClone() {
  const [files, setFiles] = useState(initialFiles);
  const [search, setSearch] = useState("");
  const [newName, setNewName] = useState("");
  const [newType, setNewType] = useState("file");

  const handleCreate = () => {
    if (!newName) return;
    const newFile = {
      id: Date.now(),
      name: newName,
      type: newType,
    };
    setFiles([...files, newFile]);
    setNewName("");
  };

  const handleDelete = (id: number) => {
    setFiles(files.filter(file => file.id !== id));
  };

  const filteredFiles = files.filter(file =>
    file.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 p-6">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">My Drive</h1>
        <div className="flex items-center gap-2">
          <Input
            placeholder="Search in Drive..."
            className="w-64 border border-gray-300 focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />

          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Plus className="w-4 h-4 mr-2" /> New
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-white border border-gray-200 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold mb-2 text-gray-800">Create New</h2>
              <Input
                placeholder="Name"
                className="mb-2 border border-gray-300"
                value={newName}
                onChange={e => setNewName(e.target.value)}
              />
              <select
                className="w-full p-2 border border-gray-300 rounded mb-4"
                value={newType}
                onChange={e => setNewType(e.target.value)}
              >
                <option value="file">File</option>
                <option value="folder">Folder</option>
              </select>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={handleCreate}>
                Create
              </Button>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      <main className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredFiles.map((item) => (
          <Card
            key={item.id}
            className="relative group cursor-pointer hover:shadow-lg transition bg-white border border-gray-200 rounded-lg"
          >
            <CardContent className="flex flex-col items-start gap-3 p-4">
              {item.type === "folder" ? (
                <Folder className="w-6 h-6 text-yellow-500" />
              ) : (
                <FileText className="w-6 h-6 text-blue-500" />
              )}
              <span className="truncate text-sm font-medium text-gray-800 w-full">
                {item.name}
              </span>
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-red-100"
                  onClick={() => handleDelete(item.id)}
                >
                  <Trash className="w-4 h-4 text-red-500" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </main>
    </div>
  );
}
