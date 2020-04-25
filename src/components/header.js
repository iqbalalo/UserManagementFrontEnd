import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="p-2" style={{background: "rgb(255,93,66)"}}>
                <span id="logo" style={{fontSize:"1.3rem", fontWeight:"500", color:"#fff", padding:4}}>ユーザー管理</span>
            </div>
        )
    }
}

export default Header
