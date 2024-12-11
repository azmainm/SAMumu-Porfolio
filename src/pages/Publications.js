import Card from '../components/Card';

const publications = [
  { title: 'Publication 1', description: 'Details about publication 1.', link: 'https://example.com/publication1' },
  { title: 'Publication 2', description: 'Details about publication 2.', link: 'https://example.com/publication2' },
  { title: 'Publication 3', description: 'Details about publication 3.', link: 'https://example.com/publication3' },
  { title: 'Publication 4', description: 'Details about publication 4.', link: 'https://example.com/publication4' },
];

const Publications = () => {
  return (
    <section id="publication" className="p-8">
      <h2 className="text-2xl font-bold mb-6">Publications</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {publications.map((pub, idx) => (
          <Card key={idx} {...pub} />
        ))}
      </div>
    </section>
  );
};

export default Publications;
