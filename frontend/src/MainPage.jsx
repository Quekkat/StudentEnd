import BoughtWidget from "./Widgets/BoughtWidget";
import DashboardTab from "./Widgets/DashboardTab";
import ShopWidget from "./Widgets/ShopWidget";
import { useStore } from "./GlobalVariables";

const MainPage = ()=>{
    const{widgetTab} = useStore();
    return(
        <div>
            <div>
                
                <DashboardTab/>
            </div>
            <div>
                
                {widgetTab ==="shop" && <ShopWidget/>}
                {widgetTab ==="cart" && <BoughtWidget/>}
            </div>
        </div>
    );
}
export default MainPage;