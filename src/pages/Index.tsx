import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import heroMarineEngines from "@/assets/hero-marine-engines.jpg";
import heroWorkshop from "@/assets/hero-workshop.jpg";
import heroConstruction from "@/assets/hero-construction.jpg";
import FadeInUp from "@/components/animations/FadeInUp";
import FadeInLeft from "@/components/animations/FadeInLeft";
import FadeInRight from "@/components/animations/FadeInRight";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import ScaleIn from "@/components/animations/ScaleIn";
import SEOHead from "@/components/seo/SEOHead";
import { getOrganizationStructuredData } from "@/components/seo/StructuredData";
import { featuredProducts, formatPrice } from "@/data/products";

const Index = () => {
  const heroImages = ["/hero2.avif", "/hero3.avif"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="bg-zinc-50 text-slate-900">
      <SEOHead
        title="Hjem"
        description="Telemark Trade - Norges ledende leverandør av hjullastere, anleggsmaskiner og båtmotorer. Kvalitet, service og erfaring siden 2000."
        structuredData={getOrganizationStructuredData()}
      />
      
      <section className="relative isolate overflow-hidden h-screen">
        {heroImages.map((image, index) => (
          <img
            key={image}
            src={image}
            alt="Hjullaster i arbeid"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative mx-auto grid min-h-[calc(100vh-42px)] gap-16 px-4 pb-20 pt-40 lg:grid-cols-[1.1fr,0.9fr] lg:items-center lg:px-10">
          <FadeInLeft delay={0.2} className="space-y-10 text-slate-100">
            <FadeInUp delay={0.6}>
              <h1 className="text-5xl font-semibold leading-tight text-white">
              Hjullastere, anleggsmaskiner og båtmotorer
              </h1>
            </FadeInUp>
            <FadeInUp delay={0.8}>
              <p className="max-w-xl text-base text-zinc-100/80 sm:text-lg">
                Telemark Trade leverer hjullastere, anleggsmaskiner og båtmotorer som holder i alle værforhold.
                Fokus på hjullastere og anleggsmaskiner - kvalitet, service og erfaring siden 2000.
              </p>
            </FadeInUp>
            <FadeInUp delay={1.0}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button asChild size="lg" className="bg-amber-400 text-slate-900 hover:bg-amber-300">
                  <Link to="/kontakt">Kontakt oss</Link>
                </Button>
              </div>
            </FadeInUp>
          </FadeInLeft>
        </div>
      </section>

      <section className="border-b border-zinc-200 bg-white">
        <div className="container mx-auto px-4 py-28 lg:px-10">
          <div className="lg:grid lg:grid-cols-[auto,1fr] lg:items-start lg:gap-20">
            <FadeInLeft delay={0.2} className="hidden lg:flex flex-col items-center">
              <span className="rotate-90 text-[0.65rem] uppercase tracking-[0.6em] text-zinc-400">Telemark</span>
              <div className="mt-20 h-64 w-px bg-gradient-to-b from-zinc-400 via-zinc-300/40 to-transparent" />
            </FadeInLeft>
            <div className="space-y-12">
              <FadeInUp delay={0.4}>
                <div className="max-w-3xl">
                  <h2 className="text-3xl font-semibold sm:text-4xl">Din pålitelige partner for hjullastere og anleggsmaskiner.</h2>
                  <p className="mt-6 text-base text-slate-600 sm:text-lg">
                    Vi leverer hjullastere, anleggsmaskiner, aggregater og båtmotorer til kunder over hele Norge.
                    Hovedfokus på Everun hjullastere og tilbehør. Lokalisert i Bø i Telemark.
                  </p>
                </div>
              </FadeInUp>

              <StaggerContainer className="grid gap-8 md:grid-cols-2">
                <StaggerItem>
                  <div className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md">
                    <div className="aspect-[2/1] overflow-hidden">
                      <img
                        src="/services/wheel.jpg"
                        alt="EVERUN hjullastere og anleggsmaskiner"
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="mb-2">
                        <span className="text-xs font-medium uppercase tracking-[0.45em] text-amber-600">EVERUN HJULLASTERE</span>
                      </div>
                      <h3 className="mb-3 text-xl font-semibold">Kraftige hjullastere</h3>

                      <Link to="/produkter?category=wheel-loaders" className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors">
                        Se alle hjullastere →
                      </Link>
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md">
                    <div className="aspect-[2/1] overflow-hidden">
                      <img
                        src="/extension/1.avif"
                        alt="Aggregater og tilbehør"
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="mb-2">
                        <span className="text-xs font-medium uppercase tracking-[0.45em] text-amber-600">AGGREGATER</span>
                      </div>
                      <h3 className="mb-3 text-xl font-semibold">Dieselaggregater & tilbehør</h3>

                      <Link to="/produkter?category=aggregates" className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors">
                        Se alle aggregater →
                      </Link>
                    </div>
                  </div>
                </StaggerItem>
              </StaggerContainer>

              <FadeInUp delay={0.6}>
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-6 text-center">Utvalgte hjullastere</h3>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {featuredProducts.slice(0, 3).map((product) => (
                      <div key={product.id} className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md">
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full object-cover transition-transform group-hover:scale-105"
                          />
                        </div>
                        <div className="p-4">
                          <div className="mb-2">
                            <span className="text-xs font-medium uppercase tracking-[0.45em] text-amber-600">{product.year}</span>
                          </div>
                          <h4 className="mb-2 text-lg font-semibold">{product.name}</h4>
                          <p className="text-slate-600 mb-3 text-sm">{product.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xl font-bold text-[#19334c]">{formatPrice(product.price)}</span>
                            <Link
                              to={`/produkt/${product.id}`}
                              className="text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors"
                            >
                              Se detaljer →
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.8}>
                <div className="relative overflow-hidden rounded-3xl border border-[#19334c]/20 bg-[#19334c]/5 p-10 shadow-sm">
                  <div className="">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Spesialist på hjullastere og anleggsmaskiner</h3>
                    <p className="text-base text-slate-700 mb-4">
                      Everun hjullastere fra <span className="font-semibold text-[#19334c]">99 900 til 249 900 kr</span>.
                      Elektriske og dieselmodeller tilgjengelig. Aggregater fra 44 900 kr.
                    </p>
                  </div>
                  <p className="mt-6 text-xs uppercase tracking-[0.45em] text-[#19334c]">Telemark Trade AS</p>
                </div>
              </FadeInUp>
                  </div>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="container mx-auto grid gap-16 px-4 py-28 lg:grid-cols-[1.1fr,0.9fr] lg:px-10">
          <FadeInLeft delay={0.2} className="space-y-8">
            <FadeInUp delay={0.4}>
              <span className="text-[0.7rem] uppercase tracking-[0.5em] text-[#19334c]">Vår ekspertise</span>
            </FadeInUp>
            <FadeInUp delay={0.6}>
              <h2 className="text-3xl font-semibold sm:text-4xl">Høy kompetanse i vårt felt</h2>
            </FadeInUp>
            <FadeInUp delay={0.8}>
              <div className="space-y-6 text-sm text-slate-600 sm:text-base">
                <p>
                  Mange års erfaring gjør oss til en viktig ressurs for dere som leter etter båtmotorer eller anleggsmaskiner.
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={1.0}>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-slate-900">Leter du etter ny båtmotor?</h3>
                <div className="space-y-4 text-sm text-slate-600 sm:text-base">
                  <p>
                    Bedre alternativ enn brukt motor. Hvorfor betale dobbelt fra store leverandører?
                  </p>
                  <StaggerContainer className="space-y-3">
                    <StaggerItem>
                      <div className="flex gap-4">
                        <span className="mt-2 h-px w-12 bg-[#19334c] flex-shrink-0" aria-hidden />
                        <p>Vi har en liten organisasjon med god service</p>
                      </div>
                    </StaggerItem>
                    <StaggerItem>
                      <div className="flex gap-4">
                        <span className="mt-2 h-px w-12 bg-[#19334c] flex-shrink-0" aria-hidden />
                        <p>Forhandlere flere steder i landet som hjelper med installasjoner</p>
                      </div>
                    </StaggerItem>
                    <StaggerItem>
                      <div className="flex gap-4">
                        <span className="mt-2 h-px w-12 bg-[#19334c] flex-shrink-0" aria-hidden />
                        <p>Fullt reservedelslager og levering nasjonalt</p>
                      </div>
                    </StaggerItem>
                    <StaggerItem>
                      <div className="flex gap-4">
                        <span className="mt-2 h-px w-12 bg-[#19334c] flex-shrink-0" aria-hidden />
                        <p>Opptil fire års garanti og CE-godkjente motorer</p>
                      </div>
                    </StaggerItem>
                  </StaggerContainer>
                </div>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={1.2}>
              <Button asChild variant="outline" className="border-[#19334c] text-[#19334c] hover:bg-[#19334c] hover:text-white">
                <Link to="/kontakt">
                  Kontakt oss i dag
                </Link>
              </Button>
            </FadeInUp>
          </FadeInLeft>
          
          <FadeInRight delay={0.4}>
            <div className="relative isolate overflow-hidden rounded-3xl border border-zinc-200 bg-white">
              <img
                src="/boat.jpg"
                alt="Båtmotor installasjon"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 via-zinc-800/30 to-transparent" />
              <div className="absolute bottom-10 left-10 space-y-4 text-zinc-100">
                <p className="text-xs uppercase tracking-[0.45em] text-white/90">Profesjonell installasjon</p>
                <p className="max-w-sm text-sm text-zinc-100/90">
                  Vi håndterer hele installasjonsprosessen fra start til slutt, slik at motoren står klar til bruk.
                </p>
              </div>
            </div>
          </FadeInRight>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-zinc-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10"></div>
        
        <div className="container relative mx-auto px-4 py-24 lg:px-10">
          <FadeInUp delay={0.2} className="mx-auto max-w-3xl text-center">
            <FadeInUp delay={0.4}>
              <p className="text-[0.7rem] uppercase tracking-[0.5em] text-amber-400">Klar når du trenger oss</p>
            </FadeInUp>
            <FadeInUp delay={0.6}>
              <h2 className="mt-8 text-3xl font-semibold text-white sm:text-4xl">La oss finne løsningen sammen.</h2>
            </FadeInUp>
            <FadeInUp delay={0.8}>
              <p className="mt-6 text-base text-zinc-300 sm:text-lg">
                Ring eller send kravspesifikasjonen. Vi møter deg med forslag, deler og 
                mannskap som kjenner både båten og havna.
              </p>
            </FadeInUp>
            <FadeInUp delay={1.0}>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="bg-amber-500 text-slate-900 hover:bg-amber-400 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link to="/kontakt">Snakk med Telemark</Link>
                </Button>
                <a
                  href="tel:+4735952500"
                  className="text-sm font-semibold uppercase tracking-[0.35em] text-zinc-300 transition hover:text-amber-400 hover:scale-105"
                >
                  +47 35 95 25 00
                </a>
              </div>
            </FadeInUp>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
};

export default Index;
