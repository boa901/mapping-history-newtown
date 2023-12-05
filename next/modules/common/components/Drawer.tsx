export default function Drawer({ children, open }: { children: React.ReactNode | React.ReactNode[], open: boolean }) {
  return open ? (
    <div className="flex flex-col bg-gray-200/50 border w-1/3 p-2 mr-2">
      {children}
    </div>
  ) : (
    <div className="flex flex-col bg-gray-200/50 border w-1/3 p-2 mr-2 collapse">
      {children}
    </div>
  );
}