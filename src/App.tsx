import { useState, useEffect } from 'react';
import { Download, Info, CheckCircle, AlertTriangle, ExternalLink, BookOpen, Copy, Calendar, HardDrive, ArrowRight, Check, Monitor, X } from 'lucide-react';

interface TUInfo {
  title: string;
  features: string[];
  date?: string;
  size?: string;
}

const CHANGELOGS: Record<number, TUInfo> = {
  1: {
    title: "Original Release",
    features: ["Initial release of Minecraft Xbox 360 Edition.", "Based on Beta 1.6.6."],
    date: "May 9, 2012",
    size: "~111 MB"
  },
  5: {
    title: "Pistons Update (Beta 1.7.3)",
    features: ["Added Pistons and Sticky Pistons.", "Added Shears.", "Fixed clay generation bugs."],
    date: "July 13, 2012",
    size: "~4 MB"
  },
  7: {
    title: "The Adventure Update (1.0.0)",
    features: ["Added Creative Mode & Hunger System.", "Added Endermen, Villages, Strongholds.", "New Biomes: Swamp, Mushroom Island.", "Breeding, Potions, Enchanting."],
    date: "Dec 19, 2012",
    size: "~45 MB"
  },
  9: {
    title: "The End Update",
    features: ["Added The End dimension.", "Added Ender Dragon boss fight.", "Added Spawn Eggs."],
    date: "Apr 5, 2013",
    size: "~52 MB"
  },
  12: {
    title: "Jungle Update (1.2.1)",
    features: ["Added Jungle Biome.", "Added Ocelots/Cats, Iron Golems.", "Increased height limit to 256.", "Redstone Lamps."],
    date: "Aug 23, 2013",
    size: "~88 MB"
  },
  13: {
    title: "Trading Update (1.3.1)",
    features: ["Added Emeralds & Villager Trading.", "Added Ender Chests.", "Added Cocoa Beans in Jungles.", "Added Tripwire Hooks."],
    date: "Oct 16, 2013",
    size: "~95 MB"
  },
  14: {
    title: "Pretty Scary Update (1.4.2)",
    features: ["Added Anvils, Beacons.", "Added Carrots, Potatoes, Pumpkin Pie.", "Added Wither Skeletons, Bats, Witches.", "Added Wither Boss."],
    date: "Mar 26, 2014",
    size: "~110 MB"
  },
  19: {
    title: "The Horse Update (1.6.1)",
    features: ["Added Horses, Donkeys, Mules.", "Added Leads, Hay Bales, Name Tags.", "Added Hardened Clay/Stained Clay.", "UI Updates."],
    date: "Dec 18, 2014",
    size: "~145 MB"
  },
  31: {
    title: "The Update that Changed the World (1.7.2)",
    features: ["New Biomes: Mesa, Roofed Forest, Savanna.", "Added Stained Glass & Panes.", "Added Salmon, Pufferfish, Clownfish.", "New Flowers and Trees."],
    date: "Dec 18, 2015",
    size: "~320 MB"
  },
  43: {
    title: "Polar Bear Update (1.10)",
    features: ["Added Polar Bears.", "Added Banners.", "Added Beetroots & Beetroot Soup.", "New Structure Blocks."],
    date: "Oct 4, 2016",
    size: "~500 MB"
  },
  46: {
    title: "Bountiful Update (1.8/1.9)",
    features: ["Added Elytra and Wings.", "Added End Cities and Shulkers.", "Added Lingering Potions.", "New Boats and Path Blocks."],
    date: "Dec 21, 2016",
    size: "~620 MB"
  },
  53: {
    title: "Holiday Update",
    features: ["Added Glide Mini Game.", "Updated UI/sounds.", "various bug fixes."],
    date: "May 30, 2017",
    size: "~750 MB"
  },
  54: {
    title: "Woodland Mansion Update (1.11)",
    features: ["Added Woodland Mansions.", "Added Llamas, Evokers, Vindicators.", "Added Totem of Undying.", "Added Shulker Boxes."],
    date: "June 27, 2017",
    size: "~760 MB"
  },
  69: {
    title: "Update Aquatic (1.13)",
    features: ["Added Tridents, Turtles, Phantoms.", "Added Coral Reefs, Kelp, Sea Pickles.", "Added Drowned zombies.", "Swimming animation update."],
    date: "Sep 11, 2018",
    size: "~1.05 GB"
  },
  75: {
    title: "Final Undocumented Update",
    features: ["Minor bug fixes.", "Last update for Xbox 360 Edition.", "No patch notes released."],
    date: "March 19, 2019",
    size: "~1.1 GB"
  }
};

const STEVE_TIPS = [
  "Hi! I'm Steve. Need help downloading updates?",
  "TU1 to TU6 go in the 'Cache' folder!",
  "For most updates, put them in Content/0000000000000000/584111F7/000B0000/",
  "TU75 is the last update ever released.",
  "Make sure to restart your game after installing!",
  "Use Xenia Canary for the best emulation experience.",
  "Don't forget to backup your saves!",
  "The 'Undocumented Update' (TU75) fixes some final bugs.",
  "Use the 'Copy Link' button to share with friends!",
  "I miss the old tutorial worlds..."
];

function SteveGuide() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentTip, setCurrentTip] = useState(0);
  const [isTalking, setIsTalking] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    
    // Auto-cycle tips every 8 seconds
    const interval = setInterval(() => {
      setIsTalking(true);
      setTimeout(() => setIsTalking(false), 500); // Talk animation
      setCurrentTip((prev) => (prev + 1) % STEVE_TIPS.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isVisible]);

  const nextTip = () => {
    setIsTalking(true);
    setTimeout(() => setIsTalking(false), 300);
    setCurrentTip((prev) => (prev + 1) % STEVE_TIPS.length);
  };

  if (!isVisible) {
    return (
      <button 
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 z-50 bg-[#3b3b3b] border-2 border-white p-2 shadow-lg hover:scale-110 transition-transform group"
        title="Ask Steve"
      >
        <div className="w-8 h-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gridTemplateRows: 'repeat(8, 1fr)' }}>
            {/* Simple 8x8 Steve Head Icon */}
            <div className="col-span-8 row-span-2 bg-[#2e1f16]"></div> {/* Hair */}
            <div className="col-span-1 row-span-3 bg-[#2e1f16]"></div> {/* Side Hair */}
            <div className="col-span-1 row-span-3 col-start-8 bg-[#2e1f16]"></div> {/* Side Hair */}
            <div className="col-span-6 row-span-3 col-start-2 row-start-3 bg-[#e0ae87]"></div> {/* Face */}
            <div className="col-span-2 row-span-1 col-start-2 row-start-4 bg-white"></div> {/* L Eye */}
            <div className="col-span-1 row-span-1 col-start-3 row-start-4 bg-[#494698]"></div> {/* L Pupil */}
            <div className="col-span-2 row-span-1 col-start-6 row-start-4 bg-white"></div> {/* R Eye */}
            <div className="col-span-1 row-span-1 col-start-7 row-start-4 bg-[#494698]"></div> {/* R Pupil */}
            <div className="col-span-2 row-span-1 col-start-4 row-start-5 bg-[#a06e49]"></div> {/* Nose */}
            <div className="col-span-4 row-span-1 col-start-3 row-start-6 bg-[#6e4633]"></div> {/* Mouth */}
            <div className="col-span-8 row-span-2 row-start-7 bg-[#e0ae87]"></div> {/* Chin/Neck */}
        </div>
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-end gap-4 max-w-[300px] md:max-w-md animate-slide-in-right">
      {/* Speech Bubble */}
      <div className="bg-[#c6c6c6] border-2 border-black p-1 shadow-[4px_4px_0_rgba(0,0,0,0.5)] mb-8 flex-1 relative">
        <div className="bg-[#e6e6e6] border border-[#555] p-3 text-black font-minecraft text-sm md:text-base leading-tight relative">
           <div className="absolute -right-2 bottom-4 w-4 h-4 bg-[#c6c6c6] border-r-2 border-b-2 border-black transform rotate-45 z-0"></div>
           <div className="absolute -right-[5px] bottom-[17px] w-3 h-3 bg-[#e6e6e6] transform rotate-45 z-10"></div>
           
           <div className="flex justify-between items-start gap-2 mb-1">
             <span className="font-bold text-[#333]">Steve says:</span>
             <button onClick={() => setIsVisible(false)} className="text-gray-500 hover:text-red-500">
               <X className="w-3 h-3" />
             </button>
           </div>
           
           <p className="min-h-[40px]">{STEVE_TIPS[currentTip]}</p>
           
           <div className="mt-2 flex justify-end">
             <button 
               onClick={nextTip}
               className="text-xs text-blue-600 hover:underline flex items-center gap-1"
             >
               Next Tip <ArrowRight className="w-3 h-3" />
             </button>
           </div>
        </div>
      </div>

      {/* Steve Head (Larger) */}
      <div 
        className={`w-16 h-16 md:w-20 md:h-20 shadow-[4px_4px_0_rgba(0,0,0,0.5)] transform transition-transform ${isTalking ? 'translate-y-[-2px]' : ''}`}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gridTemplateRows: 'repeat(8, 1fr)' }}
        onClick={nextTip}
      >
          {/* Detailed 8x8 Steve Head */}
          <div className="col-span-8 row-span-2 bg-[#2e1f16]"></div> {/* Hair Top */}
          <div className="col-span-1 row-span-3 row-start-3 bg-[#2e1f16]"></div> {/* Side Hair L */}
          <div className="col-span-1 row-span-3 col-start-8 row-start-3 bg-[#2e1f16]"></div> {/* Side Hair R */}
          
          <div className="col-span-6 row-span-3 col-start-2 row-start-3 bg-[#e0ae87]"></div> {/* Forehead/Face */}
          
          {/* Eyes */}
          <div className="col-span-1 row-span-1 col-start-2 row-start-4 bg-white"></div>
          <div className="col-span-1 row-span-1 col-start-3 row-start-4 bg-[#494698]"></div>
          <div className="col-span-1 row-span-1 col-start-6 row-start-4 bg-white"></div>
          <div className="col-span-1 row-span-1 col-start-7 row-start-4 bg-[#494698]"></div>
          
          {/* Nose */}
          <div className="col-span-2 row-span-1 col-start-4 row-start-5 bg-[#a06e49]"></div>
          
          {/* Mouth / Beard area */}
          <div className="col-span-4 row-span-1 col-start-3 row-start-6 bg-[#6e4633]"></div>
          
          {/* Chin */}
          <div className="col-span-8 row-span-2 row-start-7 bg-[#e0ae87]"></div>
      </div>
    </div>
  );
}

function App() {
  const [tuNumber, setTuNumber] = useState<number>(1);
  const [downloadUrl, setDownloadUrl] = useState<string>('');
  const [isHovering, setIsHovering] = useState(false);
  const [splashText, setSplashText] = useState("Now with TU1!");
  const [copied, setCopied] = useState(false);

  const splashes = [
    "Now with TU1!",
    "100% Cubes!",
    "Console Edition!",
    "Check archive.org!",
    "Update your world!",
    "Nostalgia included!",
    "Don't dig down!",
    "Creeper? Aww man!",
    "Herobrine removed."
  ];

  useEffect(() => {
    // Random splash text on load
    setSplashText(splashes[Math.floor(Math.random() * splashes.length)]);
  }, []);

  useEffect(() => {
    const baseUrl = "https://archive.org/download/Minecraft-Xbox360-TUs/Minecraft%20Xbox%20360%20Edition%20TUs";

    // Generate the URL based on the selected TU number
    if (tuNumber === 1) {
      setDownloadUrl(`${baseUrl}/TU1/Cache/TU_1C424FN_0000004000000.0000000000081`);
    } else if (tuNumber >= 2 && tuNumber <= 6) {
      setDownloadUrl(`${baseUrl}/TU${tuNumber}/Cache/tu00000001_00000000`);
    } else if (tuNumber === 42) {
      // TU42 uses a different base path structure
      setDownloadUrl(`https://archive.org/download/Minecraft-Xbox360-TUs/TU42/584111F7/000B0000/tu00000001_00000000`);
    } else if (tuNumber === 75) {
      setDownloadUrl(`${baseUrl}/TU75%20Undocumented%20Update/tu00000001_00000000`);
    } else if (tuNumber >= 24) {
      setDownloadUrl(`${baseUrl}/TU${tuNumber}/tu00000001_00000000`);
    } else {
      setDownloadUrl(`${baseUrl}/TU${tuNumber}/584111F7/000B0000/tu00000001_00000000`);
    }
    setCopied(false);
  }, [tuNumber]);

  const handleDownload = () => {
    window.open(downloadUrl, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(downloadUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentChangelog = CHANGELOGS[tuNumber];

  return (
    <div className="min-h-screen bg-minecraft-dirt flex flex-col items-center justify-center p-4 selection:bg-yellow-400 selection:text-black font-minecraft relative overflow-x-hidden">
      
      {/* Header Section */}
      <div className="text-center mb-8 relative z-10">
        <h1 className="minecraft-logo-text mb-2 text-6xl md:text-8xl drop-shadow-xl">MINECRAFT</h1>
        <h2 className="text-xl md:text-2xl text-gray-300 mc-label tracking-widest uppercase bg-black/40 px-4 py-1 inline-block border-2 border-gray-600">
          Xbox 360 TU Downloader
        </h2>
        <div className="text-yellow-400 text-lg md:text-xl animate-bounce mt-2 transform rotate-[-5deg] drop-shadow-md whitespace-nowrap absolute right-0 -bottom-6 md:-right-12 md:bottom-2" 
             style={{ textShadow: '2px 2px 0 #3f3f00' }}>
          {splashText}
        </div>
      </div>

      {/* Main Content Box */}
      <div className="w-full max-w-2xl relative z-10">
        <div className="bg-[#c6c6c6] border-4 border-black p-1 shadow-[8px_8px_0_rgba(0,0,0,0.5)]">
          <div className="bg-[#3b3b3b] border-2 border-[#585858] p-4 md:p-6 text-center space-y-6 md:space-y-8 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
            
            {/* Selection Area */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                 <label className="block text-xl md:text-2xl mc-label text-gray-200 text-left">Select Update</label>
                 <button 
                    onClick={() => setTuNumber(75)}
                    className="text-xs text-green-400 hover:text-green-300 hover:underline cursor-pointer font-mono flex items-center gap-1"
                 >
                    Jump to Latest <ArrowRight className="w-3 h-3" />
                 </button>
              </div>
              
              <div className="flex flex-col items-center">
                <select 
                  value={tuNumber}
                  onChange={(e) => setTuNumber(Number(e.target.value))}
                  className="mc-select w-full text-center text-lg md:text-xl py-3"
                >
                  {Array.from({ length: 75 }, (_, i) => i + 1)
                    .map((n) => (
                      <option key={n} value={n} className="bg-black text-white">
                        Title Update {n} {CHANGELOGS[n]?.date ? `(${CHANGELOGS[n].date.split(',')[1].trim()})` : ''}
                      </option>
                  ))}
                </select>
              </div>

              <div className="text-[#a0a0a0] text-sm md:text-base font-mono bg-black/30 p-2 border border-black/20 rounded">
                {tuNumber === 1 ? 'TU1 (Original Release)' : tuNumber === 75 ? 'TU75 (Undocumented Update)' : `TU${tuNumber}`}
              </div>
            </div>

            {/* Metadata Grid */}
            {currentChangelog && (currentChangelog.date || currentChangelog.size) && (
               <div className="grid grid-cols-2 gap-2 text-gray-400 text-sm font-mono border-t border-b border-white/10 py-3">
                  {currentChangelog.date && (
                    <div className="flex flex-col items-center">
                      <div className="flex items-center gap-1 text-gray-500 mb-1"><Calendar className="w-3 h-3" /> Released</div>
                      <span className="text-gray-200">{currentChangelog.date}</span>
                    </div>
                  )}
                  {currentChangelog.size && (
                    <div className="flex flex-col items-center">
                      <div className="flex items-center gap-1 text-gray-500 mb-1"><HardDrive className="w-3 h-3" /> Size</div>
                      <span className="text-gray-200">{currentChangelog.size}</span>
                    </div>
                  )}
               </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <button
                onClick={handleDownload}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="mc-button w-full py-4 px-6 text-xl md:text-2xl flex items-center justify-center gap-3 group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-white/10 transform transition-transform duration-300 ${isHovering ? 'translate-y-0' : 'translate-y-full'}`} />
                <Download className={`w-6 h-6 md:w-8 md:h-8 ${isHovering ? 'animate-bounce' : ''} relative z-10`} />
                <span className="relative z-10">Download TU{tuNumber}</span>
              </button>
              
              <button
                onClick={handleCopyLink}
                className="mc-button-secondary w-full py-2 px-4 text-sm flex items-center justify-center gap-2 group text-gray-300 hover:text-white transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Direct Link'}</span>
              </button>
            </div>

            {/* File Info */}
            <div className="bg-[#2b2b2b] p-3 border-2 border-[#1a1a1a] text-left text-gray-500 font-mono text-xs break-all relative group">
              <div className="absolute top-0 right-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                 <ExternalLink className="w-3 h-3" />
              </div>
              <span className="select-all">{downloadUrl}</span>
            </div>

          </div>
        </div>

        {/* Changelog Panel (Conditional) */}
        {currentChangelog && (
          <div className="mt-8 bg-[#c6c6c6] border-4 border-black p-1 shadow-[8px_8px_0_rgba(0,0,0,0.5)] animate-fade-in relative z-0 transform hover:-translate-y-1 transition-transform duration-300">
             <div className="bg-[#3e3226] border border-[#2b231a] p-4 md:p-6 text-white bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] shadow-inner">
                <h3 className="text-xl md:text-2xl mc-label mb-4 flex items-center gap-2 text-yellow-200 border-b-2 border-[#5c4a38] pb-2">
                  <BookOpen className="text-yellow-400 w-5 h-5 md:w-6 md:h-6" /> {currentChangelog.title}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-[#ddd] font-serif tracking-wide">
                  {currentChangelog.features.map((feature, idx) => (
                    <li key={idx} className="pl-2 leading-relaxed">{feature}</li>
                  ))}
                </ul>
             </div>
          </div>
        )}

        {/* Instructions Panel */}
        <div className="mt-8 bg-[#c6c6c6] border-4 border-black p-1 shadow-[8px_8px_0_rgba(0,0,0,0.5)]">
          <div className="bg-[#242424] border border-[#1a1a1a] p-4 md:p-6">
            <h3 className="text-xl md:text-2xl mc-label mb-4 flex items-center gap-2 border-b-2 border-[#444] pb-2 text-gray-200">
              <Info className="text-blue-400" /> Installation Guide
            </h3>
            
            {/* RGH / JTAG Instructions */}
            <div className="space-y-4 text-base md:text-lg text-gray-300 mb-8">
              <h4 className="text-lg md:text-xl mc-label text-orange-300 border-l-4 border-orange-500 pl-2">Xbox 360 (RGH/JTAG)</h4>
              <div className="flex gap-4 items-start group">
                <div className="bg-[#333] w-8 h-8 flex items-center justify-center border border-[#555] text-white font-bold flex-shrink-0 group-hover:bg-[#444] transition-colors">1</div>
                <div>
                  <p className="mb-1 text-white">Download the file.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="bg-[#333] w-8 h-8 flex items-center justify-center border border-[#555] text-white font-bold flex-shrink-0 group-hover:bg-[#444] transition-colors">2</div>
                <div>
                  <p className="mb-1 text-white">Transfer to your Xbox 360.</p>
                  <p className="text-sm text-gray-500">Use a USB drive or FTP client like FileZilla.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="bg-[#333] w-8 h-8 flex items-center justify-center border border-[#555] text-white font-bold flex-shrink-0 group-hover:bg-[#444] transition-colors">3</div>
                <div>
                  <p className="mb-1 text-white">Place the file in the correct path:</p>
                  <div className="bg-black p-3 mt-2 border-l-4 border-green-600 font-mono text-xs md:text-sm select-all text-gray-300">
                    Partition3/Content/0000000000000000/584111F7/000B0000/
                  </div>
                  <p className="text-sm text-yellow-500/90 mt-2 flex items-center gap-1">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                    <span>For TU1, place inside the <span className="text-white font-bold">Cache</span> partition.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Xenia Instructions */}
            <div className="border-t border-[#444] pt-6 space-y-4 text-base md:text-lg text-gray-300">
               <h4 className="text-lg md:text-xl mc-label text-purple-300 border-l-4 border-purple-500 pl-2 flex items-center gap-2">
                 <Monitor className="w-5 h-5" /> Xenia Canary (Experimental)
               </h4>
               <div className="space-y-3 bg-black/20 p-4 rounded border border-white/5">
                 <div className="flex gap-3">
                   <span className="text-purple-400 font-bold min-w-[20px]">1.</span>
                   <span>Open Minecraft in Xenia.</span>
                 </div>
                 <div className="flex gap-3">
                   <span className="text-purple-400 font-bold min-w-[20px]">2.</span>
                   <span>Go to <span className="text-white bg-black/40 px-1 border border-white/10 mx-1">File</span> → <span className="text-white bg-black/40 px-1 border border-white/10 mx-1">Install Content from File</span></span>
                 </div>
                 <div className="flex gap-3">
                   <span className="text-purple-400 font-bold min-w-[20px]">3.</span>
                   <span>Select the downloaded Title Update file.</span>
                 </div>
                 <div className="flex gap-3">
                   <span className="text-purple-400 font-bold min-w-[20px]">4.</span>
                   <span>Open it and wait for it to install.</span>
                 </div>
                 <div className="flex gap-3">
                   <span className="text-purple-400 font-bold min-w-[20px]">5.</span>
                   <span>When done, restart Minecraft.</span>
                 </div>
               </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#333] flex items-center gap-2 text-green-400 justify-center">
                <CheckCircle className="w-5 h-5" />
                <span>Ready to play! Restart the game to apply.</span>
              </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-[#555] text-xs md:text-sm mt-12 pb-8">
          <p className="mb-2">Not affiliated with Mojang, Microsoft, or 4J Studios.</p>
          <p>Files hosted by Archive.org. Built for preservation.</p>
          <div className="mt-4 flex justify-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Simple visual blocks representing grass */}
             <div className="w-4 h-4 bg-green-800 border border-green-600"></div>
             <div className="w-4 h-4 bg-green-800 border border-green-600"></div>
             <div className="w-4 h-4 bg-green-800 border border-green-600"></div>
          </div>
        </div>
      </div>
      <SteveGuide />
    </div>
  );
}

export { App };
