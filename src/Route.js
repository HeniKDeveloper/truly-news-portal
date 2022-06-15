import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'
import ArticleComponent from './components/ArticleComponent'

export default function privateRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<App />} />
                <Route path="/" element={<App />} />
                <Route path="/articles" element={<ArticleComponent />} />
            </Routes>
        </BrowserRouter>
    )
}

