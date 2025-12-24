"use client";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ToastProvider";
export default function ProductForm({
  edit,
  onDone,
}: {
  edit?: any;
  onDone: () => void;
}) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: 0,
    image: "",
    inStock: true,
    category: "Mac",
  });
  const { show } = useToast();
  useEffect(() => {
    if (edit)
      setForm({
        name: edit.name,
        description: edit.description,
        price: edit.price,
        image: edit.image,
        inStock: edit.inStock,
        category: edit.category,
      });
  }, [edit]);
  async function submit() {
    const method = edit ? "PUT" : "POST";
    const url = edit ? `/api/products/${edit._id}` : "/api/products";
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      show(edit ? "Updated" : "Created");
      onDone();
    } else {
      show("Error");
    }
  }
  return (
    <div className="grid gap-4">
      <div className="grid gap-2">
        <Label>Name</Label>
        <Input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </div>
      <div className="grid gap-2">
        <Label>Description</Label>
        <Input
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label>Price</Label>
          <Input
            type="number"
            value={form.price}
            onChange={(e) =>
              setForm({ ...form, price: Number(e.target.value) })
            }
          />
        </div>
        <div className="grid gap-2">
          <Label>Category</Label>
          <Input
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          />
        </div>
      </div>
      <div className="grid gap-2">
        <Label>Image URL</Label>
        <Input
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />
      </div>
      <div className="flex items-center gap-2">
        <Switch
          checked={form.inStock}
          onCheckedChange={(v) => setForm({ ...form, inStock: v })}
        />
        <Label>In stock</Label>
      </div>
      <Button onClick={submit}>{edit ? "Save" : "Create"}</Button>
    </div>
  );
}
