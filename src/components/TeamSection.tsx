const team = [
  { name: "Rahul Sunny", reg: "NCE25CS093" },
  { name: "Jishnu Prakash J", reg: "NCE25CS063" },
  { name: "Jennifer John", reg: "NCE25CS064" },
  { name: "Shamsiya Shamsudheen", reg: "NCE25CS102" },
  { name: "Shahana K", reg: "NCE25CS101" },
];

const TeamSection = () => (
  <section id="team" className="py-20 px-4">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
        Meet the <span className="text-gradient">Team</span>
      </h2>
      <p className="text-muted-foreground text-center mb-12">The people behind HateGuard AI</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {team.map((member) => (
          <div
            key={member.reg}
            className="flex flex-col items-center gap-2 p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm"
          >
            <h3 className="font-semibold text-lg text-foreground">{member.name}</h3>
            <p className="text-sm text-muted-foreground">{member.reg}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
