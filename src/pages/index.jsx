import Layout from "./Layout.jsx";

import Home from "./Home";

import Services from "./Services";

import Portfolio from "./Portfolio";

import Blog from "./Blog";

import About from "./About";

import Community from "./Community";

import VPS from "./VPS";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    
    Services: Services,
    
    Portfolio: Portfolio,
    
    Blog: Blog,
    
    About: About,
    
    Community: Community,
    
    VPS: VPS,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/Services" element={<Services />} />
                
                <Route path="/Portfolio" element={<Portfolio />} />
                
                <Route path="/Blog" element={<Blog />} />
                
                <Route path="/About" element={<About />} />
                
                <Route path="/Community" element={<Community />} />
                
                <Route path="/VPS" element={<VPS />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}