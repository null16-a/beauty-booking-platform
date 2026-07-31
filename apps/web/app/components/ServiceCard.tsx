type ServiceCardProps = {
  title: string;
  description: string;
  price: string;
};

export default function ServiceCard({
  title,
  description,
  price,
}: ServiceCardProps) {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-8 transition hover:shadow-lg">
      <h3 className="text-2xl font-semibold text-neutral-900">
        {title}
      </h3>

      <p className="mt-4 text-neutral-600">
        {description}
      </p>

      <p className="mt-6 text-lg font-medium text-neutral-900">
        {price}
      </p>
    </div>
  );
}