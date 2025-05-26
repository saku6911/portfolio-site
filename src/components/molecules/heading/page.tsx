import HeadingMd from "../../atoms/heading/headingMd";

export default function Heading({
  headingEn,
  headingJa,
}: {
  headingEn: string;
  headingJa: string;
}) {
  return (
    <div>
      <HeadingMd>{headingEn}</HeadingMd>
      <p className="pb-5">{headingJa}</p>
    </div>
  );
}
