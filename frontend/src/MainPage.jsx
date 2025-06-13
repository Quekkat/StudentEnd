const MainPage = ()=>{
    const{widgetTab} = useStore();
    return(
        <div>
            <div>
                
                <DashboardTab/>
            </div>
            <div>
                
                {widgetTab ==="inventory" && <InventoryWidget/>}
                {widgetTab ==="add-new" && <CreateNewInventory/>}
                {widgetTab === "verify-teachers" && <VerifyTeachers/>}
                {widgetTab ==="verify-payment" && <VerifyStudentPayment/>}
                {widgetTab ==="transaction-history" && <Transaction/>}
                {widgetTab ==="verify-student" && <VerifyStudent/>}
                {widgetTab ==="add-new-payment" && <AddNewPayment/>}
                {widgetTab ==="stock-list" && <StockList/>}
            </div>
        </div>
    );
}
export default MainPage;