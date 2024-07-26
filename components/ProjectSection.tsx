interface ProjectSectionProps {
  title: string;
  content: string;
}

export default function ProjectSection({
  title,
  content,
}: ProjectSectionProps) {
    return (
        <div className="flex flex-col items-center text-center gap-2 lg:px-4 py-6 border-2 rounded-lg border-gray-50 transform transition duration-300 hover:scale-105">
          <h3 className="text-xl font-bold text-[#3C3C3C]">{title}</h3>
          <p className="mt-4">
            {content}
          </p>
        </div>
    )
}
