import BoughtWidget from "./Widgets/BoughtWidget";
import DashboardTab from "./Widgets/DashboardTab";
import ShopWidget from "./Widgets/ShopWidget";
import { useStore } from "./GlobalVariables";
import ItemBoughtListWidget from "./Widgets/ItemsBoughtListWidget";

const MainPage = () => {
    const { widgetTab } = useStore();
    
    return (
        <div className={widgetTab === "home" ? "home-page" : ""}>
            <div>
                <DashboardTab />
            </div>
            <div>
                {widgetTab === "shop" && <ShopWidget />}
                {widgetTab === "cart" && <ItemBoughtListWidget />}
                {widgetTab === "ordering" && <BoughtWidget />}
            </div>
        </div>
    );
}

export default MainPage;