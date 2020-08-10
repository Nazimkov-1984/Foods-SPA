import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusfilter from '../post-status-filter';
import PostList from '../post list';

const App = () => {
    return (
         <div className='app'>
             <AppHeader />
    <div className="search-panel d-flex">
        <SearchPanel/>
        <PostStatusfilter/>
    </div>

    <PostList/>
         </div>
    
    )
}
export default App;
