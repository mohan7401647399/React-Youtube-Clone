// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Build Instagram-Clone</h1>
//     </div>
//   );
// }

// export default App;


//          import header

// import React from 'react';
// import './App.css';
// import Header from './Header';
// import Sidebar from './Sidebar';

// function App() {
//   return (
//     <div className="App">
//       <Header/>
//     </div>
//   );
// }

// export default App;


//            import sidebar & recommended

// import React from 'react';
// import './App.css';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import Recommendedvideos from './Recommendedvideos';

// function App() {
//   return (
//     <div className="App">
//       <Header/>
//       <div className="app_page">
//         <Sidebar/>
//         <Recommendedvideos/>
//       </div>
//     </div>
//   );
// }

// export default App;


//      import router

// import React from 'react';
// import './App.css';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import Recommendedvideos from './Recommendedvideos';
// import {BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Header/>
//         <Routes>
//           <Route path="/search/:searchTerm"></Route>
//           <Route path="/" element={[
//             <div className="app_page">
//               <Sidebar/>,<Recommendedvideos/>
//             </div>
//               ]}>
//           </Route>
//         </Routes> 
//       </Router>
//     </div>
//   );
// }

// export default App;


//          search

import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Recommendedvideos from './Recommendedvideos';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Switch>
            <Route path="/search/:searchTerm">
              <div className="app_page">
                <Sidebar/>
                <SearchPage/>
              </div>
            </Route>
            <Route path="/">
              <div className="app_page">
                <Sidebar/>
                <Recommendedvideos/>
              </div>
            </Route> 
          </Switch>
      </Router>
    </div>
  );
}

export default App;