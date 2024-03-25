import { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../services/appwrite/config";
import { useSelector } from "react-redux";
import { Query } from "appwrite";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const userData = useSelector(state => state.auth.userData);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await appwriteService.getPosts([Query.equal("userId", userData.$id)]);
        if (result && result.documents) {
          setPosts([...result.documents]);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchData();
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Posts are empty
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
    return (
      <div className="w-full py-8">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {posts.map((post) => (
              <div key={post.$id} className="p-2">
                <PostCard {...post} />
              </div>
            ))}
          </div>
        </Container>
      </div>
    );
  
}
export default AllPosts;
