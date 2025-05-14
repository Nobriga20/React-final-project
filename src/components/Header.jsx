function Header () {
    return (
        <>
        <div class="header__tag">
       
        <h1 class="browse__tag">Browse Our Movies</h1>
        
        </div>
        
        <div class="browse__list">
        
        <input type="text" id="searchInput" placeholder="Search..." />
        
        <button class="search__btn">Search</button>
        
        <div id="results"></div>
        
        </div>
        
        </>
    )
}

export default Header