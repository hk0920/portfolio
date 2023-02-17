import {Routes, Route, HashRouter} from 'react-router-dom';
import Main from './main/Main';
import WorkList from './work/List';
import './App.css';
import Detail from './work/Detail';
import Header from './Header';
import ScrollToTop from './ScrollToTop';
import { Main2 } from './main/Main2';


function App() {
  return (
		<HashRouter>
    	<ScrollToTop />
			<div id="wrap">
				<Header/>
				<Routes>
					<Route index path="/" element={<Main2 />}></Route>
					<Route index path="/2022" element={<Main />}></Route>
					<Route path="/work" element={<WorkList />}></Route>
					<Route path="/detail/:seq" element={<Detail />}></Route>
				</Routes>
			</div>
		</HashRouter>
  );
}

export default App;
