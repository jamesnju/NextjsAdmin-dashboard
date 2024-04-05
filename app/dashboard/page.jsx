import Chart from '../ui/dashboard/Chart/Chart';
import Card from '../ui/dashboard/card/Card';
import Styles from '../ui/dashboard/dashboard.module.css';
import Rightbar from '../ui/dashboard/rightbar/Rightbar';
import Transactions from '../ui/dashboard/transactions/Transaction';
const Dashboard = () => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.maincontent}>
    <div className={Styles.card}>
      <Card/>
      <Card/>
      <Card/>

      </div>
      <Transactions/>
      <Chart/>
    </div>
    <div className={Styles.side}>
      <Rightbar/>
    </div>
    </div>
  )
}

export default Dashboard