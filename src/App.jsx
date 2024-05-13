import {useState} from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Login from "./pages/Login.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import ProtectedRoute from "./features/auth/ProtectedRoute.jsx";
import AppLayout from "./layout/AppLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import PostForm from "./features/posts/PostForm.jsx";
import PostContent from "./features/posts/PostContent.jsx";
import Post from "./pages/Post.jsx";
import Register from "./pages/Register.jsx";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState({isLoading: false, error: null, user: {username: "", roles: []}})
    console.log(user)

    return (
        <BrowserRouter>
            <Routes>
                <Route element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                        <AppLayout setIsAuthenticated={setIsAuthenticated} roles={user.user.roles}/>
                    </ProtectedRoute>}>
                    <Route index element={<Navigate to="home"/>}/>
                    <Route path="home" element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="settings" element={<h4>Settings</h4>}/>
                    <Route path='posts' element={<Post/>}>
                        <Route path="new" element={<PostForm/>}/>
                        <Route path=':postId' element={<PostContent/>}/>
                    </Route>
                </Route>
                <Route path="login" element={<Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} {...user} />} />
                <Route path="register" element={<Register isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} {...user} />} />
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
