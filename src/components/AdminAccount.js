import { AdminID, getItem } from "../utils/localStorage"

const AdminAccount = ()=>{
const admin_id = getItem(AdminID)
  return (
    <h1>Admin account</h1>
  )
}

export default AdminAccount