import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart } from 'lucide-react';

export default function App() {
  const [isEaten, setIsEaten] = useState(false);
  const [isForgiven, setIsForgiven] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFF0F5] relative flex flex-col items-center justify-center p-8 font-sans overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#FFD1DC] rounded-full opacity-50"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#FFB7C5] rounded-full opacity-30"></div>
      <div className="absolute top-1/2 -left-20 w-40 h-40 bg-[#FADADD] rounded-full opacity-40"></div>

      <div className="relative w-full max-w-4xl flex flex-col items-center justify-center z-10">
        <AnimatePresence mode="wait">
          {!isEaten ? (
            <motion.div
              key="button"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0, filter: 'blur(10px)' }}
              transition={{ type: 'spring', bounce: 0.5 }}
              className="flex flex-col items-center gap-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsEaten(true)}
                className="w-full sm:w-auto bg-[#FF477E] hover:bg-[#FF1A5E] text-white text-3xl font-black px-12 py-8 rounded-[35px] shadow-[0_12px_0px_#B91C1C] border-b-4 border-[#991B1B] active:translate-y-2 active:shadow-none transition-all flex items-center justify-center gap-4 cursor-pointer group"
              >
                <Heart className="w-8 h-8 fill-white animate-pulse" />
                HÃY ĂN TÔI ĐI 🥺
                <Heart className="w-8 h-8 fill-white animate-pulse" />
              </motion.button>
              <p className="text-[#FF85A1] font-bold text-xl animate-bounce">
                Nhấn vào đây nè! ↓
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ scale: 0.5, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ type: 'spring', bounce: 0.6, duration: 0.8 }}
              className="relative w-full max-w-[640px] bg-white rounded-[60px] shadow-[0_35px_60px_-15px_rgba(255,105,180,0.3)] border-[8px] border-[#FF85A1] p-12 flex flex-col items-center text-center space-y-8"
            >
              {/* Decorative Hearts */}
              <div className="absolute -top-10 -right-10 text-6xl transform rotate-12 select-none">🥰</div>
              <div className="absolute -bottom-10 -left-10 text-6xl transform -rotate-12 select-none">🎀</div>

              {/* Food Photo Section */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="w-56 h-56 rounded-[40px] flex items-center justify-center border-4 border-[#FFB7C5] shadow-[0_10px_20px_rgba(255,105,180,0.2)] overflow-hidden relative bg-[#FFF0F3]"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Mixed_rice_paper.jpg" 
                  alt="Bánh tráng trộn" 
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Message Section */}
              <div className="space-y-4">
                <motion.h1 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl font-black text-[#FF477E] tracking-tight"
                >
                  Bánh Tráng Trộn Đây! 🎉
                </motion.h1>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-2xl font-medium text-[#FF85A1] italic">
                    "Ăn xong bớt giận nha... nhaaa!" ✨
                  </p>
                </motion.div>
              </div>

              {/* Cute Detail List */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap justify-center gap-3"
              >
                <span className="px-4 py-2 bg-[#FFEBEE] text-[#FF477E] rounded-full text-sm font-bold border border-[#FFCCD5]">🌶️ Siêu Cay</span>
                <span className="px-4 py-2 bg-[#F3E5F5] text-[#AB47BC] rounded-full text-sm font-bold border border-[#E1BEE7]">🥚 Trứng Cút</span>
                <span className="px-4 py-2 bg-[#E8F5E9] text-[#43A047] rounded-full text-sm font-bold border border-[#C8E6C9]">🥭 Xoài Chua</span>
              </motion.div>

              <div className="flex flex-col items-center gap-4 mt-4 w-full">
                <AnimatePresence mode="wait">
                  {!isForgiven ? (
                    <motion.button
                      key="forgive-btn"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ delay: 1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsForgiven(true)}
                      className="w-full sm:w-auto bg-[#FF477E] hover:bg-[#FF1A5E] text-white text-xl font-bold px-8 py-4 rounded-full shadow-[0_6px_0px_#B91C1C] border-b-4 border-[#991B1B] active:translate-y-2 active:shadow-none transition-all flex items-center justify-center gap-3 cursor-pointer"
                    >
                      <Heart className="w-6 h-6 fill-white animate-pulse" />
                      Hết giận anh nha em bé 🥺
                    </motion.button>
                  ) : (
                    <motion.div
                      key="forgiven-msg"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-2xl font-black text-[#FF477E] flex items-center gap-2 bg-[#FFF0F3] px-6 py-3 rounded-full"
                    >
                      Yêu em nhất trên đời! 🥰💖
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  onClick={() => { setIsEaten(false); setTimeout(() => setIsForgiven(false), 500); }}
                  className="px-6 py-3 bg-[#FFF0F3] text-[#FF85A1] hover:text-[#FF477E] hover:bg-[#FFD1DC] rounded-full font-bold transition-colors cursor-pointer"
                >
                  Quay lại
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating Feedback/Mood Section (Only visible when eaten) */}
      <AnimatePresence>
        {isEaten && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 w-full max-w-2xl flex justify-between items-center bg-white/60 backdrop-blur-md rounded-full px-8 py-4 border-2 border-white shadow-sm z-20 hidden md:flex"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#FF85A1] rounded-full flex items-center justify-center text-white font-bold text-xl">✓</div>
              <span className="text-[#FF477E] font-bold">Đã chuẩn bị xong bánh tráng trộn siêu ngon</span>
            </div>
            <div className="flex -space-x-3">
              <div className="w-8 h-8 rounded-full border-2 border-white bg-pink-200 flex items-center justify-center text-[10px]">🍓</div>
              <div className="w-8 h-8 rounded-full border-2 border-white bg-pink-300 flex items-center justify-center text-[10px]">🍭</div>
              <div className="w-8 h-8 rounded-full border-2 border-white bg-pink-400 flex items-center justify-center text-[10px]">🌸</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
