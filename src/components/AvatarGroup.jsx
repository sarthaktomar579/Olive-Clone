const AVATARS = [
  "https://i.pravatar.cc/64?img=47",
  "https://i.pravatar.cc/64?img=32",
  "https://i.pravatar.cc/64?img=15",
  "https://i.pravatar.cc/64?img=68",
];

export default function AvatarGroup() {
  return (
    <div className="flex items-center -space-x-2.5">
      {AVATARS.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className="h-7 w-7 rounded-full border-2 border-cream object-cover shadow-sm"
          loading="lazy"
        />
      ))}
    </div>
  );
}
