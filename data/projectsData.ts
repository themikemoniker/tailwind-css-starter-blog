interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Agent Payment Project',
    description: `A CrewAI Flask application integrating LLM-powered agents with payment processing.
    Features Nostr Wallet Connect integration, Shopstr platform automation, and streaming responses
    via Server-Sent Events. Built with Python, OpenAI, and Tailwind CSS.`,
    imgSrc: '/static/images/agent-payment.svg',
    href: 'https://github.com/themikemoniker/agent-payment-project',
  },
  {
    title: 'Bitcoin Mining Dashboard',
    description: `An Elixir + Phoenix LiveView application for tracking Bitcoin mining profitability
    in real-time. Features live-updating charts, hashprice analytics, difficulty-to-price ratios,
    and personalized profitability calculations based on electricity costs.`,
    imgSrc: '/static/images/btc-dashboard.svg',
    href: 'https://github.com/themikemoniker/elixir-btc-network-stats',
  },
  {
    title: 'FrontEndGarden',
    description: `A curated collection of code examples and patterns for front-end interview
    preparation. Built with TypeScript, featuring practical demonstrations of common interview
    topics and coding challenges.`,
    imgSrc: '/static/images/frontend-garden.svg',
    href: 'https://github.com/themikemoniker/FrontEndGarden',
  },
]

export default projectsData
