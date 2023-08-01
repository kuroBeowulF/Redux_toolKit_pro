import PageContainer from "./layout/PageContainer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import CreatePost from "./pages/CreatePost";
import Posts from "./pages/Posts";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <PageContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageContainer>
  );
}

export default App;
