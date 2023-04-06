import './App.css';
import cx from 'classnames';
import { Calculator } from './components/calculator/Calculator';
import { ThemeProvider } from './providers/ThemeProvide';
import { Layout } from './components/layout/Layout';

function App({ className }) {
    return (
        <div>
            <ThemeProvider>
                <Layout className={cx('layout', className)}>
                    <Calculator />
                </Layout>
            </ThemeProvider>
        </div>
    );
}

export default App;
