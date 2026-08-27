import { useEffect } from "react";
import { faqs } from "@/lib/faqs";
import { cn } from "@/lib/utils";

function Em({ children }: { children: React.ReactNode }) {
  return <em className="not-italic text-primary">{children}</em>;
}

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("mx-auto max-w-6xl px-6 md:px-12 lg:px-16", className)}>{children}</div>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 text-3xl font-bold tracking-tight text-primary md:text-4xl [&_em]:font-semibold">
      {children}
    </h2>
  );
}

function SectionText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("max-w-xl text-base leading-relaxed text-muted", className)}>{children}</p>;
}

function ImageFrame({ src, alt, className = "reveal-left" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={cn("relative aspect-[4/5] overflow-hidden rounded-[10px] border border-border", className)}>
      <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover object-top" loading="lazy" />
    </div>
  );
}

export function SiteSections() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="about" className="border-y border-border bg-card py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <ImageFrame src="/flying-cockpit.jpg" alt="Dawson Gant in the cockpit of a private plane during golden hour" />
            <div className="reveal-right">
              <SectionHeading>
                Started at 18. <Em>Never stopped.</Em>
              </SectionHeading>
              <SectionText>
                Dawson Gant got into real estate at eighteen with no connections and nothing to fall back on. Inside a few years he had flipped and built more than a hundred houses. He learned construction on site, which is where the eye for a deal came from. Spreadsheets do not teach you what a bad foundation smells like.
              </SectionText>
              <div className="my-8 h-px w-12 bg-primary/12" />
              <SectionText>
                Next came a sales and marketing agency built around info and education offers, where he took clients to multiple seven figures per month. At 27 he moved into telehealth and built a brand to seven figures in four months. Today he works out of Scottsdale running a growth operations practice that partners with founders and takes their offers past seven figures. He attended North Carolina A&T State University and left to build full-time. Outside the work he flies as a licensed private pilot, races competitively, and plays a public course in Scottsdale most mornings. At home there are two dogs, Bobby the Doberman and Thatch the German Shepherd.
              </SectionText>
              <div className="mt-10 flex flex-wrap gap-10 border-t border-border pt-8">
                {[["100+", "Houses Built and Flipped"], ["7 Fig", "Donated to Charity"], ["18", "Age He Started"]].map(([n, l]) => (
                  <div key={l}>
                    <div className="text-3xl font-bold text-primary">{n}</div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="philosophy" className="py-20 md:py-28">
        <Container>
          <div className="reveal">
            <SectionHeading>
              How Dawson Gant <Em>thinks about building.</Em>
            </SectionHeading>
            <SectionText>
              Every venture runs on the same principle. Build infrastructure that compounds. He does not chase trends. He builds systems that outlast cycles and pay off for partners, communities, and the people closest to the work.
            </SectionText>
          </div>
          <div className="mx-auto mt-12 max-w-3xl">
            {[
              ["01 Operator First", "He is not an advisor. He gets in the room, gets his hands dirty, and operates next to his partners. Same intensity on a Scottsdale real estate deal, an agency account running seven figures a month, or a telehealth brand rebuilding how people access care. Advisors give opinions. Operators produce outcomes."],
              ["02 Quiet Execution", "He does not announce plans. He executes and lets the results stack. That is how a hundred houses got flipped, how a telehealth venture hit seven figures in four months, and how most of his partnerships got built without a single post about it. The scoreboard is loud enough."],
              ["03 Give More Than You Take", "Seven figures have gone to charitable organizations, including Big Brothers Big Sisters Miami, where he backs mentorship programs that change where a kid ends up. Giving is not the victory lap. It is the point."],
            ].map(([title, body]) => (
              <div key={title} className="reveal border-b border-border py-7">
                <h3 className="mb-2.5 text-lg font-semibold text-primary">{title}</h3>
                <p className="text-[0.94rem] leading-relaxed text-muted">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="track-record" className="border-y border-border bg-card py-20 md:py-28">
        <Container>
          <div className="grid items-start gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <div className="reveal">
                <SectionHeading>
                  A decade of <Em>building.</Em>
                </SectionHeading>
                <SectionText>
                  Close to ten years building, investing, and operating across four industries. Here is what Dawson Gant has put together since eighteen.
                </SectionText>
              </div>
              <div className="mt-12">
                {[
                  ["100+ Houses Flipped and Built", "He started at 18 and has flipped or built over a hundred houses since. Acquisitions, renovations, ground-up builds. He has run every phase himself, which is why the numbers pencil before the crew shows up. The portfolio sits in and around Scottsdale and reflects years of disciplined buying and hands-on work."],
                  ["Sales and Marketing Agency", "Between real estate and telehealth he ran a sales and marketing agency built for info and education offers. Clients went to multiple seven figures per month. That playbook became the backbone of everything he runs today."],
                  ["Telehealth to Seven Figures in Four Months", "At 27 he saw an opening in telehealth and built a brand to seven figures in revenue inside four months. Different industry, same operator mentality, same result."],
                  ["Scaling Offers Through Partnership", "He partners with operators and founders and takes offers from early traction to seven figures and past it. He brings growth infrastructure, operating systems, and his own hands. A partnership here is not a handshake and a check. It is shared execution and shared upside."],
                ].map(([title, body]) => (
                  <div key={title} className="reveal border-b border-border py-7">
                    <h3 className="mb-2.5 text-lg font-semibold text-primary">{title}</h3>
                    <p className="text-[0.94rem] leading-relaxed text-muted">{body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal-right md:sticky md:top-24">
              <ImageFrame
                src="/post3-1.jpg"
                alt="Modern residential home with contemporary architecture, part of Dawson Gant's real estate portfolio"
              />
            </div>
          </div>
        </Container>
      </section>

      <section id="telehealth" className="border-b border-border bg-card py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <ImageFrame src="/dawson-gant-private-jet.jpg" alt="Dawson Gant smiling on the tarmac beside a private jet at golden hour" />
            <div className="reveal-right space-y-6">
              <SectionHeading>
                The backend <Em>is the moat.</Em>
              </SectionHeading>
              {[
                "At 27, Dawson Gant got into telehealth. Not with a landing page and a prayer. With infrastructure. Third-party logistics. Compliance frameworks. Payment processing built for regulated products. Supplier vetting across multiple countries. Cold chain fulfillment that actually holds. Every layer stress-tested before a dollar of media went out.",
                "The operation centers on peptide research, hormone optimization, and personalized wellness protocols. Most brands in this category scale first and patch the holes later. He built the pipes first. That call has already put product in the hands of more than ten thousand consumers while competitors are still untangling their supply chains.",
                "Telehealth is on track to pass $160 billion globally at a 14.7% compound annual growth rate, and the space is heading into consolidation. Brands that cut corners get squeezed out by tightening regulation and rising expectations. The target is a hundred thousand consumers inside eighteen months, and the fulfillment network is already sized for ten times current volume.",
                "There are two kinds of companies here. The ones that look good on social, and the ones that can ship, stay compliant, and survive an audit. He is building the second kind.",
              ].map((text) => (
                <SectionText key={text.slice(0, 24)}>{text}</SectionText>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="aviation" className="border-b border-border bg-card py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="reveal-left">
              <SectionHeading>
                The <Em>whole</Em> picture.
              </SectionHeading>
              <SectionText>
                Dawson Gant holds a private pilot license and flies as often as the calendar allows. He races competitively and plays a public course in Scottsdale most mornings before the day starts. At home he is a dog dad to Bobby the Doberman and Thatch the German Shepherd. A full life means showing up everywhere, not just at the office.
              </SectionText>
            </div>
            <ImageFrame src="/JCA00070.jpg" alt="Dawson Gant standing beside a red race car at the track with a Gas Monkey trailer in the background" className="reveal-right" />
          </div>
        </Container>
      </section>

      <section id="giving" className="border-b border-border bg-card py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <ImageFrame src="/dawson-gant-giving-back.jpg" alt="Dawson Gant volunteering at a youth mentorship event, seated at a table with children doing arts and crafts" />
            <div className="reveal-right">
              <SectionHeading>
                Seven figures <Em>given back.</Em>
              </SectionHeading>
              <SectionText>
                Dawson Gant has given seven figures to organizations doing work that shows up in real outcomes. The one closest to him is Big Brothers Big Sisters Miami, where he funds mentorship programs that change a kid's trajectory before anyone else gets the chance to.
              </SectionText>
              <SectionText className="mt-5">
                Success without contribution is half a career. Every milestone is another opening to put something into the next generation. There is no campaign attached to this and no announcement schedule. He gives because the community that carries a builder deserves a builder who carries it back.
              </SectionText>
              <blockquote className="mt-10 border-l-2 border-primary pl-7 text-xl font-medium leading-snug text-primary/90">
                "The work only matters if it creates something beyond yourself. Building is not just revenue. It is what you leave behind."
                <cite className="mt-4 block text-xs font-semibold uppercase tracking-wider not-italic text-primary">Dawson Gant</cite>
              </blockquote>
            </div>
          </div>
        </Container>
      </section>

      <section id="faq" className="py-20 md:py-28">
        <Container>
          <div className="reveal mb-12 text-center">
            <SectionHeading>
              What people ask <Em>about Dawson Gant.</Em>
            </SectionHeading>
          </div>
          <div className="grid items-start gap-10 md:grid-cols-2 md:gap-16">
            <div>
              {faqs.map(({ q, a }) => (
                <article key={q} className="faq-item reveal border-b border-border py-7">
                  <h3 className="mb-2.5 text-lg font-semibold text-primary">{q}</h3>
                  <p className="text-[0.94rem] leading-relaxed text-muted">{a}</p>
                </article>
              ))}
            </div>
            <div className="reveal-right md:sticky md:top-24">
              <ImageFrame
                src="/dogs-bobby-thatch.jpg"
                alt="Bobby the Doberman and Thatch the German Shepherd, Dawson Gant's two dogs, sitting together"
              />
            </div>
          </div>
        </Container>
      </section>

      <section id="connect" className="py-24 text-center md:py-32">
        <Container>
          <div className="reveal">
            <SectionHeading>
              Let's build <Em>something.</Em>
            </SectionHeading>
            <SectionText className="mx-auto">
              Dawson Gant is open to conversations about partnerships, real estate, and ventures worth building.
            </SectionText>
          </div>
        </Container>
      </section>

      <footer className="border-t border-border bg-card py-9">
        <Container className="flex flex-col items-center gap-3 text-center">
          <p className="text-xs text-muted-foreground">Dawson Gant. Scottsdale, Arizona.</p>
          <nav className="flex flex-wrap justify-center gap-4 text-xs text-muted" aria-label="Social links">
            <a href="https://www.dawsongant.co" className="hover:text-primary">dawsongant.co</a>
            <a href="/blog/" className="hover:text-primary">Blog</a>
            <a href="https://www.instagram.com/dawsongant/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Instagram</a>
            <a href="https://x.com/dawsongant" target="_blank" rel="noopener noreferrer" className="hover:text-primary">X</a>
            <a href="https://medium.com/@dawsongant62" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Medium</a>
          </nav>
          <p className="text-xs text-muted-foreground">
            Last updated:{" "}
            <time dateTime={new Date().toISOString().split("T")[0]}>
              {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </time>
          </p>
        </Container>
      </footer>
    </>
  );
}
