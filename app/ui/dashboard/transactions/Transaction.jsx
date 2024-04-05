import Image from 'next/image';
import Styles from './transaction.module.css';
const Transactions = () => {
  return (
    <div className={Styles.container}>
     <h2 className={Styles.title}>Latest transaction</h2>
     <table className={Styles.table}>
      <thead>
        <tr>

        <td>Name</td>
        <td>Date</td>
        <td>Transaction</td>
        <td>Status</td>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>
          <div className={Styles.user}>
          <Image src="/p1.jpg" className={Styles.userImage} height={20} width={20}/>
          james njuguna
          </div>
          </td>
        <td>20-23-2024</td>
        <td>KSh 20</td>
        <td><span className={`${Styles.status} ${Styles.pending}`}>Pending</span></td>
        </tr>
        <tr>
        <td>
          <div className={Styles.user}>
          <Image src="/p1.jpg" className={Styles.userImage} height={20} width={20}/>
          james njuguna
          </div>
          </td>
        <td>20-23-2024</td>
        <td>KSh 20</td>
        <td><span className={`${Styles.status} ${Styles.done}`}>Done</span></td>
        </tr>
        <tr>
        <td>
          <div className={Styles.user}>
          <Image src="/p1.jpg" className={Styles.userImage} height={20} width={20}/>
          james njuguna
          </div>
          </td>
        <td>20-23-2024</td>
        <td>KSh 20</td>
        <td><span className={`${Styles.status} ${Styles.cancelled}`}>Cancelled</span></td>
        </tr>
        
        
      </tbody>
     </table>
    </div>
  )
}

export default Transactions