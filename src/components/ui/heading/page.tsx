

export default function Heading({ headingEn, headingJa }: { headingEn: string; headingJa: string }) {
  return (
    <div> 
      <h2 className="text-4xl text-blue-900">{headingEn}</h2>
      <p className="pb-5">{headingJa}</p>
    </div>
  );
}