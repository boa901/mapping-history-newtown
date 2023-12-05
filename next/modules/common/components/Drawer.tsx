export default function Drawer({ children, open }: { children: React.ReactNode | React.ReactNode[], open: boolean }) {
  return (
    <div className={`flex flex-col bg-gray-200/50 ${open ? 'w-1/3 border p-2 mr-2' : 'w-0'} transition-all duration-300`}>
      {children}
    </div>
  );
}