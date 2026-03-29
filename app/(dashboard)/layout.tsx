import Sidebar from "../../components/layout/Sidebar"


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen w-full bg-background overflow-hidden">
      
      {/* Fixed Desktop Sidebar */}
      <aside className="hidden lg:block w-64 h-full shrink-0">
        <Sidebar />
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 relative">
        {/* We can put the Top Navbar here later */}
        <main className="flex-1 overflow-y-auto scrollbar-hide bg-background">
          {children}
        </main>
      </div>
      
    </div>
  )
}