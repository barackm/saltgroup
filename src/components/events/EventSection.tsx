interface EventSectionProps {
  title: string;
  children: React.ReactNode;
}

export const EventSection = ({ title, children }: EventSectionProps) => {
  return (
    <div className="space-y-4">
      <h2 className="font-display text-3xl font-bold text-gray-900 border-b border-gray-200 pb-2">
        {title}
      </h2>
      <div className="prose prose-lg max-w-none text-gray-700">{children}</div>
    </div>
  );
};
