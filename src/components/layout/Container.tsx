export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  )
}
export default Container
