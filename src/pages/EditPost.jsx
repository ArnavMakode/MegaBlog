import { useState, useEffect } from "react";
import { Container, PostForm } from "../components";
import appwriteServices from "../services/appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteServices.getPost(slug).then((resPost) => {
        if (resPost) setPost(resPost);
      });
    } else navigate("/");
  }, [slug, navigate]);

  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}
export default EditPost;
