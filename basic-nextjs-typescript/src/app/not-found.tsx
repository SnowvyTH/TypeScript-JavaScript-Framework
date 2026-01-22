type Props = {}
export default function NotFound({}: Props) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold">404</h1>
        <p className="text-lg text-orange-400">Page Not Found</p>
      </div>
    </div>
  )
}