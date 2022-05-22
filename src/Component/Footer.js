import React from 'react';

const Footer = () => {

    let footerStyle = {
        position: 'absolute',
        
        width: "100%"
    }
    return (
        <div className='bg-dark text-light my-3' style={footerStyle}>
            <p className='text-center'>
                Copyright &copy; MyTodoList.com
            </p>
        </div>
    );
}

export default Footer;