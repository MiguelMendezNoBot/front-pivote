interface RepoFieldProps {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
}

export const RepoField = ({ label, value, icon }: RepoFieldProps) => (
  <div className="flex flex-col gap-0.5">
    <span className="text-[10px] uppercase tracking-widest text-[#5a78b8] font-semibold">
      {label}
    </span>
    <div className="flex items-center gap-1.5 text-sm text-[#dae8ff]">
      {icon && <span className="text-[#7c9ef0]">{icon}</span>}
      <span className="truncate">{value ?? '—'}</span>
    </div>
  </div>
);
