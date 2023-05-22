import classes from "./RouteLayout.module.css";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";




function RouteLayout() {


    return (
        <div className={classes['main-container']}>
        
        <Header />
        <Outlet />
        </div>
    )
}

export default RouteLayout;