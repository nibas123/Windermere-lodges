interface PageHeaderProps {
  title: string
  description: string
  backgroundImage: string
}

export function PageHeader({ title, description, backgroundImage }: PageHeaderProps) {
  return (
    <div
      className="relative pt-32 pb-20 flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl max-w-2xl mx-auto">{description}</p>
      </div>
    </div>
  )
}

