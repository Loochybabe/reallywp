/**
 * Product review data
 * Each review contains pros, cons, features, ratings, and detailed content
 */
export const productReviews = {
  1: {
    // Solid Security
    rating: 4.8,
    price: '$199/year',
    bestFor: 'WordPress sites needing enterprise-grade security without bloat',
    pros: [
      'Real-time threat detection and malware scanning',
      'Lightweight and fast—minimal performance impact',
      'Easy one-click restoration after threats detected',
      'Excellent customer support from StellarWP team',
      'Transparent pricing with no hidden fees',
      'Works seamlessly with other StellarWP products',
    ],
    cons: [
      'Premium features require yearly subscription',
      'Firewall rules can be intimidating for beginners',
      'Limited free version compared to Wordfence',
    ],
    features: [
      'Real-time malware scanning and removal',
      'Web application firewall (WAF)',
      'Brute-force attack protection',
      'Two-factor authentication support',
      'Automated backups before security updates',
      'Integration with Solid Central for multi-site management',
      'Regular security audits and logs',
    ],
    summary: 'Solid Security is a premium WordPress security plugin that combines firewall protection, malware scanning, and real-time threat detection. It\'s lightweight, user-friendly, and backed by the trusted StellarWP team.',
    detailedReview: `
      Solid Security stands out in a crowded market of WordPress security plugins by combining enterprise-grade protection with simplicity. The interface is clean and doesn't overwhelm with options, making it ideal for both beginners and experienced admins.
      
      The core strength is real-time threat detection. The plugin actively monitors your WordPress installation and alerts you to suspicious activity before it becomes a problem. Malware removal is automated, which means less downtime for your site.
      
      The lightweight architecture is a significant advantage—many security plugins slow down your site noticeably, but Solid Security maintains your site's speed while providing robust protection.
      
      If you manage multiple WordPress sites, Solid Central integration is a game-changer, allowing centralized management from one dashboard.
    `,
  },
  2: {
    // Solid Backup
    rating: 4.7,
    price: '$99/year',
    bestFor: 'WordPress site owners who want automated, reliable backups without technical knowledge',
    pros: [
      'Automated daily/weekly backups to cloud storage',
      'One-click restore functionality',
      'Incremental backups save storage space',
      'Integration with StellarWP Central for multi-site backups',
      'Fast, transparent pricing structure',
      'Excellent uptime and reliability',
    ],
    cons: [
      'Cloud storage limits on lower plans',
      'Requires yearly commitment for best value',
      'Limited customization for advanced users',
    ],
    features: [
      'Automated cloud backups (daily/weekly/monthly)',
      'One-click restoration',
      'Incremental backup technology',
      'Multiple cloud storage destinations',
      'Backup retention policies',
      'Scheduled backup times',
      'Manual backup on-demand',
      'Multi-site backup management',
    ],
    summary: 'Solid Backup provides automated, cloud-based WordPress backups with one-click restoration. Perfect for site owners who want set-it-and-forget-it backup protection.',
    detailedReview: `
      Data loss is one of the biggest fears for WordPress site owners. Solid Backup removes that worry by automating cloud backups and making restoration simple.
      
      The incremental backup approach is smart—instead of backing up your entire site each time, only changed files are backed up, saving storage space and reducing backup times.
      
      Restoration is where Solid Backup shines. If disaster strikes, you can restore your entire site with a single click. No technical knowledge required.
      
      For multi-site WordPress networks, the StellarWP Central integration streamlines backup management across all your properties.
    `,
  },
  5: {
    // Gravity Forms
    rating: 4.9,
    price: '$199/year',
    bestFor: 'Agencies and enterprise sites needing advanced form functionality',
    pros: [
      'Incredibly flexible with conditional logic and advanced routing',
      'Extensive pre-built form templates',
      'Massive ecosystem of official add-ons and third-party integrations',
      'Email notifications with dynamic content',
      'Advanced user role permissions',
      'Excellent documentation and community support',
    ],
    cons: [
      'Premium pricing is higher than competing plugins',
      'Steeper learning curve than simpler form builders',
      'Requires Gravity Forms license for updates and support',
    ],
    features: [
      'Drag-and-drop form builder',
      'Conditional logic and payment processing',
      'File uploads and signature fields',
      'Email confirmation and notifications',
      'User role restrictions per form',
      'Advanced calculations in form fields',
      'Form pre-population from URLs',
      'Webhooks and REST API',
      '100+ official add-ons available',
    ],
    summary: 'Gravity Forms is the industry-leading WordPress form plugin, trusted by agencies and enterprises for complex form requirements and integrations.',
    detailedReview: `
      Gravity Forms is often called "the professional form builder for WordPress," and for good reason. It offers capabilities that most form plugins simply can't match.
      
      The conditional logic engine is powerful—you can show/hide fields, change pricing, or route submissions based on user input. This flexibility enables complex workflows that would require custom coding with other plugins.
      
      The 100+ add-ons available create an ecosystem of extended functionality. Integration with payment gateways, CRM systems, email services, and more is straightforward.
      
      Documentation is thorough, and the community is massive, so if you have questions, there are plenty of resources available.
      
      The primary trade-off is price. Gravity Forms is more expensive than many alternatives, but for agencies and complex use cases, the ROI is clear.
    `,
  },
  10: {
    // Rank Math
    rating: 4.8,
    price: 'Free / $199/year Pro',
    bestFor: 'WordPress sites serious about SEO performance and rankings',
    pros: [
      'Comprehensive SEO analysis and recommendations',
      'Automated schema markup for rich snippets',
      'Detailed XML sitemap generation',
      'Content AI for writing optimization',
      'Rank tracking and competitor monitoring',
      'Free version very capable for basic needs',
    ],
    cons: [
      'Advanced features require Pro subscription',
      'Steep learning curve for all features',
      'Can be resource-intensive with large sites',
    ],
    features: [
      'On-page SEO optimization',
      'Schema markup builder (structured data)',
      'XML sitemap generation',
      'Keyword rank tracking',
      'Competitor tracking',
      'Content AI powered by GPT',
      'LSI keyword suggestions',
      'Redirection manager for 404s',
      'Search Console integration',
    ],
    summary: 'Rank Math is a comprehensive SEO plugin that combines technical SEO, content optimization, and rank tracking into one powerful platform.',
    detailedReview: `
      Rank Math has quickly become the favorite SEO plugin among WordPress professionals, rivaling Yoast in functionality while offering better UI/UX.
      
      The schema markup builder is particularly impressive—automatically generating rich snippets for articles, products, FAQs, and more without manual code editing.
      
      Rank tracking is built-in, so you can monitor keyword positions over time. Competitor tracking gives insight into how your site stacks up.
      
      Content AI integration helps optimize copy for SEO, making it easier to write search-optimized content.
      
      The free version is surprisingly capable, covering most basic SEO needs. Pro versions unlock advanced features like rank tracking and content AI.
    `,
  },
  3: {
    // Solid Central
    rating: 4.5,
    price: '$149/year',
    bestFor: 'Agencies and teams managing many WordPress sites from one dashboard',
    pros: [
      'Centralised updates and security controls',
      'Site management tools reduce repetitive tasks',
      'Good reporting and uptime monitoring',
    ],
    cons: [
      'Adds another dashboard to learn',
      'Some advanced features are enterprise-only',
    ],
    features: [
      'Multi-site plugin and theme updates',
      'Centralised backups and restores',
      'Site health and performance monitoring',
    ],
    summary: 'Solid Central simplifies multi-site WordPress management with centralized controls for updates, backups and security.',
    detailedReview: `Solid Central is focused on teams and agencies who run multiple WordPress sites. It centralises common administrative tasks so you can manage updates, backups and security from one place. The convenience and time-savings are the main benefits.`,
  },
  4: {
    // Restrict Content Pro
    rating: 4.4,
    price: '$149/year',
    bestFor: 'Membership sites and creators selling subscriptions',
    pros: [
      'Straightforward setup for membership tiers',
      'Good integrations with payment gateways',
      'Lightweight and developer-friendly',
    ],
    cons: [
      'Fewer built-in features than some competitors',
      'Advanced functionality requires paid add-ons',
    ],
    features: [
      'Subscription management',
      'Content restriction by membership level',
      'Discount codes and subscription coupons',
    ],
    summary: 'Restrict Content Pro is a focused, reliable membership plugin that does the essentials well without unnecessary bloat.',
    detailedReview: `Restrict Content Pro provides a clean and reliable approach to membership management. It integrates with popular payment processors and keeps membership workflows simple for site owners and members alike.`,
  },
  6: {
    // GiveWP
    rating: 4.6,
    price: 'Free / Premium addons',
    bestFor: 'Non-profits and organisations collecting donations',
    pros: [
      'Feature-rich donation forms',
      'Donor management and reporting',
      'Many integrations for payments and CRMs',
    ],
    cons: [
      'Premium features can add up in cost',
      'Initial setup requires mapping payment processors',
    ],
    features: [
      'Custom donation forms',
      'Recurring donations and donor management',
      'Multiple payment gateway support',
    ],
    summary: 'GiveWP is an excellent donation platform for WordPress, offering rich donor features and reliable payment integrations.',
    detailedReview: `GiveWP makes accepting donations simple while giving non-profits powerful tools for donor management and reporting. The plugin scales from small charities to large organisations with advanced needs.`,
  },
  7: {
    // The Events Calendar
    rating: 4.5,
    price: 'Free / Pro starting at $99/year',
    bestFor: 'Sites that need event listings, ticketing and calendars',
    pros: [
      'Robust event management features',
      'Good ecosystem of add-ons',
      'Reliable performance under load',
    ],
    cons: [
      'Some features locked behind Pro',
      'Large-scale event systems may require custom work',
    ],
    features: [
      'Recurring events and venue management',
      'Calendar views and widgets',
      'Ticketing integrations via add-ons',
    ],
    summary: 'The Events Calendar is a mature, feature-rich plugin for managing events and calendars on WordPress sites.',
    detailedReview: `With a long track record, The Events Calendar provides dependable tools for event creation, display and ticketing. Add-ons extend functionality for complex use cases.`,
  },
  8: {
    // Iconic
    rating: 4.3,
    price: 'Varies by extension',
    bestFor: 'WooCommerce stores needing specialised extensions',
    pros: [
      'Useful set of WooCommerce-focused extensions',
      'Quality support and documentation',
    ],
    cons: [
      'Extensions sold separately',
      'Can become costly with multiple add-ons',
    ],
    features: [
      'Cart and checkout enhancements',
      'Product add-ons and forms',
    ],
    summary: 'Iconic offers solid WooCommerce extensions that solve specific store needs without heavy custom development.',
    detailedReview: `If your WooCommerce store needs targeted functionality like product add-ons or bookings, Iconic extensions are well-built and supported. They are a pragmatic choice for focused features.`,
  },
  9: {
    // Orderable
    rating: 4.2,
    price: 'Free / Pro',
    bestFor: 'Restaurants and businesses needing online ordering',
    pros: [
      'Designed specifically for ordering workflows',
      'Good integration with payment gateways and delivery options',
    ],
    cons: [
      'Niche use-case—limited outside food ordering',
      'Advanced features require pro license',
    ],
    features: [
      'Menu builder and order management',
      'Delivery and pickup scheduling',
    ],
    summary: 'Orderable is a focused ordering plugin ideal for restaurants and local businesses that need a simple ordering flow.',
    detailedReview: `Orderable streamlines menu creation and order processing for restaurants. For businesses outside food service, its usefulness is limited but excellent within its niche.`,
  },
  11: {
    // Kadence Theme & Blocks
    rating: 4.7,
    price: 'Free / Pro $79/year',
    bestFor: 'Users wanting fast, flexible themes with block builder support',
    pros: [
      'Very fast and lightweight',
      'Great blocks and starter templates',
      'Excellent customisation without code',
    ],
    cons: [
      'Some advanced header features require Pro',
    ],
    features: [
      'Theme customizer and block library',
      'Starter templates and WooCommerce integration',
    ],
    summary: 'Kadence is a performance-focused theme with excellent block editor support and starter templates for fast site builds.',
    detailedReview: `Kadence balances speed and flexibility, making it a top choice for those who want a lightweight theme with modern block tooling and templates ready to go.`,
  },
  12: {
    // Astra Theme
    rating: 4.6,
    price: 'Free / Pro from $59/year',
    bestFor: 'Non-developers who want a customizable multipurpose theme',
    pros: [
      'Large library of starter sites',
      'Good compatibility with page builders',
      'Performance optimised',
    ],
    cons: [
      'Pro features behind paywall',
    ],
    features: [
      'Starter templates',
      'Custom layout options',
      'Page builder integrations',
    ],
    summary: 'Astra is a popular, flexible theme with many starter sites and strong page builder compatibility.',
    detailedReview: `Astra continues to be a go-to multipurpose theme thanks to its speed, starter sites and tight integration with popular builders like Elementor and Beaver Builder.`,
  },
  13: {
    // GeneratePress
    rating: 4.6,
    price: 'Free / Premium $59/year',
    bestFor: 'Performance-minded users and developers wanting a modular theme',
    pros: [
      'Extremely lightweight',
      'Modular premium features',
      'Strong accessibility and stability',
    ],
    cons: [
      'UI is minimal—more work required for visual polish',
    ],
    features: [
      'Modular sections for layout and typography',
      'Performance-first defaults',
    ],
    summary: 'GeneratePress is a minimal, highly optimised theme ideal for developers and speed-focused sites.',
    detailedReview: `GeneratePress emphasises speed and stability. Its premium module system lets you enable only what you need, keeping the site lean and fast.`,
  },
  14: {
    // Schema Pro
    rating: 4.4,
    price: '$79/year',
    bestFor: 'Sites wanting easy structured data and rich snippets',
    pros: [
      'Simple UI for adding schema types',
      'Reduces manual schema editing',
    ],
    cons: [
      "Focused tool—won't replace an SEO plugin",
    ],
    features: [
      'Pre-built schema types',
      'Auto-apply schema to posts and products',
    ],
    summary: 'Schema Pro simplifies adding structured data to WordPress sites, improving visibility in search results.',
    detailedReview: `Schema Pro streamlines schema implementation so site owners can add Product, Article, FAQ and other schema types without touching code.`,
  },
  15: {
    // Spectra
    rating: 4.2,
    price: 'Free / Pro',
    bestFor: 'Gutenberg users who want extended blocks and patterns',
    pros: [
      'Large block library and patterns',
      'Improves Gutenberg capabilities',
    ],
    cons: [
      'Some blocks overlap with other plugins',
    ],
    features: [
      'Section blocks, patterns and advanced styling options',
    ],
    summary: 'Spectra expands Gutenberg with a useful set of blocks and ready-made sections to build pages quickly.',
    detailedReview: `For teams embracing Gutenberg, Spectra provides helpful building blocks and layout patterns to speed up page creation.`,
  },
  16: {
    // Elementor
    rating: 4.7,
    price: 'Free / Pro from $59/year',
    bestFor: 'Designers and agencies who need visual page building power',
    pros: [
      'Powerful visual editor with many widgets',
      'Theme builder and popup builder included',
      'Large third-party ecosystem',
    ],
    cons: [
      'Can be heavy if not optimised',
      'Some advanced features locked to Pro',
    ],
    features: [
      'Drag-and-drop visual editor',
      'Theme building and WooCommerce widgets',
    ],
    summary: 'Elementor remains a market-leading visual builder that gives designers granular control without coding.',
    detailedReview: `Elementor's visual editor and extensive widget set make it simple to craft complex layouts. Performance considerations exist, but proper optimisation keeps sites fast.`,
  },
  17: {
    // Divi Builder
    rating: 4.4,
    price: 'Yearly access / Lifetime options',
    bestFor: 'Users wanting a full theme + builder ecosystem',
    pros: [
      'All-in-one theme and builder with many templates',
      'Strong design-focused controls',
    ],
    cons: [
      'Proprietary system—lock-in risk',
      'Learning curve for the Divi interface',
    ],
    features: [
      'Visual builder, templates and global styles',
    ],
    summary: 'Divi provides a comprehensive theme and builder package with many templates and design controls for agencies and creatives.',
    detailedReview: `Divi's design-forward approach and extensive template library make it ideal for designers. Consider long-term maintenance and potential lock-in when choosing Divi.`,
  },
  18: {
    // Beaver Builder
    rating: 4.5,
    price: 'Free / Pro',
    bestFor: 'Developers and agencies wanting stable, developer-friendly builder',
    pros: [
      'Stable and well-documented',
      'Developer-friendly and extendable',
    ],
    cons: [
      'Fewer flashy features than competitors',
    ],
    features: [
      'Drag-and-drop builder with robust API',
    ],
    summary: 'Beaver Builder is a dependable, developer-friendly page builder focusing on stability and extensibility.',
    detailedReview: `Beaver Builder is a reliable choice for developers and clients who value stability and clean output. It focuses on doing core builder tasks exceptionally well.`,
  },
  19: {
    // LearnDash
    rating: 4.6,
    price: 'Starting at $169/year',
    bestFor: 'Professional course creators and training organisations',
    pros: [
      'Powerful course creation tools and quiz engine',
      'Good WooCommerce and membership integrations',
    ],
    cons: [
      'Premium pricing for full feature set',
    ],
    features: [
      'Course builder, quizzes and certificates',
    ],
    summary: 'LearnDash is a mature LMS for building professional online courses with robust assessment tools.',
    detailedReview: `LearnDash offers enterprise-grade LMS features, including quizzes, certificates and monetisation options, making it a top choice for course creators.`,
  },
  20: {
    // LearnPress
    rating: 4.1,
    price: 'Free / Paid add-ons',
    bestFor: 'Budget-conscious creators who want a basic LMS',
    pros: [
      'Open-source and free core',
      'Multiple add-ons for expanded features',
    ],
    cons: [
      'Add-ons required for many features',
      'Support varies by add-on vendor',
    ],
    features: [
      'Course management and basic quizzes',
    ],
    summary: 'LearnPress is a free, entry-level LMS plugin that can be extended with paid add-ons for more advanced functionality.',
    detailedReview: `LearnPress is a practical starting point for creators on a budget. While the core is free, many production-ready features require paid add-ons.`,
  },
}

/**
 * Get review data for a product
 */
export function getProductReview(productId) {
  return productReviews[productId] || null
}

/**
 * Get all reviewed product IDs
 */
export function getReviewedProductIds() {
  return Object.keys(productReviews).map(Number)
}
