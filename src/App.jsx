import './App.css';
import cx from 'classnames';
import { Calculator } from './components/calculator/Calculator';
import { ThemeProvider } from './providers/ThemeProvide';
import { Layout } from './components/layout/Layout';

function App() {
    return (
        <ThemeProvider>
            <Layout className={cx('layout')}>
                <Calculator />
            </Layout>
        </ThemeProvider>
    );
}

export default App;
