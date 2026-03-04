interface StructuredDataProps {
  schemas: Record<string, unknown>[];
}

export default function StructuredData({ schemas }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}
