import Link from 'next/link'
import Image from 'next/image'
import Search from '@/app/ui/dashboard/search/Search'
// import   styles  from  './products.module.css';
import   styles  from  '../users/user.module.css';
import Pagination from '@/app/ui/dashboard/pagination/Pagination';

const Products = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
      <Search placeholder="Search for a product..."/>
        <Link href="/dashboard/users/adduser">
          <button className={styles.addbutton}>Add product</button>
        </Link>
      </div>
      <table className={styles.table}>
          <thead   className={styles.head}>
        <tr>
            <td>Title</td>
            <td>description</td>
            <td>Price</td>
            <td>Created</td>
            <td>Stock</td>
            <td>Action</td>
        </tr>
          </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.users}>
                <Image src="/shop2.jpg" height={40} width={40} className={styles.userImage}/>
                Mango
              </div>
              </td>
            <td>ready to eat</td>
            <td>29</td>
            <td>10-02-29</td>
            <td>10</td>
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
                <Image src="/shop1.jpg" height={40} width={40} className={styles.userImage}/>
                Mango
              </div>
              </td>
            <td>ready to eat</td>
            <td>29</td>
            <td>10-02-29</td>
            <td>10</td>
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

export default Products