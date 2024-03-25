const Logo = ({ width = "100px" }) => {
  return <div className="rounded-md px-1 font-mono italic font-bold ms-1 md:ms-4 flex items-center text-xl">
    <img src="../../blogsite-icon.jpeg" className="w-6 h-6 rounded-md mr-1"/>
    <span>BlogSite</span>
    
    </div>;
};
export default Logo;
