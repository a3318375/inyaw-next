import Link from 'next/link'
import {userNoLoginNav, userLoginNav} from './NavDatas';
import Logo from './Logo';
import ThemeChange from '../components/ThemeChange';

export default function GlobalNav({menuShow}) {
    const userNav = false ? userLoginNav : userNoLoginNav;
    return (
        <div id="menuTop"
            className={'hidden md:navbar bg-opacity-60 sticky top-0 z-999 bg-base-100 transition duration-500'}
        >
            <div className='flex-1'>
                <Logo/>
            </div>
            <div className='flex-none hidden md:block'>
                <div id="aplayer" className="hidden md:block"/>
            </div>
            <div className='flex-none hidden md:block'>
                <ul className='menu menu-horizontal'>
                    <li>
                        <Link href="/">首页</Link>
                    </li>
                    <li>
                        <Link href="/">归档</Link>
                    </li>
                    <li>
                        <Link href="/">关于我</Link>
                    </li>
                </ul>
            </div>
            <div className='flex-none hidden md:block'>
                <ThemeChange/>
            </div>
            <div className='flex-none hidden md:block'>
                <button className='btn btn-ghost btn-circle'>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24'
                         stroke='currentColor'>
                        <path
                            strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
                            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                        />
                    </svg>
                </button>
            </div>
            <div className='flex-none hidden md:block'>
                <div className='dropdown dropdown-end'>
                    <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
                        {false ? <img src='user.inyaaSysUserDetail.avatar' className='rounded-full w-6 h-6'/> :
                            <div className='i-carbon-user-avatar w-6 h-6'/>}
                    </label>
                    <ul tabIndex={0}
                        className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 text-accent-content'>
                        {userNav.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a href={item.path}>{item.name}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}
