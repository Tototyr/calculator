import { useState } from 'react';
import './App.css';
import { Calculator } from './components/calculator/Calculator';
import { ThemeProvider } from './providers/ThemeProvide';
import { Layout } from './components/layout/Layout';

function App() {
    return (
        <div className="App">
            <ThemeProvider>
                <Layout className="layout">
                    <Calculator />
                </Layout>
            </ThemeProvider>
        </div>
    );
}

export default App;
