import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import heroWorkshop from "@/assets/hero-workshop.jpg";
import FadeInUp from "@/components/animations/FadeInUp";
import FadeInLeft from "@/components/animations/FadeInLeft";
import FadeInRight from "@/components/animations/FadeInRight";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import ScaleIn from "@/components/animations/ScaleIn";
import SEOHead from "@/components/seo/SEOHead";
import { getServiceStructuredData } from "@/components/seo/StructuredData";
import { allProducts, productCategories, getProductsByCategory, formatPrice, type Product } from "@/data/products";
import { Filter, Grid, List } from "lucide-react";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const selectedCategory = searchParams.get('category') || 'all';

  const filteredProducts = selectedCategory === 'all'
    ? allProducts
    : getProductsByCategory(selectedCategory);

  const handleCategoryChange = (category: string) => {
    if (category === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  return (
    <div>
      <SEOHead
        title="Produkter"
        description="Utforsk vårt omfattende utvalg av hjullastere, aggregater og båtmotorer. Everun hjullastere, dieselaggregater og marine motorer."
        structuredData={getServiceStructuredData("Marine Engine Sales and Service", "Vi leverer båtmotorer, elektriske motorer, hjullastere og anleggsmaskiner til kunder over hele Norge.")}
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/wheelloader.avif"
            alt="Hjullaster bakgrunn"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40" />
        </div>
        <FadeInUp delay={0.2} className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <FadeInUp delay={0.4}>
            <span className="text-[0.7rem] uppercase tracking-[0.5em] text-amber-400 mb-4 block">
              Våre Produkter
            </span>
          </FadeInUp>
          <FadeInUp delay={0.6}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              VÅRE PRODUKTER
            </h1>
          </FadeInUp>
        </FadeInUp>
      </section>

      {/* Category Filter */}
      <section className="border-b border-zinc-200 bg-white py-8">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleCategoryChange('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Alle produkter ({allProducts.length})
              </button>
              {productCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-amber-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.productCount})
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list'
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="border-b border-zinc-200 bg-white">
        <div className="container mx-auto px-4 py-16 lg:px-10">
          <FadeInUp delay={0.2} className="text-center mb-12">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              {selectedCategory === 'all'
                ? 'Alle produkter'
                : productCategories.find(cat => cat.id === selectedCategory)?.name || 'Produkter'
              }
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-4">
              {selectedCategory === 'all'
                ? `Vis alle ${filteredProducts.length} produkter i vårt sortiment`
                : productCategories.find(cat => cat.id === selectedCategory)?.description
              }
            </p>
          </FadeInUp>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-600">Ingen produkter funnet i denne kategorien.</p>
            </div>
          ) : (
            <>
              {selectedCategory === 'boat-engines' && (
                <div className="mb-8 p-6 bg-amber-50 border border-amber-200 rounded-xl">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      Fokus på hjullastere og anleggsmaskiner
                    </h3>
                    <p className="text-slate-700 mb-4">
                      Vårt hovedfokus er nå på hjullastere og anleggsmaskiner. For detaljert informasjon om båtmotorer,
                      besøk vår dedikerte båtmotor-side.
                    </p>
                    <Button asChild className="bg-amber-600 text-white hover:bg-amber-700">
                      <Link to="/batmotorer">Se alle båtmotorer</Link>
                    </Button>
                  </div>
                </div>
              )}
            </>
          )}
          {filteredProducts.length > 0 && (
            <div className={`${
              viewMode === 'grid'
                ? 'grid gap-6 md:grid-cols-2 lg:grid-cols-3'
                : 'space-y-4'
            }`}>
              {filteredProducts.map((product) => (
                <StaggerItem key={product.id}>
                  {viewMode === 'grid' ? (
                    <div className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-lg">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-xs font-medium uppercase tracking-[0.45em] text-amber-600">
                            {product.year}
                          </span>
                          {product.inStock && (
                            <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                              På lager
                            </span>
                          )}
                        </div>
                        <h3 className="mb-2 text-xl font-semibold">{product.name}</h3>
                        <p className="text-slate-600 mb-3 text-sm line-clamp-2">
                          {product.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-2xl font-bold text-[#19334c]">{formatPrice(product.price)}</span>
                            <p className="text-xs text-slate-500">{product.location}</p>
                          </div>
                          <Link
                            to={`/produkt/${product.id}`}
                            className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors"
                          >
                            Se detaljer →
                          </Link>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex gap-4 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition-all hover:shadow-md">
                      <div className="w-24 h-24 overflow-hidden rounded-lg flex-shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-lg">{product.name}</h3>
                            <p className="text-sm text-slate-600 mt-1">{product.description}</p>
                            <p className="text-xs text-slate-500 mt-2">{product.location} • {product.year}</p>
                          </div>
                          <div className="text-right">
                            <span className="text-xl font-bold text-[#19334c]">{formatPrice(product.price)}</span>
                            {product.inStock && (
                              <p className="text-xs text-green-600 mt-1">På lager</p>
                            )}
                          </div>
                        </div>
                        <div className="mt-3">
                          <Link
                            to={`/produkt/${product.id}`}
                            className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors"
                          >
                            Se detaljer →
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </StaggerItem>
              ))}
            </div>
          )}
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

export default Products;