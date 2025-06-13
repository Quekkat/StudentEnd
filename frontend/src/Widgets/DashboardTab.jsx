import { useStore } from "../GlobalVariables";

const DashboardTab = ()=> {
    const { setWidgetTab } = useStore();

    return (
        <div>
            Dashboard Navbar
            <button className="nav-link" onClick={() => setWidgetTab("shop")}> Shop item</button>
            <button className="nav-link" onClick={() => setWidgetTab("cart")}>Bought item</button>
        </div>
    )
}
export default DashboardTab;