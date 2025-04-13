import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Shield,
  Hammer,
  TreePine,
  Sword,
  Swords,
  Wallet,
  Flag,
  GraduationCap,
  Building2,
  HeartPulse,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0a0a0e]">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-[#3a2a18] bg-[#0a0a0e]/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Image src="/weathered-shield-sword.png" alt="SuiWars Logo" width={40} height={40} className="h-10 w-10" />
            <span className="text-xl font-bold text-[#d4af37]">SuiWars</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#features"
              className="text-sm font-medium text-[#d4af37] hover:text-[#f5cc3d] transition-colors"
            >
              Features
            </Link>
            <Link
              href="#factions"
              className="text-sm font-medium text-[#d4af37] hover:text-[#f5cc3d] transition-colors"
            >
              Factions
            </Link>
            <Link
              href="#gameplay"
              className="text-sm font-medium text-[#d4af37] hover:text-[#f5cc3d] transition-colors"
            >
              Gameplay
            </Link>
            <Link
              href="#howtoplay"
              className="text-sm font-medium text-[#d4af37] hover:text-[#f5cc3d] transition-colors"
            >
              How to Play
            </Link>
            <Link href="#roadmap" className="text-sm font-medium text-[#d4af37] hover:text-[#f5cc3d] transition-colors">
              Roadmap
            </Link>
          </nav>
          <Button className="hidden md:flex bg-[#a32035] hover:bg-[#c52840] text-white border border-[#d4af37]/30">
            <Wallet className="mr-2 h-4 w-4" />
            Connect Wallet
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden text-[#d4af37]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-[#3a2a18]">
          <div className="absolute inset-0 z-0">
            <Image
              src="/siege-of-aethelburg.png"
              alt="Medieval Battlefield"
              fill
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0e]"></div>
          </div>
          <div className="container relative z-10 mx-auto px-4 py-24 md:py-32 lg:py-40 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-block">
                <Image
                  src="/heraldic-sword-shield.png"
                  alt="SuiWars Logo"
                  width={120}
                  height={120}
                  className="mx-auto"
                />
              </div>
              <h1 className="mb-6 font-serif text-4xl font-bold tracking-tight text-[#d4af37] sm:text-5xl md:text-6xl">
                SuiWars: <span className="text-[#a32035]">Rise of Nations</span>
              </h1>
              <p className="mb-8 text-lg text-gray-300 md:text-xl">
                Build, Battle, Conquer: Forge your empire from the Stone Age to the Quantum Age in this epic real-time
                strategy game on the Sui blockchain
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button className="w-full sm:w-auto bg-[#a32035] hover:bg-[#c52840] text-white border border-[#d4af37]/30 text-lg px-8 py-6 h-auto">
                  <Wallet className="mr-2 h-5 w-5" />
                  Play Now
                </Button>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37]/10 text-lg px-8 py-6 h-auto"
                >
                  Watch Trailer
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0e] to-transparent"></div>
        </section>

        {/* Game Features Section */}
        <section id="features" className="py-16 md:py-24 border-b border-[#3a2a18]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="font-serif text-3xl font-bold text-[#d4af37] sm:text-4xl md:text-5xl">Game Features</h2>
              <div className="mt-4 h-1 w-24 bg-[#a32035] mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="rounded-lg border border-[#3a2a18] bg-[#0a0a0e]/60 p-6 backdrop-blur-sm transition-all hover:border-[#d4af37]/50 hover:shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#a32035]/20 text-[#d4af37]">
                  <Building2 className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-serif text-xl font-bold text-[#d4af37]">Modular Building System</h3>
                <p className="text-gray-400">
                  Construct and customize buildings with interchangeable modules that enhance production, efficiency,
                  and special abilities
                </p>
              </div>

              {/* Feature 2 */}
              <div className="rounded-lg border border-[#3a2a18] bg-[#0a0a0e]/60 p-6 backdrop-blur-sm transition-all hover:border-[#d4af37]/50 hover:shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#a32035]/20 text-[#d4af37]">
                  <TreePine className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-serif text-xl font-bold text-[#d4af37]">Historical Evolution</h3>
                <p className="text-gray-400">
                  Progress through 10 historical tiers from the Stone Age to the Quantum Age, with evolving buildings
                  and units
                </p>
              </div>

              {/* Feature 3 */}
              <div className="rounded-lg border border-[#3a2a18] bg-[#0a0a0e]/60 p-6 backdrop-blur-sm transition-all hover:border-[#d4af37]/50 hover:shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#a32035]/20 text-[#d4af37]">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-serif text-xl font-bold text-[#d4af37]">Specialized Citizens</h3>
                <p className="text-gray-400">
                  Train and specialize citizens in 8 different paths including Warriors, Entrepreneurs, Engineers, and
                  Scholars
                </p>
              </div>

              {/* Feature 4 */}
              <div className="rounded-lg border border-[#3a2a18] bg-[#0a0a0e]/60 p-6 backdrop-blur-sm transition-all hover:border-[#d4af37]/50 hover:shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#a32035]/20 text-[#d4af37]">
                  <Sword className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-serif text-xl font-bold text-[#d4af37]">Strategic Combat</h3>
                <p className="text-gray-400">
                  Command armies with rock-paper-scissors balancing, formation commands, and tactical AI for dynamic
                  battles
                </p>
              </div>

              {/* Feature 5 */}
              <div className="rounded-lg border border-[#3a2a18] bg-[#0a0a0e]/60 p-6 backdrop-blur-sm transition-all hover:border-[#d4af37]/50 hover:shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#a32035]/20 text-[#d4af37]">
                  <Swords className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-serif text-xl font-bold text-[#d4af37]">Nation Development</h3>
                <p className="text-gray-400">
                  Choose from different nation types with unique bonuses and develop your civilization through multiple
                  tech trees
                </p>
              </div>

              {/* Feature 6 */}
              <div className="rounded-lg border border-[#3a2a18] bg-[#0a0a0e]/60 p-6 backdrop-blur-sm transition-all hover:border-[#d4af37]/50 hover:shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#a32035]/20 text-[#d4af37]">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-serif text-xl font-bold text-[#d4af37]">NFT Ownership</h3>
                <p className="text-gray-400">
                  Own your troops, buildings, and land as NFTs on the Sui blockchain with true digital ownership and
                  tradability
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nation Types Section */}
        <section id="factions" className="py-16 md:py-24 border-b border-[#3a2a18]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="font-serif text-3xl font-bold text-[#d4af37] sm:text-4xl md:text-5xl">
                Choose Your Nation
              </h2>
              <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                Each nation type has unique bonuses and strategic advantages to master
              </p>
              <div className="mt-4 h-1 w-24 bg-[#a32035] mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Nation 1 */}
              <div className="group relative overflow-hidden rounded-lg border border-[#3a2a18] transition-all hover:border-[#d4af37]/50 hover:shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                <div className="aspect-square relative">
                  <Image
                    src="/stone-fortress-knights.png"
                    alt="Military Nation"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e] to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <h3 className="font-serif text-xl font-bold text-[#d4af37]">Military Nation</h3>
                  <p className="mt-2 text-sm text-gray-400">Combat bonuses and stronger units</p>
                </div>
              </div>

              {/* Nation 2 */}
              <div className="group relative overflow-hidden rounded-lg border border-[#3a2a18] transition-all hover:border-[#d4af37]/50 hover:shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                <div className="aspect-square relative">
                  <Image
                    src="/bustling-medieval-market.png"
                    alt="Economic Nation"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e] to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <h3 className="font-serif text-xl font-bold text-[#d4af37]">Economic Nation</h3>
                  <p className="mt-2 text-sm text-gray-400">Trade advantages and resource bonuses</p>
                </div>
              </div>

              {/* Nation 3 */}
              <div className="group relative overflow-hidden rounded-lg border border-[#3a2a18] transition-all hover:border-[#d4af37]/50 hover:shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=400&width=400&query=medieval cultural nation with artists and theater"
                    alt="Cultural Nation"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e] to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <h3 className="font-serif text-xl font-bold text-[#d4af37]">Cultural Nation</h3>
                  <p className="mt-2 text-sm text-gray-400">Happiness bonuses and diplomatic advantages</p>
                </div>
              </div>

              {/* Nation 4 */}
              <div className="group relative overflow-hidden rounded-lg border border-[#3a2a18] transition-all hover:border-[#d4af37]/50 hover:shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=400&width=400&query=medieval scientific nation with scholars and observatory"
                    alt="Scientific Nation"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e] to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <h3 className="font-serif text-xl font-bold text-[#d4af37]">Scientific Nation</h3>
                  <p className="mt-2 text-sm text-gray-400">Research speed bonuses and technological edge</p>
                </div>
              </div>

              {/* Nation 5 */}
              <div className="group relative overflow-hidden rounded-lg border border-[#3a2a18] transition-all hover:border-[#d4af37]/50 hover:shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=400&width=400&query=medieval balanced nation with diverse buildings and people"
                    alt="Balanced Nation"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e] to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <h3 className="font-serif text-xl font-bold text-[#d4af37]">Balanced Nation</h3>
                  <p className="mt-2 text-sm text-gray-400">Moderate bonuses across all categories</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Building Evolution Showcase */}
        <section id="gameplay" className="py-16 md:py-24 border-b border-[#3a2a18]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="font-serif text-3xl font-bold text-[#d4af37] sm:text-4xl md:text-5xl">
                Historical Evolution
              </h2>
              <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                Watch your buildings and citizens evolve through 10 historical tiers from Stone Age to Quantum Age
              </p>
              <div className="mt-4 h-1 w-24 bg-[#a32035] mx-auto"></div>
            </div>
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-lg border-2 border-[#d4af37]/30">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=720&width=1280&query=evolution of buildings from stone age to futuristic"
                  alt="Building Evolution Timeline"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-[#a32035]/80 p-4 text-white hover:bg-[#a32035] transition-colors cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-lg border border-[#3a2a18] bg-[#0a0a0e]/60 p-6 backdrop-blur-sm">
                <h3 className="mb-4 font-serif text-2xl font-bold text-[#d4af37]">Building Types</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#a32035]/20 text-[#d4af37]">
                      <Sword className="h-5 w-5" />
                    </div>
                    <span className="text-gray-300">Barracks</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#a32035]/20 text-[#d4af37]">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <span className="text-gray-300">Market</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#a32035]/20 text-[#d4af37]">
                      <Shield className="h-5 w-5" />
                    </div>
                    <span className="text-gray-300">Fortress</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#a32035]/20 text-[#d4af37]">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <span className="text-gray-300">Academy</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#a32035]/20 text-[#d4af37]">
                      <HeartPulse className="h-5 w-5" />
                    </div>
                    <span className="text-gray-300">Medical Facility</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#a32035]/20 text-[#d4af37]">
                      <Hammer className="h-5 w-5" />
                    </div>
                    <span className="text-gray-300">Infrastructure Hub</span>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-[#3a2a18] bg-[#0a0a0e]/60 p-6 backdrop-blur-sm">
                <h3 className="mb-4 font-serif text-2xl font-bold text-[#d4af37]">Historical Tiers</h3>
                <ol className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#a32035] text-white text-xs">
                      1
                    </span>
                    <span>Stone Age (10,000-3000 BCE)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#a32035] text-white text-xs">
                      2
                    </span>
                    <span>Bronze Age (3000-1200 BCE)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#a32035] text-white text-xs">
                      3
                    </span>
                    <span>Iron Age (1200 BCE-500 CE)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#a32035] text-white text-xs">
                      4
                    </span>
                    <span>Medieval Age (500-1400 CE)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#a32035] text-white text-xs">
                      5
                    </span>
                    <span>Renaissance Age (1400-1700 CE)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#a32035] text-white text-xs">
                      6
                    </span>
                    <span>Industrial Age (1700-1900 CE)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#a32035] text-white text-xs">
                      7
                    </span>
                    <span>Modern Age (1900-2000 CE)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#a32035] text-white text-xs">
                      8
                    </span>
                    <span>Information Age (2000-2050 CE)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#a32035] text-white text-xs">
                      9
                    </span>
                    <span>Nano Age (2050-2150 CE)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#a32035] text-white text-xs">
                      10
                    </span>
                    <span>Quantum Age (2150+ CE)</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Citizen Types Section */}
        <section className="py-16 md:py-24 border-b border-[#3a2a18]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="font-serif text-3xl font-bold text-[#d4af37] sm:text-4xl md:text-5xl">
                Citizen Specialization
              </h2>
              <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                Train and specialize your citizens in different paths to build a diverse and powerful empire
              </p>
              <div className="mt-4 h-1 w-24 bg-[#a32035] mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-lg border border-[#3a2a18] bg-[#0a0a0e]/60 p-6 backdrop-blur-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#a32035]/20 text-[#d4af37]">
                  <Sword className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-serif text-xl font-bold text-[#d4af37]">Warrior</h3>
                <p className="text-gray-400 mb-4">
                  Combat specialists who defend your empire and lead your armies to victory
                </p>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>• Melee Combat Specialist</p>
                  <p>• Ranged Combat Specialist</p>
                  <p>• Strategic Combat Specialist</p>
                </div>
              </div>

              <div className="rounded-lg border border-[#3a2a18] bg-[#0a0a0e]/60 p-6 backdrop-blur-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#a32035]/20 text-[#d4af37]">
                  <Building2 className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-serif text-xl font-bold text-[#d4af37]">Entrepreneur</h3>
                <p className="text-gray-400 mb-4">
                  Economic specialists who manage trade, finance, and business ventures
                </p>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>• Trade Specialist</p>
                  <p>• Finance Specialist</p>
                  <p>• Innovation Specialist</p>
                </div>
              </div>

              <div className="rounded-lg border border-[#3a2a18] bg-[#0a0a0e]/60 p-6 backdrop-blur-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#a32035]/20 text-[#d4af37]">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-serif text-xl font-bold text-[#d4af37]">Scholar</h3>
                <p className="text-gray-400 mb-4">Research specialists who advance your civilization's technology</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>• Applied Research</p>
                  <p>• Theoretical Research</p>
                  <p>• Military Research</p>
                </div>
              </div>

              <div className="rounded-lg border border-[#3a2a18] bg-[#0a0a0e]/60 p-6 backdrop-blur-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#a32035]/20 text-[#d4af37]">
                  <Hammer className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-serif text-xl font-bold text-[#d4af37]">Engineer</h3>
                <p className="text-gray-400 mb-4">
                  Technical specialists who construct and improve your infrastructure
                </p>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>• Construction Specialist</p>
                  <p>• Systems Specialist</p>
                  <p>• Warfare Engineering Specialist</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Play Section */}
        <section id="howtoplay" className="py-16 md:py-24 border-b border-[#3a2a18]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="font-serif text-3xl font-bold text-[#d4af37] sm:text-4xl md:text-5xl">How to Play</h2>
              <div className="mt-4 h-1 w-24 bg-[#a32035] mx-auto"></div>
            </div>
            <div className="mx-auto max-w-4xl">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {/* Step 1 */}
                <div className="relative rounded-lg border border-[#3a2a18] bg-[#0a0a0e]/60 p-6 text-center backdrop-blur-sm">
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-[#a32035] p-3 text-white">
                    <Wallet className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-serif text-xl font-bold text-[#d4af37]">Connect Wallet</h3>
                  <div className="my-4 h-0.5 w-12 bg-[#d4af37]/30 mx-auto"></div>
                  <p className="text-gray-400">Connect your Sui wallet to start your journey in the SuiWars universe</p>
                </div>

                {/* Step 2 */}
                <div className="relative rounded-lg border border-[#3a2a18] bg-[#0a0a0e]/60 p-6 text-center backdrop-blur-sm">
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-[#a32035] p-3 text-white">
                    <Flag className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-serif text-xl font-bold text-[#d4af37]">Choose Nation</h3>
                  <div className="my-4 h-0.5 w-12 bg-[#d4af37]/30 mx-auto"></div>
                  <p className="text-gray-400">
                    Select your nation type based on your preferred playstyle and strategic approach
                  </p>
                </div>

                {/* Step 3 */}
                <div className="relative rounded-lg border border-[#3a2a18] bg-[#0a0a0e]/60 p-6 text-center backdrop-blur-sm">
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-[#a32035] p-3 text-white">
                    <Sword className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-serif text-xl font-bold text-[#d4af37]">Begin Conquest</h3>
                  <div className="my-4 h-0.5 w-12 bg-[#d4af37]/30 mx-auto"></div>
                  <p className="text-gray-400">
                    Build your base, train your citizens, and conquer territories to expand your empire
                  </p>
                </div>
              </div>
              <div className="mt-12 text-center">
                <Button className="bg-[#a32035] hover:bg-[#c52840] text-white border border-[#d4af37]/30">
                  Read Full Guide
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Tokenomics Section */}
        <section className="py-16 md:py-24 border-b border-[#3a2a18]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="font-serif text-3xl font-bold text-[#d4af37] sm:text-4xl md:text-5xl">Tokenomics</h2>
              <div className="mt-4 h-1 w-24 bg-[#a32035] mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* $RISE Token */}
              <div className="rounded-lg border border-[#3a2a18] bg-[#0a0a0e]/60 p-6 backdrop-blur-sm">
                <h3 className="mb-4 font-serif text-2xl font-bold text-[#d4af37]">$RISE Token</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[#3a2a18] pb-2">
                    <span className="text-gray-300">Token Name</span>
                    <span className="font-medium text-[#d4af37]">Sui Wars</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-[#3a2a18] pb-2">
                    <span className="text-gray-300">Token Symbol</span>
                    <span className="font-medium text-[#d4af37]">$RISE</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-[#3a2a18] pb-2">
                    <span className="text-gray-300">Total Supply</span>
                    <span className="font-medium text-[#d4af37]">10,000,000,000</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-[#3a2a18] pb-2">
                    <span className="text-gray-300">Blockchain</span>
                    <span className="font-medium text-[#d4af37]">Sui</span>
                  </div>
                  <div className="flex items-center justify-between pb-2">
                    <span className="text-gray-300">Type</span>
                    <span className="font-medium text-[#d4af37]">Utility Token</span>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="font-serif text-lg font-bold text-[#d4af37] mb-3">Token Utility</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-[#a32035]"></div>
                      <span>In-game purchases, upgrades, and special items</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-[#a32035]"></div>
                      <span>Staking for rewards and governance rights</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-[#a32035]"></div>
                      <span>NFT upgrades and trait enhancements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-[#a32035]"></div>
                      <span>Access fees for premium events and PvP arenas</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Token Distribution */}
              <div className="rounded-lg border border-[#3a2a18] bg-[#0a0a0e]/60 p-6 backdrop-blur-sm">
                <h3 className="mb-4 font-serif text-2xl font-bold text-[#d4af37]">Token Distribution</h3>
                <div className="relative h-64 w-full">
                  <Image
                    src="/placeholder.svg?height=300&width=500&query=pie chart token distribution"
                    alt="Token Distribution Chart"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-sm bg-[#d4af37]"></div>
                    <span className="text-gray-300">Community: 35%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-sm bg-[#a32035]"></div>
                    <span className="text-gray-300">Staking & Farming: 25%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-sm bg-[#3a2a18]"></div>
                    <span className="text-gray-300">Development: 15%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-sm bg-[#5a4a38]"></div>
                    <span className="text-gray-300">Team & Advisors: 15%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-sm bg-[#7a6a58]"></div>
                    <span className="text-gray-300">Reserve Fund: 10%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap Timeline Section */}
        <section id="roadmap" className="py-16 md:py-24 border-b border-[#3a2a18]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="font-serif text-3xl font-bold text-[#d4af37] sm:text-4xl md:text-5xl">
                Development Roadmap
              </h2>
              <div className="mt-4 h-1 w-24 bg-[#a32035] mx-auto"></div>
            </div>
            <div className="relative mx-auto max-w-4xl">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-[#3a2a18]"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {/* Phase 1 */}
                <div className="relative md:ml-0">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="order-2 md:order-1 md:w-1/2 md:pr-8 md:text-right">
                      <h3 className="font-serif text-xl font-bold text-[#d4af37]">Phase 1: NFT Passport Launch</h3>
                      <p className="mt-2 text-gray-400">
                        Launch of NFT Passports with VIP, Premium, and Regular tiers. Early adopters receive regular
                        airdrops.
                      </p>
                    </div>
                    <div className="z-10 order-1 md:order-2 mb-4 md:mb-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#a32035] text-white md:mx-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M12 5v14" />
                        <path d="m19 12-7 7-7-7" />
                      </svg>
                    </div>
                    <div className="order-3 md:w-1/2 md:pl-8 hidden md:block"></div>
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="relative md:mr-0">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="order-2 md:order-1 md:w-1/2 md:pr-8 hidden md:block"></div>
                    <div className="z-10 order-1 md:order-2 mb-4 md:mb-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#a32035] text-white md:mx-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M12 5v14" />
                        <path d="m19 12-7 7-7-7" />
                      </svg>
                    </div>
                    <div className="order-3 md:w-1/2 md:pl-8 md:text-left">
                      <h3 className="font-serif text-xl font-bold text-[#d4af37]">Phase 2: Base Builder Launch</h3>
                      <p className="mt-2 text-gray-400">
                        Build cities and military bases, train troops, manage economy, and engage in PvE raids and PvP
                        faction wars.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phase 3 */}
                <div className="relative md:ml-0">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="order-2 md:order-1 md:w-1/2 md:pr-8 md:text-right">
                      <h3 className="font-serif text-xl font-bold text-[#d4af37]">Phase 3: Alliance System</h3>
                      <p className="mt-2 text-gray-400">
                        Introduction of guild and alliance mechanics for cooperative gameplay and territory control.
                      </p>
                    </div>
                    <div className="z-10 order-1 md:order-2 mb-4 md:mb-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#a32035] text-white md:mx-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M12 5v14" />
                        <path d="m19 12-7 7-7-7" />
                      </svg>
                    </div>
                    <div className="order-3 md:w-1/2 md:pl-8 hidden md:block"></div>
                  </div>
                </div>

                {/* Phase 4 */}
                <div className="relative md:mr-0">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="order-2 md:order-1 md:w-1/2 md:pr-8 hidden md:block"></div>
                    <div className="z-10 order-1 md:order-2 mb-4 md:mb-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#3a2a18] text-[#d4af37] md:mx-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M12 5v14" />
                        <path d="m19 12-7 7-7-7" />
                      </svg>
                    </div>
                    <div className="order-3 md:w-1/2 md:pl-8 md:text-left">
                      <h3 className="font-serif text-xl font-bold text-[#d4af37]">Phase 4: Land Expansion</h3>
                      <p className="mt-2 text-gray-400">
                        New territories, resources, and additional factions added to the game world.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phase 5 */}
                <div className="relative md:ml-0">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="order-2 md:order-1 md:w-1/2 md:pr-8 md:text-right">
                      <h3 className="font-serif text-xl font-bold text-[#d4af37]">Phase 5: Mobile Version</h3>
                      <p className="mt-2 text-gray-400">
                        Launch of mobile applications for iOS and Android with cross-platform gameplay.
                      </p>
                    </div>
                    <div className="z-10 order-1 md:order-2 mb-4 md:mb-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#3a2a18] text-[#d4af37] md:mx-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M12 5v14" />
                        <path d="m19 12-7 7-7-7" />
                      </svg>
                    </div>
                    <div className="order-3 md:w-1/2 md:pl-8 hidden md:block"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl rounded-lg border border-[#3a2a18] bg-[#0a0a0e]/60 p-8 backdrop-blur-sm md:p-12">
              <div className="text-center">
                <h2 className="font-serif text-2xl font-bold text-[#d4af37] sm:text-3xl">Join the Battle</h2>
                <p className="mt-4 text-gray-400">
                  Subscribe to our newsletter for exclusive updates, early access opportunities, and special rewards
                </p>
              </div>
              <form className="mt-8">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 border-[#3a2a18] bg-[#0a0a0e]/80 focus:border-[#d4af37] focus:ring-[#d4af37]"
                    required
                  />
                  <Button className="bg-[#a32035] hover:bg-[#c52840] text-white border border-[#d4af37]/30">
                    Subscribe
                  </Button>
                </div>
                <p className="mt-3 text-xs text-gray-500">
                  By subscribing, you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#3a2a18] bg-[#0a0a0e]">
        <div className="container mx-auto px-4 py-8 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <Image
                  src="/weathered-shield-sword.png"
                  alt="SuiWars Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
                <span className="text-xl font-bold text-[#d4af37]">SuiWars</span>
              </div>
              <p className="mt-4 text-sm text-gray-400">
                Build, Battle, Conquer: The ultimate blockchain real-time strategy game where you build empires, command
                armies, and conquer the world.
              </p>
              <p className="mt-2 text-sm text-gray-400">
                Website:{" "}
                <a href="http://suiwars.io" className="text-[#d4af37] hover:underline">
                  suiwars.io
                </a>
              </p>
              <p className="mt-1 text-sm text-gray-400">
                Email:{" "}
                <a href="mailto:suiwarsgame@gmail.com" className="text-[#d4af37] hover:underline">
                  suiwarsgame@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#d4af37]">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-[#d4af37] transition-colors">
                    Whitepaper
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-[#d4af37] transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-[#d4af37] transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-[#d4af37] transition-colors">
                    Tutorials
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#d4af37]">Community</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-[#d4af37] transition-colors">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-[#d4af37] transition-colors">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-[#d4af37] transition-colors">
                    Telegram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-[#d4af37] transition-colors">
                    Medium
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#d4af37]">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-[#d4af37] transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-[#d4af37] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-[#d4af37] transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-[#3a2a18] pt-8 text-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} SuiWars: Rise of Nations. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
