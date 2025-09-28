import { useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroWorkshop from "@/assets/hero-workshop.jpg";
import FadeInUp from "@/components/animations/FadeInUp";
import FadeInLeft from "@/components/animations/FadeInLeft";
import FadeInRight from "@/components/animations/FadeInRight";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import SEOHead from "@/components/seo/SEOHead";
import { getOrganizationStructuredData } from "@/components/seo/StructuredData";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    subject: "Generell forespørsel"
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Takk for din henvendelse!",
      description: "Vi vil kontakte deg så snart som mulig.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      subject: "Generell forespørsel"
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-accent" />,
      title: "Besøk oss",
      details: ["Telemark Trade AS", "Gravevegen 64, 3803 BØ I TELEMARK"]
    },
    {
      icon: <Phone className="h-6 w-6 text-accent" />,
      title: "Kontakt oss",
      details: ["900 33 402"]
    },
    {
      icon: <Mail className="h-6 w-6 text-accent" />,
      title: "E-post", 
      details: ["klas.grave@telemark-trade.no"]
    }
  ];

  return (
    <div>
      <SEOHead
        title="Kontakt"
        description="Ta kontakt med våre eksperter for råd, tilbud eller service. Vårt erfarne team står klar til å hjelpe deg med båtmotorer og anleggsmaskiner."
        structuredData={getOrganizationStructuredData()}
      />
      
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/kontakt.avif"
            alt="Telemark Trade kontakt"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50" />
        </div>
        <FadeInUp delay={0.2} className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <FadeInUp delay={0.4}>
            <span className="text-[0.7rem] uppercase tracking-[0.5em] text-accent mb-4 block">
              Kontakt
            </span>
          </FadeInUp>
          <FadeInUp delay={0.6}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              KONTAKT OSS
            </h1>
          </FadeInUp>
          <FadeInUp delay={0.8}>
            <p className="text-lg sm:text-xl text-zinc-200 max-w-2xl mx-auto mb-8">
              Vi er her for deg! Ta kontakt med våre eksperter for råd, tilbud eller service. 
              Vårt erfarne team står klar til å hjelpe deg.
            </p>
          </FadeInUp>
        </FadeInUp>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <FadeInLeft delay={0.2} className="lg:col-span-1 space-y-6">
              <FadeInUp delay={0.4}>
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Kom i kontakt
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Vårt erfarne team står klar til å hjelpe deg med alle spørsmål 
                    om våre produkter og tjenester.
                  </p>
                </div>
              </FadeInUp>

              <StaggerContainer className="space-y-6">
                {contactInfo.map((info, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </FadeInLeft>

            {/* Contact Form */}
            <FadeInRight delay={0.4} className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send oss en melding</CardTitle>
                  <CardDescription>
                    Fyll ut skjemaet nedenfor så kontakter vi deg så snart som mulig.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Navn *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Ditt navn"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-post *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="din@epost.no"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefon</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+47 123 45 678"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Bedrift</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Bedriftsnavn (valgfritt)"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Emne</Label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      >
                        <option value="Generell forespørsel">Generell forespørsel</option>
                        <option value="Produktinformasjon">Produktinformasjon</option>
                        <option value="Tilbud">Be om tilbud</option>
                        <option value="Service">Service og vedlikehold</option>
                        <option value="Support">Teknisk support</option>
                        <option value="Annet">Annet</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Melding *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        placeholder="Skriv din melding her..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="h-4 w-4 mr-2" />
                      Send melding
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeInUp delay={0.6}>
            <div className="bg-muted rounded-lg overflow-hidden" style={{ height: "400px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2030.260062509556!2d8.894297595547275!3d59.41205673904962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464751d83a169109%3A0x9d679cde836012e7!2sGravevegen%2064%2C%203803%20B%C3%B8%20i%20Telemark%2C%20Norway!5e0!3m2!1sen!2sph!4v1758141541613!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Telemark Trade AS lokasjon"
              />
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
};

export default Contact;