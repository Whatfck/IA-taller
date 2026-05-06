export default function Home() {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-on-background)] min-h-screen flex flex-col">
      {/* TopAppBar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10" style={{ background: "rgba(19,19,20,0.8)", backdropFilter: "blur(24px)" }}>
        <div className="flex justify-between items-center px-10 py-4 max-w-[1440px] mx-auto">
          <div className="font-[var(--font-space-grotesk)] text-2xl font-bold tracking-tighter text-[var(--color-primary)] italic uppercase">
            NEON_VOID
          </div>
          <div className="hidden md:flex items-center gap-8">
            {["LORE","FEATURES","GALLERY","UNIVERSE"].map((item) => (
              <a key={item} href="#" className="text-[var(--color-on-surface-variant)] font-medium hover:text-[var(--color-primary)] transition-all duration-300 text-xs tracking-[0.1em] uppercase">
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden md:block text-xs text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors uppercase border border-transparent hover:border-[var(--color-primary)] px-4 py-2 tracking-[0.1em]">
              LOGIN
            </button>
            <button className="bg-[var(--color-primary)] text-[var(--color-on-primary)] text-xs px-6 py-3 uppercase tracking-[0.1em] font-bold transition-colors hover:bg-[var(--color-primary-container)] neon-glow clip-corner">
              BUY NOW
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-[80px]">
        {/* Hero */}
        <section className="relative h-[921px] flex items-center justify-center overflow-hidden fade-edge">
          <div className="absolute inset-0 z-0">
            <img
              alt="Cyberpunk City"
              className="w-full h-full object-cover opacity-60"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDd1x9sti2LbQUfKCfl9chGP-URP3oaYrcgNpGsrP6Od7sIeDaCew0f1QSaWZPHxnyqq8_HTdvq_NQt3bnEJjxRaTP2iySyDOYkGm9nplbPi8gU9b5EGFY_5RulArChzzWIldJJfVGEs-DATMy3ljYyAl9JNE4I8l25LdXI1KmBl2vWDdu-RQgy2Xx7WCDwbjmoS1w3xU5pD7PRa_c9M3olJYbpJklOi97sJzXvncINXGmNngAX3Oz-5tFZzpu7e5OqvDjP6yVna20K"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] via-[rgba(19,19,20,0.5)] to-transparent" />
          </div>
          <div className="relative z-10 text-center px-6 max-w-[1440px] mx-auto">
            <h1 className="text-[72px] leading-[1.1] font-bold tracking-[-0.02em] text-[var(--color-primary)] italic uppercase text-glow mb-6 font-[var(--font-space-grotesk)]">
              NEON VOID
            </h1>
            <p className="text-lg leading-[1.6] text-[var(--color-on-surface-variant)] max-w-2xl mx-auto mb-10">
              Enter the year 2099. Join the Void Squadron and engage in hyper-kinetic combat across a fractured solar system.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-[var(--color-primary)] text-[var(--color-on-primary)] text-xs px-8 py-4 uppercase tracking-[0.1em] font-bold hover:bg-[var(--color-primary-container)] transition-all hover:scale-105 neon-glow clip-corner w-full sm:w-auto">
                BUY NOW
              </button>
              <button className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] text-xs px-8 py-4 uppercase tracking-[0.1em] font-bold hover:bg-[rgba(219,252,255,0.1)] transition-all hover:scale-105 clip-corner-reverse w-full sm:w-auto flex items-center justify-center gap-2">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                WATCH TRAILER
              </button>
            </div>
          </div>
        </section>

        {/* Core Mechanics */}
        <section className="py-24 px-10 max-w-[1440px] mx-auto relative z-10">
          <h2 className="text-[40px] leading-[1.2] font-bold text-[var(--color-on-surface)] mb-12 text-center uppercase tracking-tight font-[var(--font-space-grotesk)]">
            Core Mechanics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "sports_martial_arts", title: "Hyper-Kinetic Combat", desc: "Master seamless traversal and fluid, high-octane melee and ranged combat systems. Combine abilities to dominate the neon-lit battlefields." },
              { icon: "rocket_launch", title: "Starship Customization", desc: "Build your ultimate interceptor from modular parts salvaged across the galaxy. Tune engines, weapons, and shielding to your playstyle." },
              { icon: "memory", title: "Neural Hacking", desc: "Infiltrate enemy networks, hijack synthetic adversaries, and manipulate environmental hazards through the deep-dive cyber-interface." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="glass-dark-card p-8 border border-[rgba(219,252,255,0.2)] hover:border-[rgba(219,252,255,0.5)] transition-colors clip-corner group">
                <span className="material-symbols-outlined text-4xl text-[var(--color-primary)] mb-6 block">{icon}</span>
                <h3 className="text-2xl font-semibold text-[var(--color-on-surface)] mb-4 uppercase font-[var(--font-space-grotesk)]">{title}</h3>
                <p className="text-[var(--color-on-surface-variant)] text-base">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Lore */}
        <section className="relative py-32 overflow-hidden border-y border-white/5 bg-[var(--color-surface-container-low)]">
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-30">
            <img
              alt="Deep Space"
              className="w-full h-full object-cover mix-blend-screen"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtXZVMEU6EMZ_OgqyMNapsBTo4il_FbvQyLN0wJeuc1jTZqTfz2KnVm6qHqT0X2h0X1IFAiRBUSHru65MK8MN1ffCAlI-Iim2PT4T99WnWqSp1Ct69xrlUxU-_wMsD3UTQcXP_innW0sUgcqmFeeFESV_GKyvvXbTnFFl9sNa9hPhETqh4pYe2td5EbfCGEVkbQeID4bWtYtA5wKRMrrOE0Ds7Zu36gfkhGDK8oT6DEuI9aq-kEWIbnzaSBKT4DZgjuPBb1SI0NjQI"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-surface-container-low)] to-transparent" />
          </div>
          <div className="relative z-10 px-10 max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <div className="text-xs font-bold text-[var(--color-primary)] mb-4 tracking-[0.2em] uppercase">FILE: 0042_UNIVERSE_LORE</div>
              <h2 className="text-[40px] leading-[1.2] font-bold text-[var(--color-on-surface)] mb-6 uppercase tracking-tight text-glow font-[var(--font-space-grotesk)]">
                A Fractured Solar System
              </h2>
              <p className="text-lg leading-[1.6] text-[var(--color-on-surface-variant)] mb-6">
                Earth is a memory. Humanity now clings to the jagged, neon-drenched asteroids and terraformed moons of the Outer Rim. Mega-corporations war for the last remnants of Isotope-9, employing mercenary Void Squadrons to do their dirty work.
              </p>
              <p className="text-lg leading-[1.6] text-[var(--color-on-surface-variant)] mb-8">
                You are a Freelancer, caught in the crossfire of corporate greed and a burgeoning AI rebellion. The void is unforgiving, and survival is a zero-sum game.
              </p>
              <button className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] text-xs px-8 py-3 uppercase tracking-[0.1em] font-bold hover:bg-[rgba(219,252,255,0.1)] transition-all clip-corner-reverse">
                EXPLORE THE LORE
              </button>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-24 px-10 max-w-[1440px] mx-auto relative z-10">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-[40px] leading-[1.2] font-bold text-[var(--color-on-surface)] uppercase tracking-tight font-[var(--font-space-grotesk)]">Visual Archives</h2>
            <a href="#" className="text-[var(--color-primary)] text-xs font-bold tracking-[0.1em] hover:text-[var(--color-primary-container)] transition-colors flex items-center gap-2 uppercase">
              VIEW FULL GALLERY <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1rtP52ebAGktaUD84AUmDLtYZjqW7snfKwetSaS86gpbL1a1XDO-wf6KnbeTNNRZW3V6-FDOB2EBfAK5ROGD0dnXLNIvna53eFuZSsmNMR_83yzKT3PcCdCpVLud8ylirhxTZKDLawsqM4IfNPYsPgk3JlTQ-B_c8Tm9ZAuP03NBY45IFqByQbJDt5y2HR1DdCyWMhLxmZfSwASFargik9gCoZjuYiXwK1itSVJArvVfC51X4_C9n_bdQ3ZbFfsv-qbLfIzXiSyBQ", span: "" },
              { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwgnmUkmyJOLjqa2GfFkS44DGnMq_kRnOWDRs0PvNcekNthNZFzgJkvYkv7YPIlkFwQgdcKTGm6aCvX04bIaNipSijpRXp25JRGbpKsO9dsAKWlqnyue4wbAHmykAs1qhflOQM-c3eETTOo742FpO-1Pin_2InL2cW_htYGvHYTtLt7qjnspPD5X9ECUYerJdXuSU98NxMVOMNbwenb5LTsT_0YDuzqGTyvLrEhAfmFuspdVOwXHr7GpNYFnZWc2PXXz-rmU82cc6X", span: "" },
              { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQW3Kw6m1gZLYMfTyH_a4N_fKPqGtKlbFuXx78f_msE896b3wcHwTscZ1gJbDikGTQQuwBwRIM7mUSTB_38c4H2wDW4STPkEAWzJinfqiNPxdBu603UrGaFve737EQsNJcMukxNTXDbbH_7nBZ0t-mfKHI_r3xNrx65h9rDHf1hvQPVtf5Ifzyhw_KfXdnKtu_5Lt-IpT2pURSdGEIKyJ_MZDV3n1V7nA5oKVwPN8jRS77XfkMbXZEDYOa2lGPgq8p5swZjbUvy69t", span: "" },
              { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAn6PHlegqmXgPctQ2hQN7cpTo2ZSjgMVfAA5l7Ucdq6XMgCo1DQuz5yycWxwVGTOCse38ywm2aqSBqGCEUPeW7VCGAyxE9n6WSR7NpQ00aZbbg3XC0uLk_2x_hRFB_j0FCYaggqgljLjfJ_M_6Dy1hs97wV8y1C9hKGGLeVCF6iR3SZa6b5tsD4hAlTVBkWCbyU45oi9OVMddGqccSoFMnRt493J69LkGKx27cmKW0filmWTsMIMf_E07Pg48LXi8FQ6jzV1F6Y_aq", span: "lg:col-span-2" },
              { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCugph6u6_7yFNCIErn2tjtYZ8Fhc4pLH_vD9PiCkEdvLcAENml00uc9oe7iCojhEdYD7Q7x07sOFVliyqWRuEi7MOaZUOjhXK_jtHQUV-CYM3y7aUBsXs_PwpfMlLSXGHGZisbci9b4LSCY9Xw8U4RNgljYxuNckmRyAE8IlGdqW04r_S2v58VQO2eS78KL6KtWvKgy8G1G99NGFxr7bSbbiMz87xmkAIMm8LGd1zouAR5z2rkLk1pRSDmPvaCuWWK4tpHgd1taiAa", span: "" },
            ].map(({ src, span }, i) => (
              <div key={i} className={`aspect-video bg-[var(--color-surface-container)] overflow-hidden group border border-white/5 hover:border-[rgba(219,252,255,0.5)] transition-colors ${span}`}>
                <img alt={`Gameplay screenshot ${i + 1}`} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transform" src={src} />
              </div>
            ))}
          </div>
        </section>

        {/* Editions */}
        <section className="py-24 relative z-10 bg-[rgba(53,52,54,0.3)] border-y border-white/5">
          <div className="px-10 max-w-[1440px] mx-auto">
            <h2 className="text-[40px] leading-[1.2] font-bold text-[var(--color-on-surface)] mb-16 text-center uppercase tracking-tight font-[var(--font-space-grotesk)]">
              Select Your Module
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Standard */}
              <div className="glass-dark-card p-8 border border-white/10 flex flex-col clip-corner">
                <h3 className="text-2xl font-semibold text-[var(--color-on-surface)] mb-2 uppercase font-[var(--font-space-grotesk)]">Standard Edition</h3>
                <div className="text-3xl font-bold text-[var(--color-on-surface-variant)] mb-6">$49.99</div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center gap-3 text-[var(--color-on-surface-variant)] text-base">
                    <span className="material-symbols-outlined text-[var(--color-primary)] text-sm">done</span> Base Game
                  </li>
                </ul>
                <button className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] text-xs px-4 py-3 uppercase tracking-[0.1em] font-bold hover:bg-[rgba(219,252,255,0.1)] transition-all w-full">PRE-ORDER</button>
              </div>
              {/* Deluxe */}
              <div className="glass-dark-card p-8 border border-[var(--color-primary)] neon-glow flex flex-col clip-corner relative md:-translate-y-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-primary)] text-[var(--color-on-primary)] text-[10px] px-3 py-1 uppercase tracking-widest font-bold">Recommended</div>
                <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-2 uppercase font-[var(--font-space-grotesk)]">Deluxe Edition</h3>
                <div className="text-3xl font-bold text-[var(--color-on-surface)] mb-6">$69.99</div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {["Base Game","Digital Soundtrack","Exclusive 'Neon' Ship Skin","48h Early Access"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[var(--color-on-surface)] text-base">
                      <span className="material-symbols-outlined text-[var(--color-primary)] text-sm">done</span> {item}
                    </li>
                  ))}
                </ul>
                <button className="bg-[var(--color-primary)] text-[var(--color-on-primary)] text-xs px-4 py-3 uppercase tracking-[0.1em] font-bold hover:bg-[var(--color-primary-container)] transition-all w-full">PRE-ORDER DELUXE</button>
              </div>
              {/* Legendary */}
              <div className="glass-dark-card p-8 border border-[rgba(235,178,255,0.3)] flex flex-col clip-corner">
                <h3 className="text-2xl font-semibold text-[var(--color-secondary)] mb-2 uppercase font-[var(--font-space-grotesk)]">Legendary Edition</h3>
                <div className="text-3xl font-bold text-[var(--color-on-surface-variant)] mb-6">$99.99</div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {["Everything in Deluxe","Season Pass 1","Physical Artbook (Digital Copy)"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[var(--color-on-surface-variant)] text-base">
                      <span className="material-symbols-outlined text-[var(--color-secondary)] text-sm">done</span> {item}
                    </li>
                  ))}
                </ul>
                <button className="border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] text-xs px-4 py-3 uppercase tracking-[0.1em] font-bold hover:bg-[rgba(235,178,255,0.1)] transition-all w-full">PRE-ORDER LEGENDARY</button>
              </div>
            </div>
          </div>
        </section>

        {/* Neural Feed */}
        <section className="py-24 px-10 max-w-[1440px] mx-auto relative z-10">
          <h2 className="text-[40px] leading-[1.2] font-bold text-[var(--color-on-surface)] mb-12 uppercase tracking-tight text-glow font-[var(--font-space-grotesk)]">
            Live Transmission // Neural Feed
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { handle: "@DevCom_01", color: "var(--color-primary)", icon: "campaign", time: "2 HOURS AGO", text: "Patch 0.9.4 deployed to test servers. Weapon balancing applied to the Plasma Caster. #NeonVoid #Update" },
              { handle: "@ConceptArt_Hub", color: "var(--color-secondary)", icon: "image", time: "5 HOURS AGO", text: "New environment concepts for Sector 7 leaked. Looking grim, runners. Stay sharp." },
              { handle: "@DevCom_01", color: "var(--color-primary)", icon: "campaign", time: "1 DAY AGO", text: "Server maintenance scheduled for 0400 UTC. Expected downtime: 2 hours. See you in the void." },
            ].map(({ handle, color, icon, time, text }, i) => (
              <div key={i} className="bg-[var(--color-surface-container)] border border-white/5 p-6 hover:border-[rgba(219,252,255,0.3)] transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs font-bold tracking-widest uppercase" style={{ color }}>{handle}</div>
                  <span className="material-symbols-outlined text-[var(--color-on-surface-variant)] text-sm">{icon}</span>
                </div>
                <p className="text-[var(--color-on-surface)] text-base mb-4">{text}</p>
                <div className="text-[var(--color-on-surface-variant)] text-[11px] tracking-[0.05em]">{time}</div>
              </div>
            ))}
            <div className="bg-[var(--color-surface-container)] border border-white/5 p-6 hover:border-[rgba(219,252,255,0.3)] transition-colors flex items-center justify-center">
              <a href="#" className="text-xs font-bold tracking-[0.1em] text-[var(--color-primary)] hover:text-[var(--color-primary-container)] flex flex-col items-center gap-2 uppercase">
                <span className="material-symbols-outlined text-3xl">hub</span>
                CONNECT TO NETWORK
              </a>
            </div>
          </div>
        </section>

        {/* System Requirements */}
        <section className="py-24 px-10 max-w-[1440px] mx-auto relative z-10 border-t border-white/5">
          <h2 className="text-[40px] leading-[1.2] font-bold text-[var(--color-on-surface)] mb-12 text-center uppercase tracking-tight font-[var(--font-space-grotesk)]">
            System Specifications
          </h2>
          <div className="bg-[var(--color-surface-container-low)] border border-white/10 p-1 lg:p-8 max-w-4xl mx-auto overflow-x-auto glass-panel">
            <table className="w-full text-left text-[13px] min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-6 text-[var(--color-on-surface)] text-xs font-bold uppercase tracking-wider w-1/4">Component</th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider w-3/8" style={{ color: "rgba(219,252,255,0.8)" }}>Minimum (1080p / 60fps)</th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider w-3/8" style={{ color: "rgba(235,178,255,0.8)" }}>Recommended (4K / 60fps)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-[var(--color-on-surface-variant)]">
                {[
                  ["OS", "Windows 10 64-bit", "Windows 11 64-bit"],
                  ["Processor", "Intel Core i5-8400 / AMD Ryzen 5 2600", "Intel Core i7-12700K / AMD Ryzen 7 5800X"],
                  ["Memory", "16 GB RAM", "32 GB RAM"],
                  ["Graphics", "NVIDIA GTX 1070 / AMD RX 5700 XT", "NVIDIA RTX 4070 / AMD RX 7800 XT"],
                  ["Storage", "80 GB available space (SSD required)", "80 GB available space (NVMe SSD)"],
                ].map(([comp, min, rec]) => (
                  <tr key={comp}>
                    <td className="py-4 px-6 font-medium text-[var(--color-on-surface)]">{comp}</td>
                    <td className="py-4 px-6">{min}</td>
                    <td className="py-4 px-6">{rec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[var(--color-surface-container-lowest)] w-full py-12 border-t border-white/5 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center px-10 max-w-[1440px] mx-auto gap-8">
          <div className="text-2xl font-bold text-[var(--color-secondary-fixed-dim)] italic uppercase tracking-tighter font-[var(--font-space-grotesk)]">
            NEON_VOID
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {["PRIVACY POLICY","TERMS OF SERVICE","SUPPORT","PRESS KIT"].map((item) => (
              <a key={item} href="#" className="text-xs text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary-fixed-dim)] transition-colors uppercase tracking-[0.1em]">
                {item}
              </a>
            ))}
          </div>
          <div className="text-xs text-[var(--color-on-surface-variant)] text-center md:text-right tracking-[0.05em]">
            © 2024 VOID SQUADRON INDUSTRIES. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}
