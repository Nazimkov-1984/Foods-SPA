import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusfilter from '../post-status-filter';
import PostList from '../post list';
import PostAddForm from '../post-add-form';

import './app.css';

const data = [
    {label: 'Learn react' , important: false},
    {label: 'CSSv is awesome' , important: true},
    {label: 'I need breack....' , important: false},
    {label: 'I want to breack free' , important: false}

];

const App = () => {
    return (
         <div className='app'>
             <AppHeader />
    <div className="search-panel d-flex">
        <SearchPanel/>
        <PostStatusfilter/>
    </div>

    <PostList posts={data} />

    <PostAddForm/>>
         </div>
    
    )
}
export default App;
