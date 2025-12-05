import React from 'react';

const categories = [
  {
    title: 'Fresh Cuts',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M4 12c0-4.418 3.582-8 8-8h4a2 2 0 0 1 2 2v2c0 4.418-3.582 8-8 8H6a2 2 0 0 1-2-2v-2Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 14s2.5-.5 4-2.5S12 8 12 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    image:
      'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=1200&q=80&sat=-40&exp=-10',
    description: 'Heritage beef and lamb, butchered by hand for peak tenderness.'
  },
  {
    title: 'Cured & Smoked',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M7 8c0-1.657 1.79-3 4-3s4 1.343 4 3v8c0 1.657-1.79 3-4 3s-4-1.343-4-3V8Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M11 5s0-2 2-2M11 9s0-2 2-2M11 13s0-2 2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    image:
      'https://images.unsplash.com/photo-1615937691195-883d7cdb292c?auto=format&fit=crop&w=1200&q=80&sat=-40&exp=-10',
    description: 'Smoked over native wood, balanced salinity, deeply aromatic crust.'
  },
  {
    title: 'Artisan Sausages',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M4 9.5A3.5 3.5 0 0 1 7.5 6h9A3.5 3.5 0 0 1 20 9.5v5A3.5 3.5 0 0 1 16.5 18h-9A3.5 3.5 0 0 1 4 14.5v-5Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 9v6m6-6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    image:
      'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=1200&q=80&sat=-40&exp=-10',
    description: 'Coarse-ground recipes with wine, fennel, and spice blends perfected over decades.'
  }
];

const processSteps = [
  {
    title: 'Selection',
    description: 'We partner with small farms focused on slow growth and humane practices. Each cut is chosen for marbling and grain.',
    image:
      'https://images.unsplash.com/photo-1528476513691-07e6f563d97d?auto=format&fit=crop&w=800&q=80&sat=-40&exp=-10'
  },
  {
    title: 'Aging',
    description: 'Dry-aging rooms maintain precise humidity and airflow, concentrating flavor while tenderizing every muscle fiber.',
    image:
      'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=800&q=80&sat=-40&exp=-10'
  },
  {
    title: 'Smoking',
    description: 'Native oak and cherry woods produce a slow, enveloping smoke that builds a deep mahogany bark without bitterness.',
    image:
      'https://images.unsplash.com/photo-1451471016731-e963a8588be8?auto=format&fit=crop&w=800&q=80&sat=-40&exp=-10'
  },
  {
    title: 'Craft',
    description: 'Blades honed daily, hands trained for consistency. Every link, slice, and tie is finished by artisans in-house.',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80&sat=-40&exp=-10'
  }
];

const featuredProducts = [
  {
    title: 'Flagship Black Garlic Salami',
    description: '48-day cure, black garlic ferment, peppercorn crust. Rich umami with a clean, dry finish.',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80&sat=-40&exp=-15',
    highlight: true
  },
  {
    title: 'Dry-Aged Ribeye',
    description: '28-day dry-age, dense marbling, butter-fat cap. Ideal for cast iron or live fire.',
    image:
      'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=800&q=80&sat=-40&exp=-10'
  },
  {
    title: 'Smoked Coppa',
    description: 'Shoulder muscle cured with Calabrian chili, finished with a gentle cold smoke.',
    image:
      'https://images.unsplash.com/photo-1481931098730-318b6f776db0?auto=format&fit=crop&w=800&q=80&sat=-40&exp=-10'
  },
  {
    title: 'Heritage Pork Sausage',
    description: 'Coarse-ground shoulder with Sicilian fennel, black pepper, and red wine.',
    image:
      'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=800&q=80&sat=-40&exp=-10'
  },
  {
    title: 'Smoked Brisket Slices',
    description: '14-hour smoke, post oak, rested until the bark crackles and the fat runs clear.',
    image:
      'https://images.unsplash.com/photo-1451471016731-e963a8588be8?auto=format&fit=crop&w=800&q=80&sat=-40&exp=-10'
  }
];

const App = () => {
  return (
    <div className="page">
      <header className="top-bar">
        <div className="logo">Mesara</div>
        <nav aria-label="Primary">
          <a href="#categories">Products</a>
          <a href="#process">Process</a>
          <a href="#featured">Featured</a>
          <a href="#story">Our Story</a>
        </nav>
        <a className="ghost-link" href="#story">Visit Us</a>
      </header>

      <main>
        <section className="hero" id="hero">
          <div className="hero-image" role="img" aria-label="Aged meats on wood cutting board with dramatic lighting" />
          <div className="hero-content">
            <p className="eyebrow">Premium butcher &amp; smokehouse</p>
            <h1>Craft. Tradition. Excellence.</h1>
            <p className="lede">
              Third-generation butchers honoring timeworn methods—slow aging, live-fire smoking, and hand-finished cuts ready for
              chefs and discerning home cooks.
            </p>
            <div className="hero-actions">
              <a className="cta" href="#featured">Explore Products</a>
            </div>
          </div>
        </section>

        <section className="section" id="categories">
          <div className="section-heading">
            <h2>Product Categories</h2>
            <p className="section-sub">Simple, purposeful offerings with uncompromising sourcing and finish.</p>
          </div>
          <div className="categories-grid">
            {categories.map((category) => (
              <article key={category.title} className="category-card">
                <div className="category-image" style={{ backgroundImage: `url(${category.image})` }} aria-hidden />
                <div className="category-meta">
                  <div className="icon" aria-hidden>
                    {category.icon}
                  </div>
                  <div>
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="process" id="process" aria-label="Our Process">
          <div className="section-heading light">
            <h2>Our Process</h2>
            <p className="section-sub">Measured, meticulous, and transparent from pasture to plate.</p>
          </div>
          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div key={step.title} className="process-step">
                <div className="process-image" style={{ backgroundImage: `url(${step.image})` }} role="img" aria-label={step.title} />
                <div className="process-connector" aria-hidden>
                  {index < processSteps.length - 1 && <span />}
                </div>
                <div className="process-copy">
                  <div className="step-index">0{index + 1}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section featured" id="featured">
          <div className="section-heading">
            <h2>Featured Products</h2>
            <p className="section-sub">Hand-picked releases showcasing our craft this season.</p>
          </div>
          <div className="featured-grid">
            {featuredProducts.map((product, index) => (
              <article
                key={product.title}
                className={`product-card ${product.highlight ? 'hero-product' : ''}`}
                style={{ backgroundImage: `url(${product.image})` }}
                aria-label={product.title}
              >
                <div className="product-overlay">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  {!product.highlight && <a className="text-link" href="#story">Learn More</a>}
                  {product.highlight && <a className="cta ghost" href="#categories">View Range</a>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="story" id="story">
          <div className="story-content">
            <h2>Three Generations of Excellence</h2>
            <p>
              Mesara began as a small counter on a cobblestone street, where every cut was wrapped in butcher paper and sealed with
              a handshake. Today, we honor that ritual with the same blades, the same smoke, and the same respect for the craft.
            </p>
            <p>
              Our artisans dry-age in stone-lined rooms, listening for the soft crackle of perfect bark. Every spice blend is
              toasted in small batches, every sausage hand-twisted to hold its shape over flame.
            </p>
            <p>
              We invite you to taste the patience—the quiet work that happens before dawn—crafted for chefs, pitmasters, and
              families who value provenance.
            </p>
            <div className="signature">— The Mesara Family</div>
            <a className="cta secondary" href="#hero">Book a Butcher&apos;s Table</a>
          </div>
          <div className="story-image" role="img" aria-label="Butcher at work in a traditional shop" />
        </section>
      </main>

      <footer className="footer" id="footer">
        <div className="footer-logo">Mesara</div>
        <div className="footer-nav">
          <a href="#hero">Home</a>
          <a href="#categories">Products</a>
          <a href="#process">Process</a>
          <a href="#story">Story</a>
        </div>
        <div className="footer-actions">
          <div className="social" aria-label="Social media">
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Pinterest">PI</a>
          </div>
          <a className="cta" href="#story">Visit Us</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
