import Search from '@/app/ui/dashboard/search/search'
import styles  from './user.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '@/app/ui/dashboard/pagination/Pagination'
const Users = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
      <Search placeholder="Search for a user..."/>
        <Link href="/dashboard/users/adduser">
          <button className={styles.addbutton}>Adduser</button>
        </Link>
      </div>
      <table className={styles.table}>
          <thead   className={styles.head}>
        <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
        </tr>
          </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.users}>
                <Image src="/p1.jpg" height={40} width={40} className={styles.userImage}/>
                James nju
              </div>
              </td>
            <td>james@gmail.com</td>
            <td>29-04-49</td>
            <td>Admin</td>
            <td>pending</td>
            <td>
              <Link href="/">
                <button className={`${styles.button} ${styles.view}`}>View</button>
              </Link>
              <Link href="/">
                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.users}>
                <Image src="/p1.jpg" height={40} width={40} className={styles.userImage}/>
                James nju
              </div>
              </td>
            <td>james@gmail.com</td>
            <td>29-04-49</td>
            <td>Admin</td>
            <td>pending</td>
            <td>
              <Link href="/">
                <button className={`${styles.button} ${styles.view}`}>View</button>
              </Link>
              <Link href="/">
                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination/>
    </div>
  )
}

export default Users