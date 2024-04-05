import { MdSupervisedUserCircle } from 'react-icons/md';
import Styles from './card.module.css';
const Card = () => {
  return (
    <div className={Styles.container}>
      <MdSupervisedUserCircle  size={24}/>
      <div className={Styles.texts}>
        <span className={Styles.title}>Total users</span>
        <span className={Styles.number}>20.23</span>
        <span className={Styles.details}><span className={Styles.positive}>12% </span>More than the previous</span>

      </div>
    </div>
  )
}

export default Card