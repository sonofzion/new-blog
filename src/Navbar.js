const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1> Son of Zion Blog</h1>
            <div className="links">
            <a href="/">Home</a>
            <a href="/"create style={{
                color: 'white',
                backgroundColor: '#f1356d',
                BorderRadius:'8px',
            }}>New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;