/* Minimalist Design - Matching Main PUMPSLY Site
 * Clean dark background, green accents, no heavy images
 * 5 slides: Hackathon, Prediction Market, Duels, Contests, Final CTA
 */

import { Button } from "@/components/ui/button";
import { ArrowDown, Trophy, Swords, BarChart3, Rocket, Twitter, Send, TrendingUp, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 6; // Updated to match actual slide count

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const slideIndex = Math.round(scrollPosition / windowHeight);
      setCurrentSlide(slideIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSlide = (index: number) => {
    window.scrollTo({
      top: index * window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {/* Floating Background Orbs & Animated Logos */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-white">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#00994c] rounded-full opacity-10 blur-[100px] animate-float-slow" />
        <div className="absolute top-1/3 right-20 w-80 h-80 bg-[#00994c] rounded-full opacity-15 blur-[80px] animate-float-medium" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-[#00994c] rounded-full opacity-10 blur-[90px] animate-float-fast" />
        <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-[#00994c] rounded-full opacity-12 blur-[70px] animate-float-slow" />

        {/* Animated Background Elements */}
        <AnimatePresence>
          {/* Floating Solana Logo */}
          {/* Floating Solana Logo */}
          <motion.div
            className="absolute top-1/4 right-[10%] z-0"
            animate={{
              x: currentSlide % 2 === 0 ? 0 : 50,
            }}
            transition={{
              x: { duration: 1.5, ease: "easeInOut" }
            }}
          >
            <motion.div
              className="opacity-20 blur-[1px] md:opacity-20 opacity-0"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <img src="/images/solana-logo.png" alt="Solana" className="w-16 h-16 md:w-32 md:h-32 object-contain grayscale" />
            </motion.div>
          </motion.div>

          {/* Floating Pump.fun Logo */}
          <motion.div
            className="absolute bottom-1/3 left-[5%] z-0"
            animate={{
              x: currentSlide % 2 !== 0 ? 0 : -30,
            }}
            transition={{
              x: { duration: 1.5, ease: "easeInOut" }
            }}
          >
            <motion.div
              className="opacity-15 blur-[1px] md:opacity-15 opacity-0"
              animate={{
                y: [0, 30, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 7, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <img src="/images/pumpfun-logo.png" alt="Pump" className="w-20 h-20 md:w-40 md:h-40 object-contain grayscale" />
            </motion.div>
          </motion.div>

          {/* Floating Pumpsly Mark Logo */}
          <motion.div
            className="absolute bottom-[5%] right-[5%] z-0"
            animate={{
              x: currentSlide % 2 === 0 ? 0 : 40,
            }}
            transition={{
              x: { duration: 1.5, ease: "easeInOut" }
            }}
          >
            <motion.div
              className="opacity-40 blur-[1px] md:opacity-40 opacity-20"
              animate={{
                y: [0, -25, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
                rotate: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }
              }}
            >
              <img src="/images/pumpsly-mark.png" alt="Pumpsly Mark" className="w-32 h-32 md:w-80 md:h-80 object-contain grayscale" />
            </motion.div>
          </motion.div>


        </AnimatePresence>
      </div>
      {/* Slide Navigation Dots - Hidden on Mobile */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3 bg-gray-100/80 backdrop-blur-sm p-3 rounded-full border border-gray-200 shadow-sm">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
              ? "bg-[#00994c] scale-125"
              : "bg-gray-300 hover:bg-gray-400"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide 1: Hackathon Participant */}
      <section className="slide relative flex items-center justify-center bg-transparent backdrop-blur-[2px]">
        <div className="container relative z-10 text-center max-w-4xl px-6 origin-center scale-90 md:scale-100 transition-transform duration-500">
          <div className="mb-8 flex justify-center items-center gap-4">
            <img
              src="/images/pumpfun-logo.png"
              alt="Pump.fun"
              className="h-10 w-10 object-contain opacity-80"
            />
            <div className="px-5 py-2 rounded-md border border-[#00994c]/30 bg-[#00994c]/5">
              <p className="text-[#00994c] font-medium text-sm tracking-wide">
                HACKATHON PARTICIPANT
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-center">
            <img
              src="/images/pumpsly-logo-v3.png"
              alt="Pumpsly"
              className="h-32 md:h-64 object-contain drop-shadow-sm"
            />
          </div>

          <h2 className="text-lg md:text-2xl font-medium mb-12 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Stop trying to figure out politics and other BS.<br />
            Bet on what you're actually an expert in.
          </h2>

        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block">
          <button
            onClick={() => scrollToSlide(1)}
            className="animate-bounce flex items-center justify-center w-12 h-12 rounded-full bg-white border border-gray-100 shadow-lg text-[#00994c] hover:bg-gray-50 transition-all hover:scale-105"
            aria-label="Scroll to next slide"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </section>



      {/* Slide 3: $PUMPSLY Tokenomics */}
      <section className="slide relative flex items-center justify-center bg-transparent backdrop-blur-[2px]">
        <div className="container relative z-10 max-w-5xl px-6 origin-center scale-90 md:scale-100 transition-transform duration-500">
          <div className="text-center mb-6 md:mb-12">
            <h2 className="text-4xl md:text-6xl font-bold green-glow mb-2 md:mb-4">
              $PUMPSLY
            </h2>

            <h3 className="text-lg md:text-2xl font-medium mb-3 md:mb-6 text-gray-600">
              Fair Launch on Pump.fun
            </h3>

            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4 md:px-0">
              Following Pump.fun hackathon rules, we will purchase <span className="text-[#00994c] font-semibold">10% of tokens</span> at launch.
              These tokens will be distributed as rewards at the end of <span className="text-[#00994c] font-semibold">Season 0</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto items-center">
            {/* Tokenomics Chart */}
            <div className="flex justify-center w-full -mt-4 md:mt-0">
              <div className="relative w-full max-w-[14rem] md:max-w-[26rem] aspect-square">
                {/* Donut Chart */}
                <svg viewBox="-50 -50 300 300" className="w-full h-full transform -rotate-90 overflow-visible">
                  {/* Background Circle (Gray) */}
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="rgba(100, 100, 100, 0.2)"
                    strokeWidth="30"
                  />

                  {/* Main Green Segment (10%) */}
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#00994c"
                    strokeWidth="30"
                    strokeDasharray="50 452"
                    className="drop-shadow-[0_0_8px_rgba(0,255,65,0.6)]"
                  />
                </svg>
              </div>
            </div>

            {/* Tokenomics Info */}
            <div className="space-y-3 md:space-y-6 -mt-2 md:mt-0">
              <div className="p-4 md:p-6 rounded-lg border border-[#00994c]/30 bg-[#00994c]/5">
                <div className="flex items-center gap-3 mb-1 md:mb-3">
                  <div className="w-3 h-3 rounded-full bg-[#00994c]"></div>
                  <h4 className="text-base md:text-lg font-bold text-gray-900">10% Season 0 Rewards</h4>
                </div>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  Traders, duel winners, and contest participants rewards at Season 0 end.
                </p>
              </div>

              <div className="p-4 md:p-6 rounded-lg border border-gray-200 bg-[rgba(100,100,100,0.1)] shadow-sm">
                <div className="flex items-center gap-3 mb-1 md:mb-3">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <h4 className="text-base md:text-lg font-bold text-gray-900">90% Community</h4>
                </div>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  Fair launch on Pump.fun. True community-owned token.
                </p>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* Slide 4: Prediction Market */}
      <section className="slide relative flex items-center justify-center bg-transparent backdrop-blur-[2px]">
        <div className="container relative z-10 max-w-6xl px-6 origin-center scale-90 md:scale-100 transition-transform duration-500">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <h2 className="text-2xl md:text-6xl font-bold green-glow">
                PREDICTION MARKETS
              </h2>
            </div>

            <h3 className="text-xl md:text-2xl font-medium mb-6 text-gray-600">
              Bet on the Future. Win <span className="text-[#00994c]">$PUMPSLY</span>.
            </h3>

            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Predict key metrics and events in the Solana ecosystem. Earn <span className="text-[#00994c] font-semibold">$PUMPSLY</span> tokens
              for accurate predictions. Two main categories to trade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="p-8 rounded-lg border border-gray-200 bg-white shadow-sm card-hover">
              <img src="/images/solana-logo.png" alt="Solana" className="h-12 w-auto object-contain mb-4" />
              <h4 className="font-semibold text-gray-900 mb-3 text-xl">Solana Metrics</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Price movements, network metrics, influencer X metrics, TVL changes, and ecosystem milestones.
              </p>
            </div>

            <div className="p-8 rounded-lg border border-gray-200 bg-white shadow-sm card-hover">
              <img src="/images/pumpfun-logo.png" alt="Pump.fun" className="h-12 w-auto object-contain mb-4" />
              <h4 className="font-semibold text-gray-900 mb-3 text-xl">Pump.fun Metrics</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Trading volume, graduated tokens count, top performers, daily launches, and platform statistics.
              </p>
            </div>
          </div>


        </div>
      </section>

      {/* Slide 3: Duels */}
      <section className="slide relative flex items-center justify-center bg-transparent backdrop-blur-[2px]">
        <div className="container relative z-10 max-w-5xl text-center px-6 origin-center scale-85 md:scale-100 transition-transform duration-500">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-3xl md:text-6xl font-bold text-gray-900">
              PREDICTION <span className="green-glow">DUELS</span>
            </h2>
          </div>

          <h3 className="text-xl md:text-2xl font-medium mb-6 text-gray-600">
            Challenge Anyone. Winner Takes All <span className="text-[#00994c]">$PUMPSLY</span>.
          </h3>

          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            GameFi prediction battles. Choose a coin (SOL or PUMP token), predict higher or lower, and watch the 1-minute chart.
            Winner takes all <span className="text-[#00994c] font-semibold">$PUMPSLY</span> tokens.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto mb-12">

            {/* Step 1 */}
            <div className="group relative p-4 md:p-6 rounded-2xl border border-gray-100 bg-white shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center md:items-start md:text-left h-full">
              <div className="absolute top-2 right-4 text-4xl md:text-5xl font-black text-gray-200 group-hover:text-[#00994c]/20 transition-colors select-none">
                01
              </div>
              <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gray-50 group-hover:bg-[#00994c]/10 flex items-center justify-center mb-3 md:mb-4 transition-colors">
                <div className="flex items-center justify-center gap-1">
                  <img src="/images/solana-logo.png" alt="SOL" className="w-3.5 h-3.5 object-contain opacity-60 group-hover:opacity-100 transition-opacity" />
                  <span className="text-gray-300 text-xs">/</span>
                  <img src="/images/pumpfun-logo.png" alt="PUMP" className="w-3.5 h-3.5 object-contain opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <h4 className="relative z-10 font-bold text-gray-900 mb-2 text-lg">Choose Coin</h4>
              <p className="relative z-10 text-sm text-gray-500 leading-snug">
                Select <span className="font-medium text-gray-700">SOL</span> or <span className="font-medium text-gray-700">PUMP</span> token
              </p>
            </div>

            {/* Step 2 */}
            <div className="group relative p-4 md:p-6 rounded-2xl border border-gray-100 bg-white shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center md:items-start md:text-left h-full">
              <div className="absolute top-2 right-4 text-4xl md:text-5xl font-black text-gray-200 group-hover:text-[#00994c]/20 transition-colors select-none">
                02
              </div>
              <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gray-50 group-hover:bg-[#00994c]/10 flex items-center justify-center mb-3 md:mb-4 transition-colors">
                <TrendingUp className="w-6 h-6 text-gray-400 group-hover:text-[#00994c] transition-colors" />
              </div>
              <h4 className="relative z-10 font-bold text-gray-900 mb-2 text-lg">Predict</h4>
              <p className="relative z-10 text-sm text-gray-500 leading-snug">
                Will it go <span className="font-medium text-gray-700">Higher</span> or <span className="font-medium text-gray-700">Lower</span>?
              </p>
            </div>

            {/* Step 3 */}
            <div className="group relative p-4 md:p-6 rounded-2xl border border-gray-100 bg-white shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center md:items-start md:text-left h-full">
              <div className="absolute top-2 right-4 text-4xl md:text-5xl font-black text-gray-200 group-hover:text-[#00994c]/20 transition-colors select-none">
                03
              </div>
              <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gray-50 group-hover:bg-[#00994c]/10 flex items-center justify-center mb-3 md:mb-4 transition-colors">
                <BarChart3 className="w-6 h-6 text-gray-400 group-hover:text-[#00994c] transition-colors" />
              </div>
              <h4 className="relative z-10 font-bold text-gray-900 mb-2 text-lg">Watch</h4>
              <p className="relative z-10 text-sm text-gray-500 leading-snug">
                Follow the <span className="font-medium text-gray-700">1-minute</span> live chart
              </p>
            </div>

            {/* Step 4 */}
            <div className="group relative p-4 md:p-6 rounded-2xl border border-gray-100 bg-white shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center md:items-start md:text-left h-full">
              <div className="absolute top-2 right-4 text-4xl md:text-5xl font-black text-gray-200 group-hover:text-[#00994c]/20 transition-colors select-none">
                04
              </div>
              <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gray-50 group-hover:bg-[#00994c]/10 flex items-center justify-center mb-3 md:mb-4 transition-colors">
                <Trophy className="w-6 h-6 text-gray-400 group-hover:text-[#00994c] transition-colors" />
              </div>
              <h4 className="relative z-10 font-bold text-gray-900 mb-2 text-lg">Win</h4>
              <p className="relative z-10 text-sm text-gray-500 leading-snug">
                Instant payout implies <span className="font-medium text-gray-700">Winner Takes All</span>
              </p>
            </div>

          </div>


        </div>
      </section>

      {/* Slide 4: Contests */}
      <section className="slide relative flex items-center justify-center bg-transparent backdrop-blur-[2px] py-8">
        <div className="container relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12 px-4">
            <h2 className="text-3xl md:text-6xl font-bold green-glow mb-4 uppercase tracking-tight">
              SEASON 0 CONTESTS
            </h2>
            <h3 className="text-xl md:text-2xl font-medium text-gray-600">
              Compete. Win Rewards. Become a Legend.
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            {/* Volume Contest */}
            <div className="p-6 md:p-10 rounded-2xl md:rounded-3xl border border-gray-100 bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-15px_rgba(0,153,76,0.1)] transition-all duration-500 flex flex-col h-full group">
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-6">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[#00994c]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <TrendingUp className="w-5 h-5 md:w-7 md:h-7 text-[#00994c]" />
                </div>
                <h4 className="text-lg md:text-2xl font-bold text-gray-900">Volume Contest</h4>
              </div>
              <p className="text-sm md:text-lg text-gray-600 mb-4 md:mb-8 leading-relaxed">
                Active traders share the prize pool. High volume = high rewards in $PUMPSLY.
              </p>
              <div className="mt-auto p-4 md:p-6 rounded-xl md:rounded-2xl bg-[#00994c]/5 border border-[#00994c]/10 group-hover:bg-[#00994c]/10 transition-colors">
                <p className="text-[10px] md:text-xs text-gray-400 uppercase font-black tracking-widest mb-0.5 md:mb-1">Prize Pool</p>
                <p className="text-lg md:text-2xl font-black text-[#00994c]">10% $PUMPSLY</p>
              </div>
            </div>

            {/* Referral Contest */}
            <div className="p-6 md:p-10 rounded-2xl md:rounded-3xl border border-gray-100 bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-15px_rgba(0,153,76,0.1)] transition-all duration-500 flex flex-col h-full group">
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-6">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[#00994c]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Users className="w-5 h-5 md:w-7 md:h-7 text-[#00994c]" />
                </div>
                <h4 className="text-lg md:text-2xl font-bold text-gray-900">Referral Contest</h4>
              </div>
              <p className="text-sm md:text-lg text-gray-600 mb-4 md:mb-8 leading-relaxed">
                Invite network, climb rankings, and secure spot for cash prizes.
              </p>
              <div className="mt-auto p-4 md:p-6 rounded-xl md:rounded-2xl bg-[#00994c]/5 border border-[#00994c]/10 group-hover:bg-[#00994c]/10 transition-colors">
                <p className="text-[10px] md:text-xs text-gray-400 uppercase font-black tracking-widest mb-0.5 md:mb-1">Prize Pool</p>
                <p className="text-lg md:text-2xl font-black text-[#00994c]">$5,000 USD</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 6: Final CTA */}
      <section className="slide relative flex items-center justify-center bg-transparent backdrop-blur-[2px]">
        <div className="container relative z-10 text-center max-w-4xl mx-auto px-6 origin-center scale-90 md:scale-100 transition-transform duration-500">
          <div className="mb-8 p-4">
            <h2 className="text-3xl md:text-7xl font-black mb-6 text-gray-900 leading-tight">
              JOIN THE <span className="green-glow">REVOLUTION</span>
            </h2>
          </div>

          <h3 className="text-2xl md:text-4xl font-semibold mb-8 text-gray-600">
            $PUMPSLY - Where Predictions Meet Profits
          </h3>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Be part of the future of prediction markets. Trade, duel, compete, and earn on the most
            innovative platform on Solana.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="bg-white hover:bg-gray-50 text-[#00994c] border-2 border-[#00994c] font-bold text-base px-8 py-6 rounded-lg transition-all shadow-sm hover:shadow-md"
              onClick={() => window.open("https://twitter.com/intent/follow?screen_name=pumpslyfun", "_blank")}
            >
              <img src="/images/x-logo.svg" alt="X" className="w-5 h-5 mr-2 opacity-80" />
              Follow on X.com
            </Button>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-lg border border-gray-200 bg-white shadow-sm">
                <p className="text-xs text-gray-600 mb-2 font-medium">Contract Address</p>
                <p className="text-[#00994c] font-semibold text-sm">CA: Coming Soon</p>
              </div>
              <div className="p-5 rounded-lg border border-gray-200 bg-white shadow-sm">
                <p className="text-xs text-gray-600 mb-2 font-medium">Launch Status</p>
                <p className="text-gray-600 font-semibold text-sm">Season 0 Soon</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-8 mb-8">
            <div className="flex items-center gap-3">
              <img
                src="/images/solana-logo.png"
                alt="Solana"
                className="h-10 w-10 object-contain opacity-80"
              />
              <p className="text-gray-600 text-sm font-medium">Built on Solana</p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="/images/pumpfun-logo.png"
                alt="Pump.fun"
                className="h-10 w-10 object-contain opacity-80"
              />
              <p className="text-gray-600 text-sm font-medium">Powered by pump.fun</p>
            </div>
          </div>

          <p className="text-gray-600 text-xs font-medium">
            Building in public for Pump.fun Hackathon 2026
          </p>
        </div>
      </section>

      {/* Mobile Navigation Arrows */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 md:hidden">
        {currentSlide > 0 && (
          <button
            onClick={() => scrollToSlide(currentSlide - 1)}
            className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 shadow-lg flex items-center justify-center text-[#00994c]"
          >
            <ArrowDown className="w-6 h-6 rotate-180" />
          </button>
        )}
        {currentSlide < totalSlides - 1 && (
          <button
            onClick={() => scrollToSlide(currentSlide + 1)}
            className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 shadow-lg flex items-center justify-center text-[#00994c]"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
}
