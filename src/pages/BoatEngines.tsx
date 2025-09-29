import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import FadeInUp from "@/components/animations/FadeInUp";
import FadeInLeft from "@/components/animations/FadeInLeft";
import FadeInRight from "@/components/animations/FadeInRight";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import SEOHead from "@/components/seo/SEOHead";
import { getServiceStructuredData } from "@/components/seo/StructuredData";

const BoatEngines = () => {
  const boatEngineTypes = [
    {
      title: "TD Power",
      description: "Høykvalitets motorer fra 21 til 400 hestekrefter. Pålitelige og kostnadseffektive løsninger for marine anvendelser.",
      image: "/services/td-power.jpg",
      priceRange: "Fra 21-400 HK",
      link: "/produkter/td-power"
    },
    {
      title: "Hyundai SeasAll",
      description: "Kraftige marine motorer med høy ytelse gjennom hele turtallsområdet. Moderne teknologi og pålitelighet.",
      image: "/services/seasall.jpg",
      priceRange: "Varierende modeller",
      link: "/produkter/hyundai-seasall"
    },
    {
      title: "Aquamot",
      description: "Ledende produsent av høykvalitets og bærekraftige elektriske båtmotorer med tilhørende komponenter.",
      image: "/services/aquamot.webp",
      priceRange: "Elektriske løsninger",
      link: "/produkter/aquamot"
    }
  ];

  return (
    <div>
      <SEOHead
        title="Båtmotorer"
        description="Utforsk vårt utvalg av båtmotorer fra TD Power, Hyundai SeasAll og Aquamot. Pålitelige marine motorer fra 21-400 HK."
        structuredData={getServiceStructuredData("Marine Engine Sales", "Vi tilbyr et utvalg båtmotorer fra anerkjente produsenter som TD Power, Hyundai SeasAll og Aquamot.")}
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/boat.jpg"
            alt="Båtmotorer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50" />
        </div>
        <FadeInUp delay={0.2} className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <FadeInUp delay={0.4}>
            <span className="text-[0.7rem] uppercase tracking-[0.5em] text-amber-400 mb-4 block">
              Marine Motorer
            </span>
          </FadeInUp>
          <FadeInUp delay={0.6}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              BÅTMOTORER
            </h1>
          </FadeInUp>
          <FadeInUp delay={0.8}>
            <p className="text-lg sm:text-xl text-zinc-200 max-w-2xl mx-auto mb-8">
              Utforsk vårt utvalg av pålitelige båtmotorer fra anerkjente produsenter.
              Fokus på kvalitet og service.
            </p>
          </FadeInUp>
        </FadeInUp>
      </section>


      {/* Boat Engine Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-10">
          <FadeInUp delay={0.2} className="text-center mb-16">
            <h2 className="text-3xl font-semibold sm:text-4xl">Marine motorer vi tilbyr</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-6">
              Kontakt oss for tilgjengelighet, priser og spesifikasjoner
            </p>
          </FadeInUp>

          <StaggerContainer className="grid gap-8 md:grid-cols-3">
            {boatEngineTypes.map((engine, index) => (
              <StaggerItem key={index}>
                <div className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-lg">
                  <div className="aspect-[2/1] overflow-hidden">
                    <img
                      src={engine.image}
                      alt={engine.title}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-2">
                      <span className="text-xs font-medium uppercase tracking-[0.45em] text-amber-600">
                        {engine.priceRange}
                      </span>
                    </div>
                    <h3 className="mb-3 text-xl font-semibold">{engine.title}</h3>
                    <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                      {engine.description}
                    </p>
                    <Link
                      to={engine.link}
                      className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors"
                    >
                      Les mer om {engine.title} →
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Motor Range Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInLeft delay={0.2}>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Vårt motorutvalg</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="mt-2 h-px w-12 bg-amber-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">TD Power: 21-400 HK</h3>
                      <p className="text-slate-600 text-sm">Modeller på lager fra 21 til 270 HK. Større modeller på forespørsel.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="mt-2 h-px w-12 bg-amber-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Hyundai SeasAll</h3>
                      <p className="text-slate-600 text-sm">Kraftige motorer med høy ytelse og moderne teknologi.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="mt-2 h-px w-12 bg-amber-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Aquamot Elektrisk</h3>
                      <p className="text-slate-600 text-sm">Bærekraftige elektriske løsninger med batterier og ladere.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button asChild className="bg-amber-600 text-white hover:bg-amber-700">
                    <Link to="/kontakt">Kontakt for mer informasjon</Link>
                  </Button>
                </div>
              </div>
            </FadeInLeft>

            <FadeInRight delay={0.4}>
              <div className="relative">
                <img
                  src="/services/td-power.jpg"
                  alt="TD Power motor"
                  className="w-full rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent rounded-2xl" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-medium">TD Power motor</p>
                  <p className="text-xs opacity-90">Pålitelig og kostnadseffektiv</p>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden border-t border-zinc-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10"></div>

        <div className="container relative mx-auto px-4 py-24 lg:px-10">
          <FadeInUp delay={0.2} className="mx-auto max-w-3xl text-center">
            <FadeInUp delay={0.4}>
              <p className="text-[0.7rem] uppercase tracking-[0.5em] text-amber-400">Båtmotorer på forespørsel</p>
            </FadeInUp>
            <FadeInUp delay={0.6}>
              <h2 className="mt-8 text-3xl font-semibold text-white sm:text-4xl">
                Kontakt oss for båtmotor-forespørsler
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.8}>
              <p className="mt-6 text-base text-zinc-300 sm:text-lg">
                Mens vårt hovedfokus nå er på hjullastere og anleggsmaskiner,
                hjelper vi gjerne med båtmotor-forespørsler basert på dine behov.
              </p>
            </FadeInUp>
            <FadeInUp delay={1.0}>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="bg-amber-500 text-slate-900 hover:bg-amber-400">
                  <Link to="/kontakt">Send forespørsel</Link>
                </Button>
                <a
                  href="tel:90033402"
                  className="text-sm font-semibold uppercase tracking-[0.35em] text-zinc-300 transition hover:text-amber-400"
                >
                  900 33 402
                </a>
              </div>
            </FadeInUp>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
};

export default BoatEngines;