import Styles from './sidebar.module.css';
import { TfiDashboard, TfiMoney, TfiUser } from "react-icons/tfi";
import { FaShoppingBag } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { MdHelp, MdOutlineSettings, MdPeople, MdReport, MdWork } from "react-icons/md";
import MenuLink from './menulinks/MenuLink';
import Image from 'next/image';



const Sidebar = () => {
    const menuItems=[
        {
            title: 'page',
            list :[
                {
                title: "Dashboard",
                path:"/dashboard",
                icon: <TfiDashboard />
            },
            {
                title: "Users",
                path:"/dashboard/users",
                icon: <TfiUser />
            },
            {
                title: "Products",
                path:"/dashboard/products",
                icon:<FaShoppingBag />
            },
            {
                title: "Transaction",
                path:"/dashboard/transactions",
                icon: <TfiMoney />
            },
          
            ]
        },
        {
            title: "Analytic",
            list:[
                {
                    title: "Revenue",
                    path:"/Dashboard/revenue",
                    icon: <MdWork />
                },
                {
                    title: "Report",
                    path:"/Dashboard/report",
                    icon: <MdReport />
                },
                {
                    title: "Teams",
                    path:"/Dashboard/teams",
                    icon: <MdPeople />
                },
            ]
        },
        {
            title: "Users",
            list:[
                {
                    title: "Settings",
                    path:"/Dashboard/setting",
                    icon: <MdOutlineSettings />
                },
                {
                    title: "Help",
                    path:"/Dashboard/report",
                    icon: <MdHelp />
                },
                {
                    title: "Teams",
                    path:"/Dashboard/teams",
                    icon: <MdPeople />
                },
            ]
        },
    ]
  return (
    <div className= {Styles.container}>
        <div className={Styles.user }>
            <Image src="/p1.jpg" height={50} width={70} className='rounded-xl'/>
            <div className={Styles.userdetails}>
                <span className={Styles.username}>Jame njuguna</span>
                <span className={Styles.usertitle}>Administartor</span>

            </div>
        </div>

        <ul className={Styles.main}>
        {menuItems.map((items)=>(
            <li key={items.title} className={Styles.menutext}>
                <span className={Styles.items}>{items.title}</span>
                {items.list.map((item)=>(
                    <MenuLink item={item} key={item.title}/>
                ))}
            </li>
        ))}
        </ul>
        <button className="flex p-20px gap-4 w-100 hover:bg-sky-700">
        <IoIosLogOut size={25} />
        Logout 
        </button>


    </div>
  )
}

export default Sidebar