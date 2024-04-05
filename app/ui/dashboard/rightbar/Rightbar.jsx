import Image from 'next/image';
import Styles from './rightbar.module.css';
import { MdPlayCircleFilled } from 'react-icons/md';
const Rightbar = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.item}>
        <div className={Styles.bgcont}>
          <Image src="/p1.jpg" height={20} width={50}/>
        </div>
        <div className={Styles.texts}>
          <span className={Styles.notification}>🔥Available🔥</span>
          <h3 className={Styles.title}>Next Admin Dashboard</h3>
          <span className='p-2'>take 4 minutes</span>
          <p className='text-sm font-light pt-3 decoration-wavy'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, possimus! Porro ipsam impedit libero possimus, aspernatur cum tempore consectetur vel mollitia, sunt commodi dicta et voluptatum ipsa, temporibus quos fugiat.</p>
          <button className={Styles.button}>
            <MdPlayCircleFilled/>
            watch
          </button>
        </div>
      </div>
      <div className={Styles.item}>
        <div className={Styles.bgcont}>
          <Image src="/p1.jpg" height={10} width={60}/>
        </div>
        <div className={Styles.texts}>
          <span className={Styles.notification}>🔥Available🔥</span>
          <h3 className={Styles.title}>Next Admin Dashboard</h3>
          <span className='p-1'>take 4 minutes</span>
          <p className='text-sm font-light pt-1 decoration-wavy'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, possimus! Porro ipsam impedit libero possimus, aspernatur cum tempore consectetur vel mollitia, sunt commodi dicta et voluptatum ipsa, temporibus quos fugiat.</p>
          <button className={Styles.button}>
            <MdPlayCircleFilled/>
            watch
          </button>
        </div>

      </div>

    </div>
  )
}

export default Rightbar