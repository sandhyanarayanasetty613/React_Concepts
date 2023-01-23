// import Content from "./components/Content";
// import ExpenseItem from "./components/ExpenseItem";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Navigation from "./components/Navigation";
// import Maincontent from "./Maincontent";

// import  Header from "./Cards_component/Header";
// import Main from "./Cards_component/Main"
// import Hello from "./19th/component"
// import  Attributes from "./19th/Attributes"
import filteredContacts from "./Table/filteredContacts"
import List from "./Table/List"
import Search from "./Table/search";
function App() {
  return (
       <div>
         <Search>
         </Search>
         <filteredContacts></filteredContacts>
         
         <List></List>

                                           {/* CARDS */}
        {/* <Header></Header>
        <Main></Main> */}
                                           {/* COMPONENTS */}
        {/* <Header></Header>
        <Navigation></Navigation>
        <div style ={{ display: "flex", justifyContent: "space-between"}}>
        <Content></Content>
        <Maincontent></Maincontent>
        <Content></Content>
        </div>
          <Footer></Footer> */}

        
       </div>
  );

}
export default App;
