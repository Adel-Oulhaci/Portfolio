function SkillCard({ title, icon, description }) {
  return (
    <div className="bg-[#61efff] backdrop-blur-md sm:hover:scale-105 rounded-2xl p-4 sm:p-6 hover:bg-gray-700 transition-all duration-300 cursor-pointer group">
      <div className="flex flex-col items-center text-center gap-3 sm:gap-4">
        <div className="text-white group-hover:scale-x-110 group-hover:text-[#61efff] transition-colors">
          {icon}
        </div>
        <h3 className="text-lg sm:text-xl group-hover:text-gray-300 font-bold text-gray-700">{title}</h3>
        <p className="text-gray-700 group-hover:text-gray-300 text-md sm:text-lg">{description}</p>
      </div>
    </div>
  );
}

export default SkillCard;