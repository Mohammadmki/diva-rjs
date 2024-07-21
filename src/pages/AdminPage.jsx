
import Categorys from "../components/admin/CategoryList"
import CreateCategory from "../components/admin/CreateCategory"

function AdminPage() {

  return (
    <div>
      <CreateCategory/>
      <Categorys />
    </div>
  )
}

export default AdminPage