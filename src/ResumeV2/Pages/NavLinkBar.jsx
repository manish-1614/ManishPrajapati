import * as Icons from 'react-icons/vsc'
import { NavLink, matchPath, useLocation, useNavigate } from 'react-router-dom'

const NavLinkBar = ({element, iconName}) => {

    const location = useLocation();


    const Icon = Icons[iconName]
    const navigate = useNavigate();

    const matchRoute = (route) => {
        // console.log("first param: ",route, "second param: ", location.pathname," full Locaion : ", location);
        return matchPath({path:route}, location.pathname);
    }

  return (
    
        // NavLink
        <NavLink
            to={element.path}
            onClick={() => navigate(element.path)}
            className={`rounded-lg p-2 text-lg ${
            matchRoute(element.path) ? 'bg-black text-white' : 'text-black hover:text-pink-200'}`}
        >
            <div className='flex flex-col items-center gap-2'>
                <Icon className='text-4xl border-2 border-pink-900 p-2 rounded-lg' />
                <span>{element.name}</span>
            </div>
        </NavLink>
    
    
  )
}

export default NavLinkBar