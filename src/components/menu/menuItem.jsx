import { Link } from "react-router-dom";
const MenuItem = ({ link, pageName }) => {
  return (
    <Link
      to={link}
      className="text-white/90 hover:text-white font-mono border-2 rounded-2xl h-12 p-2"
    >
      {pageName}
    </Link>
  );
};

export default MenuItem;
