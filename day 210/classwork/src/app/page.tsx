// import * as React from "react";
// import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";

// export default function App() {
//   return (
//     <SidebarProvider>
//       <Sidebar>
//         hello world
//       </Sidebar>
//       hello goa
//     </SidebarProvider>
//   );
// }

"use client";

import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const req = await fetch("https://jsonplaceholder.typicode.com/posts");
        const res = await req.json();
        setData(res);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {Array.isArray(data) && data.map((item) => (
        <div key={item?.id}>
          {item?.id}: {item?.title}
        </div>
      ))}    </div>
  );
}
