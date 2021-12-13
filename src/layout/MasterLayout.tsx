import './MasterLayout.css';

import React from 'react';

import { Content } from './components/content/content';
import { Header } from './components/header/Header';


const MasterLayout: React.FC = ({ children }) => {
    return (
        <>
            <div className="app-wrapper">

                <div className="wrapper">
                    <Header />
                    <Content> {children} </Content>
                </div>
            </div>
        </>
    )
}

export { MasterLayout }

