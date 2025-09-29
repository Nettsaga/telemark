import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, Mail, MapPin, Check, Heart, Share2, ExternalLink } from "lucide-react";
import FadeInUp from "@/components/animations/FadeInUp";
import FadeInLeft from "@/components/animations/FadeInLeft";
import FadeInRight from "@/components/animations/FadeInRight";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import SEOHead from "@/components/seo/SEOHead";
import { getProductById, formatPrice, allProducts } from "@/data/products";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? getProductById(productId) : undefined;

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Produkt ikke funnet</h1>
          <Link to="/produkter" className="text-amber-600 hover:text-amber-700">
            ← Tilbake til produkter
          </Link>
        </div>
      </div>
    );
  }

  // Get related products from the same category
  const relatedProducts = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const specifications = product.specifications || {};

  // Translation function for specification keys
  const translateSpecKey = (key: string): string => {
    const translations: Record<string, string> = {
      'power': 'Effekt',
      'weight': 'Vekt',
      'fuel': 'Drivstoff',
      'engine': 'Motor',
      'capacity': 'Kapasitet',
      'year': 'År',
      'model': 'Modell',
      'liftCapacity': 'Løftekapasitet',
      'liftHeight': 'Løftehøyde',
      'topSpeed': 'Topphastighet',
      'gearbox': 'Girkasse',
      'chassis': 'Understell',
      'cabinType': 'Førerhustype',
      'workingHours': 'Arbeidstimer',
      'additionalHydraulics': 'Tilleggshydraulikk',
      'ceMark': 'CE-merket',
      'complianceDeclaration': 'Samsvarserklæring',
      'maintenanceContract': 'Vedlikeholdsavtale',
      'annualFee': 'Årsavgift',
      'primeKVA': 'Prime KVA',
      'standbyKVA': 'Standby KVA',
      'primeAmpere': 'Prime Ampere',
      'standbyAmpere': 'Standby Ampere',
      'voltage': 'Spenning',
      'phase': 'Fase',
      'frequency': 'Frekvens',
      'rpm': 'Turtall',
      'fuelTank': 'Drivstofftank',
      'dimensions': 'Dimensjoner',
      'starter': 'Starter',
      'condition': 'Tilstand',
      'brand': 'Merke',
      'motorType': 'Motortype',
      'cooling': 'Kjøling',
      'certification': 'Sertifisering',
      'warranty': 'Garanti',
      'hydraulics': 'Hydraulikk',
      'floatSystem': 'Flytsystem',
      'springs': 'Fjærer',
      'bracket': 'Brakett',
      'edge': 'Slitestål'
    };
    return translations[key.toLowerCase()] || key.charAt(0).toUpperCase() + key.slice(1);
  };

  return (
    <div>
      <SEOHead
        title={`${product.name} - ${formatPrice(product.price)}`}
        description={`${product.name} (${product.year}) til ${formatPrice(product.price)}. ${product.description} Kontakt Telemark Trade AS for mer informasjon.`}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInLeft delay={0.4}>
              <div className="space-y-6">
                <div>
                  <span className="text-amber-400 text-sm font-medium uppercase tracking-wider">
                    {product.year} • {product.category === 'wheel-loaders' ? 'Hjullaster' :
                     product.category === 'aggregates' ? 'Aggregat' : 'Båtmotor'}
                  </span>
                  <h1 className="text-4xl lg:text-5xl font-bold text-white mt-2">
                    {product.name}
                  </h1>
                </div>

                <div>
                  <span className="text-3xl lg:text-4xl font-bold text-amber-400">
                    {formatPrice(product.price)}
                  </span>
                </div>

                <p className="text-white/90 text-lg leading-relaxed">
                  {product.description}
                </p>

                {product.deliveryInfo && (
                  <div className="bg-amber-500/20 border border-amber-400/50 rounded-lg p-4">
                    <p className="text-amber-300 font-medium">
                      {product.deliveryInfo}
                    </p>
                  </div>
                )}

                <div className="flex items-center gap-2 text-white/70">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{product.location} • {product.dealer}</span>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-amber-500 text-slate-900 hover:bg-amber-400">
                    <Link to="/kontakt">Kontakt oss</Link>
                  </Button>
                  <Button variant="outline" size="lg" className="border-white !text-white bg-transparent hover:bg-white hover:!text-slate-900" asChild>
                    <a href="tel:90033402">
                      <Phone className="h-4 w-4 mr-2" />
                      Ring oss
                    </a>
                  </Button>
                </div>
              </div>
            </FadeInLeft>

            <FadeInRight delay={0.6}>
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="p-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-colors">
                    <Heart className="h-5 w-5 text-slate-600" />
                  </button>
                  <button className="p-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-colors">
                    <Share2 className="h-5 w-5 text-slate-600" />
                  </button>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Specifications & Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Product Information and Specifications */}
            <FadeInLeft delay={0.2} className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Produktinformasjon</h2>
                  <div className="prose prose-slate max-w-none mb-8">
                    {product.longDescription ? (
                      <div className="space-y-4">
                        {product.longDescription.split('\n\n').map((paragraph, index) => (
                          <p key={index} className="text-slate-600 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                        {product.modelVariants && product.modelVariants.length > 0 && (
                          <div className="mt-8">
                            <h4 className="text-xl font-bold text-slate-900 mb-4">Tilgjengelige modeller</h4>
                            <div className="overflow-x-auto">
                              <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                  <tr>
                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Modell</th>
                                    {product.modelVariants[0]?.cylinders && (
                                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sylindre</th>
                                    )}
                                    {product.modelVariants[0]?.power && (
                                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Effekt</th>
                                    )}
                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pris</th>
                                  </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                  {product.modelVariants.map((variant, index) => (
                                    <tr key={index}>
                                      <td className="px-4 py-2 text-sm font-medium text-gray-900">{variant.model}</td>
                                      {variant.cylinders && (
                                        <td className="px-4 py-2 text-sm text-gray-500">{variant.cylinders}</td>
                                      )}
                                      {variant.power && (
                                        <td className="px-4 py-2 text-sm text-gray-500">{variant.power}</td>
                                      )}
                                      <td className="px-4 py-2 text-sm font-semibold text-gray-900">{formatPrice(variant.price)}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}
                        {product.standardEquipment && product.standardEquipment.length > 0 && (
                          <div className="mt-8">
                            <h4 className="text-xl font-bold text-slate-900 mb-4">Standard utstyr</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {product.standardEquipment.map((item, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span className="text-slate-600">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {product.additionalOptions && product.additionalOptions.length > 0 && (
                          <div className="mt-8">
                            <h4 className="text-xl font-bold text-slate-900 mb-4">Tilleggsutstyr</h4>
                            <ul className="space-y-2">
                              {product.additionalOptions.map((option, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <span className="text-amber-600">•</span>
                                  <span className="text-slate-600">{option}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {product.memberInfo && (
                          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0">
                                <Check className="h-6 w-6 text-blue-600" />
                              </div>
                              <div>
                                <h4 className="text-sm font-semibold text-blue-900 mb-1">Norboat medlem</h4>
                                <p className="text-sm text-blue-800">{product.memberInfo}</p>
                              </div>
                            </div>
                          </div>
                        )}
                        {product.websiteLinks && product.websiteLinks.length > 0 && (
                          <div className="mt-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">Nyttige lenker</h4>
                            <ul className="space-y-2">
                              {product.websiteLinks.map((link, index) => (
                                <li key={index}>
                                  <a
                                    href={link.startsWith('http') ? link : `https://${link}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-amber-600 hover:text-amber-700 underline text-sm"
                                  >
                                    {link}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {product.keywords && product.keywords.length > 0 && (
                          <div className="mt-6 flex flex-wrap gap-2">
                            {product.keywords.map((keyword, index) => (
                              <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
                                {keyword}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <p className="text-slate-600 leading-relaxed">
                        {product.description} Dette er en {product.category === 'wheel-loaders' ? 'pålitelig hjullaster' :
                         product.category === 'aggregates' ? 'kraftig aggregat' : 'høykvalitets båtmotor'} som
                        passer perfekt for {product.category === 'wheel-loaders' ? 'anleggsarbeider og materialtransport' :
                         product.category === 'aggregates' ? 'strømforsyning på arbeidsplassen' : 'marine anvendelser'}.
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Spesifikasjoner</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(specifications).map(([key, value]) => (
                      <div key={key} className="border-b border-slate-200 pb-4">
                        <dt className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">
                          {translateSpecKey(key)}
                        </dt>
                        <dd className="text-lg font-semibold text-slate-900">{value}</dd>
                      </div>
                    ))}
                    <div className="border-b border-slate-200 pb-4">
                      <dt className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">
                        Modell
                      </dt>
                      <dd className="text-lg font-semibold text-slate-900">{product.model}</dd>
                    </div>
                    <div className="border-b border-slate-200 pb-4">
                      <dt className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">
                        År
                      </dt>
                      <dd className="text-lg font-semibold text-slate-900">{product.year}</dd>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInLeft>

            {/* Contact Card */}
            <FadeInRight delay={0.4}>
              <div className="lg:sticky lg:top-8">
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Kontakt selger</h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                        <Phone className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Ring oss</p>
                        <a href="tel:90033402" className="text-amber-600 hover:text-amber-700 font-medium">
                          900 33 402
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                        <Mail className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Send e-post</p>
                        <a href="mailto:klas.grave@telemark-trade.no" className="text-amber-600 hover:text-amber-700 font-medium text-sm">
                          klas.grave@telemark-trade.no
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Besøk oss</p>
                        <p className="text-slate-600 text-sm">Gravevegen 64<br />3803 Bø i Telemark</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button asChild className="w-full bg-amber-500 text-slate-900 hover:bg-amber-400">
                      <Link to="/kontakt">Send forespørsel</Link>
                    </Button>
                    <a
                      href="tel:90033402"
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-slate-300 rounded-md text-slate-900 bg-white hover:bg-slate-100 hover:text-slate-900 transition-colors font-medium"
                    >
                      <Phone className="h-4 w-4" />
                      Ring nå
                    </a>
                    {product.category === 'wheel-loaders' && (
                      <Button variant="outline" className="w-full border-slate-300 !text-slate-900 hover:bg-slate-100 hover:!text-slate-900" asChild>
                        <a href="https://www.finn.no/mobility/search/b2b/construction?orgId=193373099" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Se alle hjullastere på finn.no
                        </a>
                      </Button>
                    )}
                    {product.category === 'aggregates' && (
                      <Button variant="outline" className="w-full border-slate-300 !text-slate-900 hover:bg-slate-100 hover:!text-slate-900" asChild>
                        <a href="https://www.finn.no/butikk/nuppuro678" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Se alle aggregater på finn.no
                        </a>
                      </Button>
                    )}
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-200">
                    <p className="text-xs text-slate-500 text-center">
                      Forhandler: {product.dealer}<br />
                      Lokasjon: {product.location}
                    </p>
                    {product.category === 'wheel-loaders' && (
                      <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                        <p className="text-sm text-green-800 font-medium text-center">
                          Vi tilbyr finansiering
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 lg:px-10">
            <FadeInUp delay={0.2} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">Lignende produkter</h2>
              <p className="text-slate-600 mt-4">Andre produkter som kan interessere deg</p>
            </FadeInUp>

            <StaggerContainer className="grid gap-6 md:grid-cols-3">
              {relatedProducts.map((relatedProduct) => (
                <StaggerItem key={relatedProduct.id}>
                  <Link to={`/produkt/${relatedProduct.id}`}>
                    <div className="group bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={relatedProduct.image}
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-semibold text-lg text-slate-900 mb-2">
                          {relatedProduct.name}
                        </h3>
                        <p className="text-slate-600 text-sm mb-3 line-clamp-2">
                          {relatedProduct.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xl font-bold text-[#19334c]">
                            {formatPrice(relatedProduct.price)}
                          </span>
                          <span className="text-amber-600 text-sm font-medium">
                            Se detaljer →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;