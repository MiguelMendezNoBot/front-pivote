interface InfoCardProps {
  text: string;
}

export const InfoCard = ({ text }: InfoCardProps) => (
  <li className="rounded-lg border border-[#2b3e7e] bg-[#0f2361]/70 px-3 py-2 text-sm text-[#eef5ff]">
    - {text}
  </li>
);
