
import Categorys from "../components/admin/CategoryList"
import CreateCategory from "../components/admin/CreateCategory"

function AdminPage() {

  return (
    <div  className="pt-2 md:pt-4 px-5">
      <CreateCategory/>
      <Categorys />
    </div>
  )
}

export default AdminPage