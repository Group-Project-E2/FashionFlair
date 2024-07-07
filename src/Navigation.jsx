function Navigation() {
    return (
        <div>
            <nav className='nav-bar'>
          <div className='nav-line1'>
            <div className='nav-group1'>
              <div className='nav-links1'>
                <a href='/Lofin/Register'>Login/Register</a>
              </div>
              <a href='/'>Fashen</a>
            </div>
            <div className='Cart-section'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
            Cart
            </div>
            <div className='Favourite'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            Favourite
            </div>
          </div>
          <div className='nav-line2'>
            <div className='nav-group2'>
              <div className='nav-links2'>
                <a href='/Home'>Home</a>
                <a href='Shop'>Shop</a>
                <a href='/Vachers'>Vachers</a>
                <a href='/Abpot Us'>About Us</a>
                <a href='/Countact Us'>Countact Us</a>
              </div>
            </div>
          </div>
        </nav>
        </div>
    )
}

export default Navigation;