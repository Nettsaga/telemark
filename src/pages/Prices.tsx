import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, ExternalLink, Wrench, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroWorkshop from "@/assets/hero-workshop.jpg";
import FadeInUp from "@/components/animations/FadeInUp";
import FadeInLeft from "@/components/animations/FadeInLeft";
import FadeInRight from "@/components/animations/FadeInRight";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import ScaleIn from "@/components/animations/ScaleIn";
import SEOHead from "@/components/seo/SEOHead";

const Prices = () => {

  return (
    <div className="bg-zinc-50 text-slate-900">
      <SEOHead
        title="Priser"
        description="Transparente priser på båtmotorer og anleggsmaskiner. Se våre konkurransedyktige priser for TD Power og Hyundai SeasAll motorer."
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/wheelloader2.avif"
            alt="Telemark Trade prisliste"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40" />
        </div>
        <FadeInUp delay={0.2} className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <FadeInUp delay={0.4}>
            <span className="text-[0.7rem] uppercase tracking-[0.5em] text-accent mb-4 block">
              Prisliste
            </span>
          </FadeInUp>
          <FadeInUp delay={0.6}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              TRANSPARENTE PRISER
            </h1>
          </FadeInUp>
        </FadeInUp>
       </section>

       {/* Price Tables Section */}
       <section className="border-b border-zinc-200 bg-white">
         <div className="container mx-auto px-4 py-28 lg:px-10">
          <div className="text-center mb-16">
             <span className="text-[0.7rem] uppercase tracking-[0.5em] text-accent">Prislister</span>
             <h2 className="text-3xl font-semibold sm:text-4xl mt-4">
               2025 Prislister
            </h2>
             <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-6">
               Se våre konkurransedyktige priser for båtmotorer og tilbehør
            </p>
          </div>

           <div className="max-w-6xl mx-auto">
             <Tabs defaultValue="hyundai" className="w-full">
               <TabsList className="grid w-full grid-cols-2 mb-8">
                 <TabsTrigger value="hyundai" className="flex items-center gap-2">
                   <Wrench className="h-4 w-4" />
                   Hyundai 2025
                 </TabsTrigger>
                 <TabsTrigger value="td-power" className="flex items-center gap-2">
                   <Zap className="h-4 w-4" />
                   TD Power 2025
                 </TabsTrigger>
               </TabsList>

               <TabsContent value="hyundai" className="space-y-6">
                 <div className="text-center mb-8">
                   <h3 className="text-2xl font-semibold text-slate-900 mb-2">Hyundai Marine Motorer</h3>
                   <p className="text-slate-600">Pålitelige marine motorer med avansert teknologi</p>
                 </div>

                 {/* Blue Banner Header */}
                 <div className="bg-primary text-primary-foreground py-6 px-8 rounded-t-3xl">
                   <h3 className="text-3xl font-bold text-center">Hyundai 2025</h3>
                 </div>

                 {/* Price List Content */}
                 <div className="bg-white border border-t-0 border-zinc-200 rounded-b-3xl p-8">
               {/* R200 Series */}
               <div className="mb-8">
                 <h4 className="text-xl font-bold text-slate-900 mb-4">R200 2.2 ltr, 200 hk v/3800 omdr/min, 430 Nm v/2000 omdr/min 280kg</h4>
                 <div className="space-y-3">
                   <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                     <div className="flex flex-col " >
                       <span className="font-semibold text-slate-900">R200P:</span>
                       <span className="text-slate-600">Motor klargjort for gir</span>
                     </div>
                     <span className="font-semibold text-slate-900">249,900,-</span>
                   </div>
                   <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                     <div className="flex flex-col " >
                       <span className="font-semibold text-slate-900">R200P:</span>
                       <span className="text-slate-600">Motor med ZF45A</span>
                     </div>
                     <span className="font-semibold text-slate-900">274,900,-</span>
                   </div>
                   <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                     <div className="flex flex-col " >
                       <span className="font-semibold text-slate-900">R200P:</span>
                       <span className="text-slate-600">Motor med Alpha & Bravo/Volvo adapter</span>
                     </div>
                     <span className="font-semibold text-slate-900">254,900,-</span>
                   </div>
                   <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                     <div className="flex flex-col " >
                       <span className="font-semibold text-slate-900">R200S:</span>
                       <span className="text-slate-600">Motor med Bravo 1X drev</span>
                     </div>
                     <span className="font-semibold text-slate-900">399,900,-</span>
                   </div>
                   <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                     <div className="flex flex-col " >
                       <span className="font-semibold text-slate-900">R200S:</span>
                       <span className="text-slate-600">Motor med Bravo 2X drev</span>
                     </div>
                     <span className="font-semibold text-slate-900">403,900,-</span>
                   </div>
                   <div className="flex justify-between items-center py-2">
                     <div className="flex flex-col " >
                       <span className="font-semibold text-slate-900">R200S:</span>
                       <span className="text-slate-600">Motor med Bravo 3X drev</span>
                     </div>
                     <span className="font-semibold text-slate-900">409,900,-</span>
                   </div>
                 </div>
               </div>

               {/* S270 Series */}
               <div className="mb-8">
                 <h4 className="text-xl font-bold text-slate-900 mb-4">S270 3.0 ltr, 270 hk v/3800 omdr/min, 565 Nm v/2000 omdr/min 334kg</h4>
                 <div className="space-y-3">
                   <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                     <div className="flex flex-col " >
                       <span className="font-semibold text-slate-900">S270P:</span>
                       <span className="text-slate-600">Motor klargjort for gir</span>
                     </div>
                     <span className="font-semibold text-slate-900">269,900,-</span>
                   </div>
                   <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                     <div className="flex flex-col " >
                       <span className="font-semibold text-slate-900">S270P:</span>
                       <span className="text-slate-600">Motor med ZF68A</span>
                     </div>
                     <span className="font-semibold text-slate-900">299,900,-</span>
                   </div>
                   <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                     <div className="flex flex-col " >
                       <span className="font-semibold text-slate-900">S270P:</span>
                       <span className="text-slate-600">Motor med Alpha & Bravo/Volvo adapter</span>
                     </div>
                     <span className="font-semibold text-slate-900">274,900,-</span>
                   </div>
                   <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                     <div className="flex flex-col " >
                       <span className="font-semibold text-slate-900">S270S:</span>
                       <span className="text-slate-600">Motor med Bravo 1X drev</span>
                     </div>
                     <span className="font-semibold text-slate-900">429,900,-</span>
                   </div>
                   <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                     <div className="flex flex-col " >
                       <span className="font-semibold text-slate-900">S270S:</span>
                       <span className="text-slate-600">Motor med Bravo 2X drev</span>
                     </div>
                     <span className="font-semibold text-slate-900">434,900,-</span>
                   </div>
                   <div className="flex justify-between items-center py-2">
                     <div className="flex flex-col " >
                       <span className="font-semibold text-slate-900">S270S:</span>
                       <span className="text-slate-600">Motor med Bravo 3X drev</span>
                     </div>
                     <span className="font-semibold text-slate-900">439,900,-</span>
                   </div>
                 </div>
               </div>

               {/* G350 Series */}
               <div className="mb-8">
                 <h4 className="text-xl font-bold text-slate-900 mb-4">G350 6.8ltr. 350 hk ved 2800 omdr/min, 1180 Nm ved 1600 omdr/min 686kg</h4>
                 <div className="space-y-3">
                   <div className="flex justify-between items-center py-2">
                     <div className="flex flex-col " >
                       <span className="font-semibold text-slate-900">G350:</span>
                       <span className="text-slate-600">Motor klargjort for gir</span>
                     </div>
                     <span className="font-semibold text-slate-900">449,900,-</span>
                   </div>
                 </div>
               </div>

               {/* H380 Series */}
               <div className="mb-8">
                 <h4 className="text-xl font-bold text-slate-900 mb-4">H380 10.7 ltr, 380 hk v/1800 omdr/min, 1667 Nm v/1100 omdr/min 1060kg</h4>
                 <div className="space-y-3">
                   <div className="flex justify-between items-center py-2">
                     <div className="flex flex-col " >
                       <span className="font-semibold text-slate-900">H380:</span>
                       <span className="text-slate-600">Motor klargjort for gir</span>
                     </div>
                     <span className="font-semibold text-slate-900">489,900,-</span>
                   </div>
                 </div>
               </div>

               {/* L500-700 Series */}
               <div className="mb-8">
                 <h4 className="text-xl font-bold text-slate-900 mb-4">L500-700 12.7 ltr, 500-700 hk v/1800-2300 omdr/min, 2275 Nm v/1300 omdr/min 1310kg</h4>
                 <div className="space-y-3">
                   <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                     <div className="flex flex-col " >
                       <span className="font-semibold text-slate-900">L500:</span>
                       <span className="text-slate-600">Motor klargjort for gir, 500 hk</span>
                     </div>
                     <span className="font-semibold text-slate-900">519,900,-</span>
                   </div>
                   <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                     <div className="flex flex-col " >
                       <span className="font-semibold text-slate-900">L600:</span>
                       <span className="text-slate-600">Motor klargjort for gir, 600 hk</span>
                     </div>
                     <span className="font-semibold text-slate-900">529,900,-</span>
                   </div>
                   <div className="flex justify-between items-center py-2">
                     <div className="flex flex-col ">
                       <span className="font-semibold text-slate-900">L700:</span>
                       <span className="text-slate-600">Motor klargjort for gir, 700 hk</span>
                     </div>
                     <span className="font-semibold text-slate-900">549,900,-</span>
                   </div>
                 </div>
               </div>
                 </div>
               </TabsContent>

               <TabsContent value="td-power" className="space-y-6">
                 <div className="text-center mb-8">
                   <h3 className="text-2xl font-semibold text-slate-900 mb-2">TD Power Marine Motorer</h3>
                   <p className="text-slate-600">Robuste støpejern båtmotorer uten for mye elektronikk</p>
                 </div>

                 {/* Blue Banner Header */}
                 <div className="bg-primary text-primary-foreground py-6 px-8 rounded-t-3xl">
                   <h3 className="text-3xl font-bold text-center">TD Power 2025</h3>
                 </div>

                 {/* Price List Content */}
                 <div className="bg-white border border-t-0 border-zinc-200 rounded-b-3xl p-8">
                {/* Important Notice */}
                <div className="mb-8 p-4 bg-accent/10 border-l-4 border-accent rounded-r-lg">
                  <p className="text-sm text-slate-700">
                    Alle priser inkluderer MVA for komplett motor med girkasse, instrumenter og kabling. 
                    Priser er gyldige til 31.12.2025. Priser kan endres uten varsel.
            </p>
          </div>

                {/* Engines Section */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-slate-900 mb-4">Motorer</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">TDME 327-3M78 CR PRM 90:</span>
                        <span className="text-slate-600">3 syl diesel Common Rail 27 hk</span>
                      </div>
                      <span className="font-semibold text-slate-900">74,900,-</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">TDME 332-385 PRM 90:</span>
                        <span className="text-slate-600">3 syl diesel 32 hk</span>
                      </div>
                      <span className="font-semibold text-slate-900">74,900,-</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">TDME 446-485 PRM 125:</span>
                        <span className="text-slate-600">4 syl diesel 46 hk</span>
                      </div>
                      <span className="font-semibold text-slate-900">84,900,-</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">TDME 95-4B2 CR PRM 280:</span>
                        <span className="text-slate-600">4 syl common rail 95 hk</span>
                      </div>
                      <span className="font-semibold text-slate-900">149,900,-</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">TDME 110-4B2 CR PRM 280:</span>
                        <span className="text-slate-600">4 syl common rail 110 hk</span>
                      </div>
                      <span className="font-semibold text-slate-900">159,900,-</span>
                    </div>
                  </div>
                </div>

                {/* PRM/ZF Gears Section */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-slate-900 mb-4">PRM/ZF Girkasser</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">PRM 90:</span>
                      </div>
                      <span className="font-semibold text-slate-900">19,990,-</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">PRM 125:</span>
                      </div>
                      <span className="font-semibold text-slate-900">26,990,-</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">PRM 150:</span>
                      </div>
                      <span className="font-semibold text-slate-900">34,990,-</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">PRM 280:</span>
                      </div>
                      <span className="font-semibold text-slate-900">44,990,-</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">ZF 25:</span>
                      </div>
                      <span className="font-semibold text-slate-900">36,000,-</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">ZF 45 A:</span>
                      </div>
                      <span className="font-semibold text-slate-900">49,000,-</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">ZF 68 A:</span>
                      </div>
                      <span className="font-semibold text-slate-900">58,000,-</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">Andre ZF girkasser</span>
                        <span className="text-slate-600">Pris på forespørsel</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Accessories Section */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-slate-900 mb-4">Tilbehør</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">Demperplate fra:</span>
                      </div>
                      <span className="font-semibold text-slate-900">2,990,-</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">SAE 4 flens (svinghjulshus):</span>
                      </div>
                      <span className="font-semibold text-slate-900">2,990,-</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">Klemflens fra:</span>
                      </div>
                      <span className="font-semibold text-slate-900">2,990,-</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">Fleksibel kobling:</span>
                      </div>
                      <span className="font-semibold text-slate-900">890,-</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">Motor labs:</span>
                      </div>
                      <span className="font-semibold text-slate-900">475,-</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">Oljekjøler liten:</span>
                      </div>
                      <span className="font-semibold text-slate-900">2,990,-</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">Oljekjøler stor:</span>
                      </div>
                      <span className="font-semibold text-slate-900">3,490,-</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">Diesel filter med vannseparator:</span>
                      </div>
                      <span className="font-semibold text-slate-900">5,990,-</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">Vannfilter, messing:</span>
                      </div>
                      <span className="font-semibold text-slate-900">5,990,-</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">Kraftoverføring ledd:</span>
                      </div>
                      <span className="font-semibold text-slate-900">6,990,-</span>
                    </div>
                  </div>
                </div>
                 </div>
               </TabsContent>
             </Tabs>
           </div>
         </div>
       </section>

      {/* CTA Section */}
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
                  href="tel:90033402"
                  className="text-sm font-semibold uppercase tracking-[0.35em] text-zinc-300 transition hover:text-amber-400 hover:scale-105"
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

export default Prices;