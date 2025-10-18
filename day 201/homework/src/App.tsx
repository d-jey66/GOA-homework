import { useLayoutEffect, useMemo, useRef, useState } from 'react'
import {
  LayoutGrid, Home, Bell, Settings, Search, ChevronDown,
  Utensils, Trash2, Minus, Plus, ShoppingCart
} from 'lucide-react'
import gsap from 'gsap'
import clsx from 'clsx'

const categories = ['Hot Dishes','Cold Dishes','Soup','Grill','Appetizer','Dessert'] as const
export type Category = typeof categories[number]

export type Dish = {
  id: number
  title: string
  price: number
  available: number
  category: Category
  image: string
}

const sampleDishes: Dish[] = [
  { id: 1, title: 'Spicy seasoned seafood noodles', price: 4.58, available: 20, category: 'Hot Dishes', image: 'https://images.unsplash.com/photo-1604908176997-4319b4d9250f?q=80&w=800&auto=format&fit=crop' },
  { id: 2, title: 'Salted pasta with mushroom sauce', price: 2.69, available: 11, category: 'Hot Dishes', image: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=800&auto=format&fit=crop' },
  { id: 3, title: 'Beef dumpling in hot and sour soup', price: 3.50, available: 16, category: 'Soup', image: 'https://images.unsplash.com/photo-1617191518000-9c52a06d5bd5?q=80&w=800&auto=format&fit=crop' },
  { id: 4, title: 'Healthy noodle with spinach leaf', price: 3.29, available: 22, category: 'Cold Dishes', image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=800&auto=format&fit=crop' },
  { id: 5, title: 'Spicy fried rice with omelette', price: 4.19, available: 13, category: 'Hot Dishes', image: 'https://images.unsplash.com/photo-1604908554025-7f2b8458a1eb?q=80&w=800&auto=format&fit=crop' },
  { id: 6, title: 'Spicy instant noodle with egg', price: 3.49, available: 17, category: 'Hot Dishes', image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=800&auto=format&fit=crop' },
  { id: 7, title: 'Grilled chicken skewers', price: 5.10, available: 8, category: 'Grill', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop' },
  { id: 8, title: 'Caesar salad', price: 2.99, available: 14, category: 'Appetizer', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop' },
  { id: 9, title: 'Creamy mushroom soup', price: 2.59, available: 10, category: 'Soup', image: 'https://images.unsplash.com/photo-1481070555726-e2fe8357725c?q=80&w=800&auto=format&fit=crop' },
  { id: 10, title: 'Garlic bread', price: 1.49, available: 18, category: 'Appetizer', image: 'https://images.unsplash.com/photo-1604908553360-6d820f250f07?q=80&w=800&auto=format&fit=crop' },
  { id: 11, title: 'Bruschetta', price: 1.99, available: 15, category: 'Appetizer', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop' },
  { id: 12, title: 'Tuna tartare', price: 3.59, available: 9, category: 'Appetizer', image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=800&auto=format&fit=crop' },
  { id: 13, title: 'Chocolate lava cake', price: 3.99, available: 7, category: 'Dessert', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476e?q=80&w=800&auto=format&fit=crop' },
  { id: 14, title: 'Panna cotta', price: 2.49, available: 12, category: 'Dessert', image: 'https://images.unsplash.com/photo-1606313561852-6ae471c8a1a4?q=80&w=800&auto=format&fit=crop' },
  { id: 15, title: 'Ice cream sundae', price: 2.79, available: 20, category: 'Dessert', image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=800&auto=format&fit=crop' },
  { id: 16, title: 'Grilled steak', price: 7.99, available: 6, category: 'Grill', image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=800&auto=format&fit=crop' },
  { id: 17, title: 'Grilled salmon', price: 6.49, available: 8, category: 'Grill', image: 'https://images.unsplash.com/photo-1514517220031-63bb57d66b43?q=80&w=800&auto=format&fit=crop' },
  { id: 18, title: 'BBQ ribs', price: 6.99, available: 5, category: 'Grill', image: 'https://images.unsplash.com/photo-1553163147-622ab57be1c7?q=80&w=800&auto=format&fit=crop' },
  { id: 19, title: 'Pho soup', price: 3.19, available: 14, category: 'Soup', image: 'https://images.unsplash.com/photo-1543826173-70651703c5f2?q=80&w=800&auto=format&fit=crop' },
  { id: 20, title: 'Chicken ramen', price: 3.49, available: 19, category: 'Soup', image: 'https://images.unsplash.com/photo-1543352634-650a8f46f381?q=80&w=800&auto=format&fit=crop' },
  { id: 21, title: 'Tomato soup', price: 2.09, available: 16, category: 'Soup', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop' },
  { id: 22, title: 'Soba noodle salad', price: 3.29, available: 11, category: 'Cold Dishes', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop' },
  { id: 23, title: 'Sushi platter', price: 7.49, available: 9, category: 'Cold Dishes', image: 'https://images.unsplash.com/photo-1548946526-f69e2424cf45?q=80&w=800&auto=format&fit=crop' },
  { id: 24, title: 'Caprese salad', price: 2.19, available: 18, category: 'Cold Dishes', image: 'https://images.unsplash.com/photo-1523986371872-9d3ba2e2fe13?q=80&w=800&auto=format&fit=crop' },
]

function useToday() {
  return new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })
}

type OrderMap = Record<number, { qty: number; note?: string }>

export default function App() {
  const [active, setActive] = useState<Category>('Hot Dishes')
  const [order, setOrder] = useState<OrderMap>({})
  const root = useRef<HTMLDivElement>(null)

  const dishes = useMemo(() => sampleDishes.filter(d => d.category === active), [active])

  const subtotal = useMemo(() => Object.entries(order).reduce((sum, [id, item]) => {
    const dish = sampleDishes.find(d => d.id === Number(id))
    return dish ? sum + dish.price * item.qty : sum
  }, 0), [order])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.sidebar .nav-btn', { x: -20, opacity: 0, stagger: 0.05, duration: 0.4 })
      gsap.from('.header', { y: -10, opacity: 0, duration: 0.45, delay: 0.1 })
      gsap.from('.order-panel', { x: 20, opacity: 0, duration: 0.45, delay: 0.15 })
      gsap.from('.dish-card', { y: 16, opacity: 0, duration: 0.4, stagger: 0.04, delay: 0.15 })
    }, root)
    return () => ctx.revert()
  }, [])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.dish-card', { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.05 })
    }, root)
    return () => ctx.revert()
  }, [active])

  function addToOrder(id: number) {
    setOrder(prev => ({ ...prev, [id]: { qty: (prev[id]?.qty ?? 0) + 1, note: prev[id]?.note } }))
  }
  function inc(id: number) { setOrder(p => ({ ...p, [id]: { qty: (p[id]?.qty ?? 0) + 1, note: p[id]?.note } })) }
  function dec(id: number) { setOrder(p => { const q = (p[id]?.qty ?? 0) - 1; if (q <= 0) { const { [id]:_, ...rest } = p; return rest } return { ...p, [id]: { qty: q, note: p[id]?.note } } }) }
  function delItem(id: number) { setOrder(p => { const { [id]:_, ...rest } = p; return rest }) }

  return (
<div ref={root} className="h-full p-4 sm:p-6">
<div className="grid h-full gap-4 sm:gap-6 grid-cols-1 md:grid-cols-[80px_1fr] lg:grid-cols-[80px_1fr_420px] xl:grid-cols-[80px_1fr_480px]">
        {/* Sidebar */}
<aside className="sidebar hidden md:flex flex-col items-center py-6 bg-panel rounded-2xl border border-white/5 shadow-lg">
          <div className="w-12 h-12 rounded-2xl bg-white/5 grid place-items-center mb-6">
            <Utensils className="text-accent" />
          </div>
          <nav className="mt-2 flex flex-col gap-3">
            {[LayoutGrid, Home, Bell, Settings].map((Icon, i) => (
              <button key={i} className="nav-btn w-12 h-12 rounded-2xl bg-white/5 hover:bg-white/10 grid place-items-center text-slate-300">
                <Icon size={20} />
              </button>
            ))}
          </nav>
          <div className="mt-auto text-xs text-slate-500">v1.0</div>
        </aside>

        {/* Main */}
        <main className="flex flex-col overflow-hidden">
          {/* Header */}
<div className="header flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-semibold">Jaegar Resto</h1>
              <p className="text-sm text-slate-400">{useToday()}</p>
              <div className="mt-4 flex gap-6 text-sm">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={clsx('relative pb-2 text-slate-300 hover:text-white', active === cat && 'text-white')}
                  >
                    {cat}
                    {active === cat && <span className="absolute left-0 -bottom-[1px] h-0.5 w-full bg-accent rounded-full" />}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
<input placeholder="Search for food, coffee, etc.." className="pl-9 w-40 sm:w-56 md:w-72 bg-panel2 border border-white/10 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/40 px-3 py-2" />
              </div>
<button className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 inline-flex items-center gap-1">Dine In <ChevronDown size={16} /></button>
            </div>
          </div>

          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-medium">Choose Dishes</h2>
<span className="px-2.5 py-1 rounded-lg bg-white/5 text-xs text-slate-300 border border-white/10">{dishes.length} dishes available</span>
          </div>

<div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 pr-0 md:pr-4 overflow-auto">
            {dishes.map(d => (
<button key={d.id} onClick={() => addToOrder(d.id)} className="dish-card text-left overflow-hidden group bg-panel rounded-2xl border border-white/5 shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative">
<img src={d.image} alt={d.title} className="h-36 sm:h-40 w-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="font-medium leading-tight">{d.title}</div>
                  <div className="mt-1 text-slate-400 text-sm">${d.price.toFixed(2)}</div>
                  <div className="mt-3 text-xs text-slate-500">{d.available} Bowls available</div>
                </div>
              </button>
            ))}
          </div>
        </main>

        {/* Order Panel */}
<aside className="order-panel bg-panel rounded-2xl border border-white/5 shadow-lg p-4 sm:p-6 flex flex-col mt-4 md:mt-0">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Orders #34562</h3>
              <div className="mt-2 flex gap-2">
                {['Dine In','To Go','Delivery'].map((s, i) => (
<span key={i} className={clsx('px-2.5 py-1 rounded-lg bg-white/5 text-xs text-slate-300 border border-white/10', i===0 && 'bg-accent/20 text-accent border-accent/20')}>{s}</span>
                ))}
              </div>
            </div>
            <ShoppingCart className="text-slate-400" />
          </div>

          <div className="mt-6 grid grid-cols-[1fr_70px_70px_40px] text-xs text-slate-400 px-2">
            <span>Item</span><span>Qty</span><span>Price</span><span></span>
          </div>

          <div className="mt-2 flex-1 overflow-auto pr-1">
            {Object.keys(order).length === 0 && (
              <div className="h-full grid place-items-center text-slate-500 text-sm">No items yet. Click a dish to add.</div>
            )}

            {Object.entries(order).map(([id, item]) => {
              const dish = sampleDishes.find(d => d.id === Number(id))!
              return (
                <div key={id} className="grid grid-cols-[1fr_70px_70px_40px] items-center gap-3 p-2 rounded-xl hover:bg-white/5">
                  <div className="flex items-center gap-3">
                    <img src={dish.image} alt="" className="w-10 h-10 rounded-lg object-cover" />
                    <div>
                      <div className="text-sm font-medium leading-tight truncate">{dish.title}</div>
<input className="mt-1 bg-panel2 border border-white/10 rounded-xl text-xs placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/40 px-3 py-2 w-60" placeholder="Order note..." value={item.note ?? ''} onChange={e => setOrder(p => ({ ...p, [dish.id]: { ...p[dish.id], note: e.target.value } }))} />
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2">
                    <button onClick={() => dec(dish.id)} className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 grid place-items-center"><Minus size={14} /></button>
                    <span className="w-6 text-center text-sm">{item.qty}</span>
                    <button onClick={() => inc(dish.id)} className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 grid place-items-center"><Plus size={14} /></button>
                  </div>

                  <div className="text-sm">${(dish.price * item.qty).toFixed(2)}</div>
                  <button onClick={() => delItem(dish.id)} className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 grid place-items-center text-red-400"><Trash2 size={16} /></button>
                </div>
              )
            })}
          </div>

          <div className="mt-4 space-y-2 text-sm">
            <div className="flex items-center justify-between text-slate-400"><span>Discount</span><span>$0</span></div>
            <div className="flex items-center justify-between"><span>Sub total</span><span>${subtotal.toFixed(2)}</span></div>
          </div>

<button className="mt-4 py-3 text-base inline-flex items-center justify-center rounded-xl px-3 bg-accent hover:bg-accent2 text-black font-medium">Continue to Payment</button>
        </aside>
      </div>
    </div>
  )
}
