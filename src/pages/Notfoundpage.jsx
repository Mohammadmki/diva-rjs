import { Link } from "react-router-dom"


function Notfoundpage() {
  return (
    <div className="w-full flex items-center flex-col">
      <h3 className="text-7xl text-neutral-400 font-semibold">404</h3>
      <h2 className="text-2xl text-neutral-400">این راه به جایی نمیرسد!</h2>
       <p className="text-neutral-400">
        به نظر آدرس را اشتباه وارد کرده‌اید.
      برای پیدا کردن مسیر درست می‌توانید سری به <Link className="text-divar" to={'/'}>صفحهٔ اول دیوار</Link> بزنید.
      </p>
    </div>
  )
}

export default Notfoundpage