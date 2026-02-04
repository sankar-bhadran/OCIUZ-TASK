interface SectionWrapperProps {
  title: string;
  children: React.ReactNode;
}

const SectionWrapper = ({ title, children }: SectionWrapperProps) => {
  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
};

export default SectionWrapper;
