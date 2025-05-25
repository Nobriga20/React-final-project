function Header () {
    return (
        <>
         
       <img
       
       src="./module 4 prject assets/55555.jpg"
       
       className="movie__logo"
       
       alt=""
       
       />
        <div class="header__tag">
       
        <h1 className="browse__tag">Browse Our Movies</h1>
        
        </div>
        
        <div className="browse__list">
        
        <input type="text" id="searchInput" placeholder="Search..." />
        
        <button className="search__btn">Search</button>
        
        <div id="results"></div>
        
        </div>
        
        </>
    )
}

export default Header