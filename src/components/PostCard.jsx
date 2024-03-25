import { Link } from "react-router-dom";
import service from "../services/appwrite/config";

function PostCard({ $id, title, featuredImages }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full mb-4 h-[250px]">
          <img
            src={service.getFilePreview(featuredImages)}
            alt={title}
            className="rounded-xl w-full h-full object-contain object-center"
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}
export default PostCard;
